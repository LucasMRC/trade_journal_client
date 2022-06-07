import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NativeStackNavigator, BottomTabNavigator } from './src/utils';

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <StatusBar
                    style="auto"
                />
                <NativeStackNavigator />
                <BottomTabNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
