import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    onRefreshClick: () => void;
}

// Компонент кнопки перезагрузки данных.
export const Refresh = ({ onRefreshClick }: Props) => {
    return <View style={styles.container}>
        <TouchableOpacity onPress={() => onRefreshClick()}>
            <Text style={styles.text}>Refresh</Text>
        </TouchableOpacity>
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
