import { AppDispatch } from '../app/store';
import { API_URLS, apiWrapper } from './api';
import { setAuthState } from '../features/login/authSlice';

interface IAuthorizationResponse {
    user: IUser;
}

export interface IUser {
    avatar_url: string;
    username: string;
    avatar_original_url: string;
    email: string;
    points_total: number;
}

export const authorization = async (
    payload: { email: string, password: string },
    dispatch: AppDispatch
) => {
    const response = await apiWrapper.post<IAuthorizationResponse>(API_URLS.auth.authorization, payload);

    if (response.ok && response.headers) {
        dispatch(setAuthState({
            accessToken: response.headers['access-token'],
            client: response.headers.client,
            uid: response.headers.uid,
            avatar_url: response?.data?.user.avatar_url || null,
            username: response?.data?.user.username || null,
            avatar_original_url: response?.data?.user.avatar_url || null,
            email: response?.data?.user.email || null,
            points_total: response?.data?.user.points_total || null,
        }));
    }

    return response.data;
};
