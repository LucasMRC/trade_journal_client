import React, { useState } from 'react';
import {
    Text,
    Pressable,
    TextInput,
    View,
    Alert,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

// Utils
import { validateEmail } from '@utils/helper_functions';

// Icons
import { FontAwesome5 } from '@expo/vector-icons';

// Api
import { login, register } from '@api/user';

export const AuthenticationScreen: React.FC = () => {
    const [ formAction, setFormAction ] = useState<'LOGIN' | 'REGISTER'>('LOGIN');
    const [ email, setEmail ] = useState('lucas@zenrise.io');
    const [ username, setUsername ] = useState('LucasMRC');
    const [ emailIsValid, setEmailIsValid ] = useState(true);
    const [ password, setPassword ] = useState('660Test!');
    const [ hidePassword, setHidePassword ] = useState(true);

    const handleAction = async () => {
        const action = formAction === 'LOGIN'
            ? () => login(email, password)
            : () => register(username, email, password);
        await action()
            .catch((error: Error) => {
                Alert.alert('', `Error on authentication: ${error.message}`, [{ text: 'OK' }]);
                alert(`Error on authentication: ${error.message}`);
            });
    };

    return (
        <SafeAreaView
            style={styles.container}
        >
            <View
                style={styles.tabContainer}
            >
                <TouchableOpacity
                    style={formAction === 'LOGIN' ? styles.activeTab : styles.inactiveTab}
                    onPress={() => setFormAction('LOGIN')}
                >
                    <View>
                        <Text
                            style={formAction === 'LOGIN' ? styles.activeTabLabel : styles.inactiveTabLabel}
                        >
                            Sign in
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={formAction === 'REGISTER' ? styles.activeTab : styles.inactiveTab}
                    onPress={() => setFormAction('REGISTER')}
                >
                    <View>
                        <Text
                            style={formAction === 'REGISTER' ? styles.activeTabLabel : styles.inactiveTabLabel}
                        >
                            Sign up
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text
                style={styles.title}
            >
                {`Sign ${formAction === 'LOGIN' ? 'in' : 'up'}`}
            </Text>
            {formAction === 'REGISTER' && (
                <Pressable>
                    <View
                        style={{ position: 'relative' }}
                    >
                        <Text
                            style={styles.label}
                        >
                        Username:
                        </Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            value={username}
                            onChangeText={text => setUsername(text)}
                            autoCorrect={false}
                            keyboardType="default"
                            returnKeyType="next"
                            placeholder="Choose a username"
                            placeholderTextColor="#777"
                        />
                        <TouchableOpacity
                            onPress={() => setHidePassword(prevState => !prevState)}
                        >
                            <View
                                style={styles.eyeIconContainer}
                            >
                                <FontAwesome5
                                    name={hidePassword ? 'eye-slash' : 'eye'}
                                    color="#777"
                                    size={20}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            )}
            <Pressable>
                <View>
                    <Text
                        style={styles.label}
                    >
                        Email:
                    </Text>
                    <TextInput
                        style={emailIsValid ? styles.input : styles.inputError}
                        value={email}
                        onChangeText={text => {
                            setEmailIsValid(true);
                            setEmail(text);
                        }}
                        onBlur={() => {
                            if (email && !validateEmail(email)) {
                                setEmailIsValid(false);
                                return;
                            }
                        }}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        placeholder="Enter your email"
                        placeholderTextColor="#777"
                        textContentType="emailAddress"
                    />
                    {!emailIsValid && (
                        <Text
                            style={styles.error}
                        >
                            Email is not valid
                        </Text>
                    )}

                </View>
            </Pressable>
            <Pressable>
                <View
                    style={{ position: 'relative' }}
                >
                    <Text
                        style={styles.label}
                    >
                        Password:
                    </Text>
                    <TextInput
                        secureTextEntry={hidePassword}
                        style={styles.input}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        autoCorrect={false}
                        keyboardType="default"
                        returnKeyType="next"
                        placeholder="Enter your password"
                        placeholderTextColor="#777"
                        textContentType="password"
                    />
                    <TouchableOpacity
                        onPress={() => setHidePassword(prevState => !prevState)}
                    >
                        <View
                            style={styles.eyeIconContainer}
                        >
                            <FontAwesome5
                                name={hidePassword ? 'eye-slash' : 'eye'}
                                color="#777"
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </Pressable>
            <TouchableOpacity
                style={styles.button}
                onPress={handleAction}
                disabled={!email || !emailIsValid || !password}
            >
                <View>
                    <Text>{`Sign ${formAction === 'LOGIN' ? 'in' : 'up'}`}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
