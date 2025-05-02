import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

type HeaderRightProps = {
    avatarUrl: string | null;
    userName: string | null;
};

const HeaderLeft: React.FC<HeaderRightProps> = ({ avatarUrl, userName }) => {
    return (
        <View style={styles.avatarContainer}>
            <Image
                source={{ uri: avatarUrl || undefined }}
                style={styles.avatar}
            />
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
