import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LandingScreen, HomeScreen } from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Landing"
                component={LandingScreen}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;