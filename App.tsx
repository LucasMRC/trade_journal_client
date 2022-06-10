import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { /* NativeStackNavigator, */ BottomTabNavigator } from './src/utils';
import AppProvider from './src/utils/app_context';

const App = () => {

    return (
        <SafeAreaProvider>
            <AppProvider>
                <NavigationContainer>
                    <StatusBar
                        style="auto"
                    />
                    {/* <NativeStackNavigator /> */}
                    <BottomTabNavigator />
                </NavigationContainer>
            </AppProvider>
        </SafeAreaProvider>
    );
};

export default App;
