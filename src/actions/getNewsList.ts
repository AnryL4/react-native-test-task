import { Alert } from 'react-native';
import { API_URLS, apiWrapper } from './api';
import { IError, INewsResponse } from './types';

// Запрос на получение списка новостей
export const getNewsList = async (
) => {
    const response = await apiWrapper.get<INewsResponse, IError>(API_URLS.news.list);

    if (!response.ok) {
        console.log(response?.data?.error);
        Alert.alert('Error', response?.data?.error);
    }

    return response.data as INewsResponse;
};
