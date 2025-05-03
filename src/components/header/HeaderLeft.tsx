import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigation } from '../../navigators/types';

type HeaderRightProps = {
    avatarUrl: string | null;
    userName: string | null;
};

// Компонент для отображения аватара пользователя и имени в шапке
const HeaderLeft: React.FC<HeaderRightProps> = ({ avatarUrl, userName }) => {
    const navigation = useNavigation<Navigation>();

    return (
        <View style={styles.avatarContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                    source={{ uri: avatarUrl || undefined }}
                    style={styles.avatar}
                />
            </TouchableOpacity>
            <Text style={styles.avatarText}>{userName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    avatarText: {
        fontSize: 12,
    },
});

export default HeaderLeft;
