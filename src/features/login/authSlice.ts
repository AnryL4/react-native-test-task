import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    accessToken: string | null;
    client: string | null;
    uid: string | null;
    avatar_url: string | null;
    username: string | null;
}

const initialState: AuthState = {
    accessToken: null,
    client: null,
    uid: null,
    avatar_url: null,
    username: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTokens: (state, action: PayloadAction<AuthState>) => {
            state.accessToken = action.payload.accessToken;
            state.client = action.payload.client;
            state.uid = action.payload.uid;
            state.avatar_url = action.payload.avatar_url;
            state.username = action.payload.username;
        },
        clearTokens: state => {
            state.accessToken = null;
            state.client = null;
            state.uid = null;
            state.avatar_url = null;
            state.username = null;
        },
    },
});

export const { setTokens, clearTokens } = authSlice.actions;

export default authSlice.reducer;
