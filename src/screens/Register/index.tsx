import React from 'react';
import {
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    View,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const RegisterScreen: React.FC = () => {

    return (
        <SafeAreaView
            style={styles.container}
        >
            <Text
                style={styles.title}
            >
                Sign in
            </Text>
            <Pressable>
                <View
                    style={styles.inputContainer}
                >
                    <Text
                        style={styles.label}
                    >
                        Email:
                    </Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        placeholder="Enter your email"
                        placeholderTextColor="#777"
                        textContentType="username"
                    />
                </View>
            </Pressable>
            <Pressable>
                <View
                    style={styles.inputContainer}
                >
                    <Text
                        style={styles.label}
                    >
                        Password:
                    </Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        placeholder="Enter your password"
                        placeholderTextColor="#777"
                        textContentType="password"
                    />
                </View>
            </Pressable>
            <TouchableOpacity
                style={styles.button}
            >
                <View>
                    <Text>Sign in</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B232A',
        justifyContent: 'center',
        width: '100%'
    },
    navigation: {
        flex: 2
    },
    body: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    title: {
        color: '#ddd',
        fontSize: 32,
        fontWeight: '700',
        marginBottom: 44
    },
    inputContainer: {
    },
    label: {
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 12,
        color: '#A7AFB7'
    },
    input: {
        backgroundColor: '#161C22',
        height: 54,
        borderRadius: 12,
        color: '#777777',
        padding: 10,
        marginBottom: 30
    },
    button: {
        width: '100%',
        backgroundColor: '#5ED5A8',
        borderRadius: 16,
        height: 54,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18
    }
});
