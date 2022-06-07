import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LandingScreen } from '../screens';

export type StackParamList = {
    Landing: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const NativeStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Landing"
        >
            <Stack.Screen
                name="Landing"
                component={LandingScreen}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
        </Stack.Navigator>
    );
};

export default NativeStackNavigator;