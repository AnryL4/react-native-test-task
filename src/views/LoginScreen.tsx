import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { authorization } from '../actions/authorization';
import { useDispatch } from 'react-redux';

export const LoginScreen = () => {
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const dispatch = useDispatch();
    const onAuthorization = async () => {
        setIsLoading(true);
        await authorization({ email, password }, dispatch).finally(() => setIsLoading(false));
    };

    return (
        <View style={styles.container}>
            {isLoading ?
                <Text>Loading...</Text> :
                <>
                    <Text>Login</Text>
                    <TextInput
                        style={styles.textInput} value={email}
                        onChangeText={setEmail}
                        placeholder="Username" />
                    <TextInput
                        style={styles.textInput} value={password}
                        onChangeText={setPassword}
                        placeholder="Password"
                        secureTextEntry />
                    <Button
                        title="Login"
                        onPress={onAuthorization} />
                </>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        maxWidth: 200,
        padding: 10,
    },
});
