import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../app/store';

export const ProfileScreen = () => {
    const auth = useSelector((state: RootState) => state.auth);

    return (
        <View style={styles.container}>
            <Image source={{ uri: auth?.avatar_original_url || undefined }} style={styles.image} />
            <Text style={styles.label}>{auth.username}</Text>
            <Text style={styles.email}>{auth.email}</Text>
            <Text style={styles.points}>Очки: {auth.points_total}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
    },
    image: {
        width: '100%',
        height: 300,
        marginTop: 10,
        borderRadius: 8,
        objectFit: 'contain',
    },
    label: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 24,
    },
    points: {
        fontSize: 30,
        fontWeight: '500',
    },
});
