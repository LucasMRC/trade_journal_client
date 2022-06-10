import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { BottomTabNavigator } from './src/utils';
import AppProvider from './src/utils/app_context';
import { LandingScreen } from './src/screens';

const App = () => {
    const [ isReady, setIsReady ] = React.useState(false);

    useEffect(() => {
        setTimeout(() => setIsReady(true), 3000);
    }, [ ]);

    return (
        <SafeAreaProvider>
            <AppProvider>
                <NavigationContainer>
                    <StatusBar
                        style="auto"
                    />
                    {isReady ? (
                        <BottomTabNavigator />
                    ) : (
                        <LandingScreen />
                    )}
                </NavigationContainer>
            </AppProvider>
        </SafeAreaProvider>
    );
};

export default App;
