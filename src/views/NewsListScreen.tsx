import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getNewsList, INewsItem } from '../actions/getNewsList';
import { Navigation } from '../navigators/types';
import { stripHtml } from '../lib/text';
import { Loader } from '../components/Loader';

export const NewsListScreen = () => {
    const navigation = useNavigation<Navigation>();
    const [isLoading, setIsLoading] = useState(false);

    const [news, setNews] = useState<INewsItem[]>([]);

    const getNews = async () => {
        setIsLoading(true);
        const response = await getNewsList();
        setNews(response.news);
        setIsLoading(false);
    };

    const renderItem = ({ item }: { item: INewsItem }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('NewsDetail', { id: item.id })}
                style={styles.button}
            >
                <Image source={{ uri: item.image_url }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle}>{item.title}</Text>
                    <Text style={styles.textDescription} numberOfLines={3} ellipsizeMode="tail">
                        {stripHtml(item.short_text)}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    useEffect(() => {
        getNews();
    }, []);

    return (
        isLoading ? <Loader /> : <FlatList data={news} renderItem={renderItem} contentContainerStyle={styles.container} />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        gap: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'lightgrey',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        marginRight: 10,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    textDescription: {
        fontSize: 14,
        color: '#333',
    },
});
