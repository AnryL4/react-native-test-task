import React, { useLayoutEffect } from 'react';
import { Text, StyleSheet, Image, ScrollView, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigators/types';
import { stripHtml } from '../lib/text';

type NewsDetailRouteProp = RouteProp<RootStackParamList, 'NewsDetail'>;

export const NewsDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute<NewsDetailRouteProp>();
    const { item } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({ title: item.title });
    }, [navigation, item.title]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
            <View style={styles.info}>
                <Text>{item.category}</Text>
                <Text>{item.created_at.split('T')[0]}</Text>
            </View>
            <Text style={styles.textTitle}>{item.title}</Text>
            <Text style={styles.textBody}>{stripHtml(item.body)}</Text>
        </ScrollView>
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
