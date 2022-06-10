import React from 'react';

// Screens
import {
    HomeScreen,
    AssetsScreen,
    TradesScreen,
    NotificationsScreen,
    ProfileScreen
} from '../screens';

// Bottom Tabs
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#e98f1e',
                tabBarInactiveTintColor: '#888',
                headerShown: false,
                tabBarLabel: () => false,
                tabBarStyle: {
                    height: 60,
                    backgroundColor: '#fff',
                    position: 'absolute',
                    bottom: 35,
                    marginHorizontal: 20,
                    borderRadius: 10,
                    shadowColor: '#222',
                    shadowOpacity: .06,
                    shadowOffset: {
                        width: 10,
                        height: 10
                    },
                    paddingHorizontal: 20
                },
                tabBarBadgeStyle: {
                    backgroundColor: '#e98f1e',
                    color: '#fff'
                }
            }}
        >
            <Tab.Screen
                name="Dashboard"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesome5
                            name="home"
                            focused={focused}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Assets"
                component={AssetsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesome
                            name="dollar"
                            focused={focused}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Trades"
                component={TradesScreen}
                options={{
                    tabBarIcon: ({ size, color, focused }) => (
                        <FontAwesome
                            name="exchange"
                            focused={focused}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesome5
                            name="bell"
                            focused={focused}
                            size={size}
                            color={color}
                        />
                    ),
                    tabBarBadge: 3
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <FontAwesome5
                            name="user"
                            focused={focused}
                            size={size}
                            color={color}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;