import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type HeaderRightProps = {
    onLogout: () => void;
};

const HeaderRight: React.FC<HeaderRightProps> = ({ onLogout }) => {
    return (
        <TouchableOpacity onPress={onLogout}>
            <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    logoutText: {
        marginRight: 10,
        color: 'blue',
        fontWeight: 'bold',
    },
});

export default HeaderRight;
