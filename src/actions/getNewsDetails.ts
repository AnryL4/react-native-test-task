import { API_URLS, apiWrapper } from './api';
import { IError, INewsDetailsResponse } from './types';

// Запрос на получение новости по id
export const getNewsDetails = async (
    id: number,
) => {
    const response = await apiWrapper.get<INewsDetailsResponse, IError>(API_URLS.news.details(id));

    if (!response.ok) {
        console.log(response?.data?.error);
    }

    return response.data as INewsDetailsResponse;
};
