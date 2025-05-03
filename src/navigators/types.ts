import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    NewsList: undefined;
    NewsDetail: { id: number };
    Login: undefined;
    Profile: undefined;
};
export type Navigation = NativeStackNavigationProp<RootStackParamList>;
