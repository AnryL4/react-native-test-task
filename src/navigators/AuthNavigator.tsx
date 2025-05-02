import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewsListScreen } from '../views/NewsListScreen';
import { NewsDetailScreen } from '../views/NewsDetailScreen';
import { RootState } from '../app/store';
import { LoginScreen } from '../views/LoginScreen';
import { RootStackParamList } from './types';
import { clearTokens } from '../features/login/authSlice';
import HeaderLeft from '../features/header/HeaderLeft';
import HeaderRight from '../features/header/HeaderRight';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const renderLeftHeader = () => {
        return auth.accessToken ?
            <HeaderLeft
                avatarUrl={auth.avatar_url}
                userName={auth.username}
            /> : null;
    };

    const renderRightHeader = () => {
        return auth.accessToken ?
            <HeaderRight
                onLogout={() => dispatch(clearTokens())}
            /> : null;
    };

    return (
        <Stack.Navigator screenOptions={{
            headerTitleAlign: 'center',
            headerLeft: renderLeftHeader,
            headerRight: renderRightHeader,
        }}>
            {auth.accessToken ? (
                <>
                    <Stack.Screen name="NewsList" component={NewsListScreen} />
                    <Stack.Screen name="NewsDetail" component={NewsDetailScreen} options={{
                        headerBackVisible: true,
                        headerLeft: undefined,
                        headerRight: undefined,
                    }} />
                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
        </Stack.Navigator>
    );
};

export default AuthNavigator;
