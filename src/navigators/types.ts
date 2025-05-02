import { INewsItem } from '../actions/getNewsList';

export type RootStackParamList = {
    NewsList: undefined;
    NewsDetail: { item: INewsItem };
    Login: undefined;
};
