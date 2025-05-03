import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { Text, StyleSheet, Image, ScrollView, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { RootStackParamList } from '../navigators/types';
import { stripHtml } from '../lib/text';
import { getNewsDetails } from '../actions/getNewsDetails';
import { INewsItem } from '../actions/types';
import { Loader } from '../components/Loader';
import { Refresh } from '../components/Refresh';

type NewsDetailRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;

export const NewsDetailScreen = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [newsDetail, setNewsDetail] = useState<INewsItem | null>(null);
    const navigation = useNavigation();
    const route = useRoute<NewsDetailRouteProp>();
    const { id } = route.params;

    const getNewsDetail = useCallback(async () => {
        setIsLoading(true);
        const response = await getNewsDetails(id);
        setNewsDetail(response.news);
        setIsLoading(false);
    }, [id]);

    const renderNewsDetail = newsDetail ?
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: newsDetail?.image_url }} style={styles.image} />
            <View style={styles.info}>
                <Text>{newsDetail?.category}</Text>
                <Text>{newsDetail?.created_at.split('T')[0]}</Text>
            </View>
            <Text style={styles.textTitle}>{newsDetail?.title}</Text>
            <Text style={styles.textBody}>{stripHtml(newsDetail?.body || '')}</Text>
        </ScrollView> : <Refresh onRefreshClick={() => getNewsDetail()} />;

    useLayoutEffect(() => {
        navigation.setOptions({ title: newsDetail?.title });
    }, [navigation, newsDetail?.title]);

    useEffect(() => {
        getNewsDetail();
    }, [getNewsDetail]);

    return (isLoading ?
        <Loader /> : renderNewsDetail
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    image: {
        width: '100%',
        height: 300,
        marginTop: 10,
        borderRadius: 8,
        objectFit: 'contain',
    },
    textTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    textBody: {
        fontSize: 16,
        lineHeight: 22,
    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'space-between',
    },
});
