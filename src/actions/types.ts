export interface IError {
    error: string;
    status: number;
}

export interface INewsResponse {
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

export interface INewsDetailsResponse {
    news: INewsItem;
}

export interface IAuthorizationResponse {
    user: IUser;
}

export interface IUser {
    avatar_url: string;
    username: string;
    avatar_original_url: string;
    email: string;
    points_total: number;
}
