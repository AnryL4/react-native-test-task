import { AppDispatch } from '../app/store';
import { API_URLS, apiWrapper } from './api';
import { setAuthState } from '../features/login/authSlice';
import { IAuthorizationResponse, IError } from './types';

// Запрос на авторизацию пользователя
export const authorization = async (
    payload: { email: string, password: string },
    dispatch: AppDispatch
) => {
    const response = await apiWrapper.post<IAuthorizationResponse, IError>(API_URLS.auth.authorization, payload);

    if (!response.ok) {
        console.log(response?.data?.error);
    }

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
