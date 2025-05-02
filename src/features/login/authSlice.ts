import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    accessToken: string | null;
    client: string | null;
    uid: string | null;
    avatar_url: string | null;
    username: string | null;
    avatar_original_url: string | null;
    email: string | null;
    points_total: number | null;
}

const initialState: AuthState = {
    accessToken: null,
    client: null,
    uid: null,
    avatar_url: null,
    username: null,
    avatar_original_url: null,
    email: null,
    points_total: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthState: (state, action: PayloadAction<AuthState>) => {
            state.accessToken = action.payload.accessToken;
            state.client = action.payload.client;
            state.uid = action.payload.uid;
            state.avatar_url = action.payload.avatar_url;
            state.username = action.payload.username;
            state.avatar_original_url = action.payload.avatar_original_url;
            state.email = action.payload.email;
            state.points_total = action.payload.points_total;
        },
        clearAuthState: state => {
            state.accessToken = null;
            state.client = null;
            state.uid = null;
            state.avatar_url = null;
            state.username = null;
            state.avatar_original_url = null;
            state.email = null;
            state.points_total = null;
        },
    },
});

export const { setAuthState, clearAuthState } = authSlice.actions;

export default authSlice.reducer;
