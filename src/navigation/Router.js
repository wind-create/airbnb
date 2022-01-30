import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Explore from "../screens/Main/Explore";
import Saved from "../screens/Main/Saved";
import Setting from "../screens/Main/Setting";
import Profile from "../screens/Main/Profile";
import Splash from "../screens/Main/Splash";
import Detail from "../screens/Main/Detail";
import SignIn from "../screens/Main/SignIn";
import Booking from "../screens/Main/Booking";


const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Router() {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NavBar"
                component={NavBar}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Explore"
                component={Explore}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Saved"
                component={Saved}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Setting"
                component={Setting}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Booking"
                component={Booking}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>

    )
};

export const NavBar = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'red',
                inactiveTintColor: '#555',
                activeBackgroundColor: '#000000',
                inactiveBackgroundColor: '#999',
                showLabel: true,
                labelStyle: { fontSize: 14 },
                showIcon: true,
            }}
            activeColor='red'
            inactiveColor='#555'
            barStyle={{
                backgroundColor: '#ffffff'
            }}>
            <Tab.Screen
                name="Search"
                component={Explore}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="search" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Saved"
                component={Saved}
                options={{
                    tabBarLabel: 'Saved',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="heart" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarLabel: 'Setting',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="settings" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Router;