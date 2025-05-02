import { StyleSheet, Text, View } from 'react-native';

export const Loader = () => {
    return <View style={styles.container}>
        <Text style={styles.text}>Loading news...</Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
});
