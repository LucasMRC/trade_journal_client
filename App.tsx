import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

// Utils
// import { BottomTabNavigator } from './src/utils';

// Store
import { Provider } from 'react-redux';
import { store } from '@/redux';

// Screens
import { /* LandingScreen, */ AuthenticationScreen } from '@/screens';

const App = () => {
    const [ isReady, setIsReady ] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsReady(true), 3000);
    }, [ ]);

    return (
        <SafeAreaProvider
            style={styles.appContainer}
        >
            <Provider
                store={store}
            >
                <NavigationContainer>
                    <StatusBar
                        style="auto"
                    />
                    { isReady ? (
                        <AuthenticationScreen />
                    ) : (
                        <AuthenticationScreen />
                    )}
                </NavigationContainer>
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;

const styles = StyleSheet.create({
    appContainer: {
        backgroundColor: '#1B232A',
        paddingHorizontal: 20
    }
});
