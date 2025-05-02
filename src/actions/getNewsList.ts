import { API_URLS, apiWrapper } from './api';

interface INewsResponse {
    news: INewsItem[];
}

export interface INewsItem {
    body: string;
    category: string | null;
    created_at: string;
    icon: null;
    id: number;
    image_additional_url: string;
    image_url: string;
    model_name: string;
    short_text: string;
    table_name: string;
    title: string;
}

export const getNewsList = async (
) => {
    const response = await apiWrapper.get<INewsResponse>(API_URLS.news.list);

    if (!response.ok) {
        throw new Error('Get news list error');
    }

    return response.data as INewsResponse;
};
