import { create } from 'apisauce';
import { store } from '../app/store';

// Настройки заголовков и базового url
export const apiWrapper = create({
    baseURL: `${process.env.API_URL}`,
    headers: {
        'Content-Type': 'application/json',
    },
    transformRequest: [
        // Преобразуем все данные перед отправкой на сервер в формат JSON
        data => {
            return JSON.stringify(data);
        },
    ],
});

apiWrapper.addRequestTransform(request => {
    const state = store.getState();
    const { accessToken, client, uid } = state.auth;

    if (accessToken && client && uid && request.headers) {
        request.headers['access-token'] = accessToken;
        request.headers.client = client;
        request.headers.uid = uid;
    }
});
// apiWrapper.addResponseTransform(response => {
//     console.log('Response:', response);
// });

export const API_URLS = {
    auth: {
        authorization: '/auth/sign_in',
    },
    news: {
        list: '/news',
        currentNews: (id: string) => `/news/${id}`,
    },
};
