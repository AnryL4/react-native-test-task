import { API_URLS, apiWrapper } from './api';
import { INewsItem } from './getNewsList';

interface INewsDetailsResponse {
    news: INewsItem;
}

export const getNewsDetails = async (
    id: number,
) => {
    const response = await apiWrapper.get<INewsDetailsResponse>(API_URLS.news.details(id));

    if (!response.ok) {
        throw new Error('Get news details is error');
    }

    return response.data as INewsDetailsResponse;
};
