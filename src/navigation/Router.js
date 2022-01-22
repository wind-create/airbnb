import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import Explore from "../screens/Main/Explore";
import Saved from "../screens/Main/Saved";
import Setting from "../screens/Main/Setting";
import Profile from "../screens/Main/Profile";

const Main = createMaterialBottomTabNavigator();

const Router = () => (
    <Main.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                let iconName;
                if (route.name === "Explore") {
                    iconName = "search";
                } else if (route.name === "Saved") {
                    iconName = "heart";
                } else if (route.name === "Profile") {
                    iconName = "person";
                } else if (route.name === "Setting") {
                    iconName = "settings";
                }
                return (
                    <Ionicons
                        name={iconName}
                        size={focused ? 24 : 20}
                        color={focused ? 'red' : '#555'}
                    />
                );
            }
        })}

        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: '#555',
            activeBackgroundColor: '#000000',
            inactiveBackgroundColor: '#999',
            showLabel: true,
            labelStyle: { fontSize: 14 },
            showIcon: true,


        }}
        activeColor='#000000'
        inactiveColor='#555'
        barStyle={{
            backgroundColor: '#ffffff'
        }}
    >
        <Main.Screen name="Explore" component={Explore} />
        <Main.Screen name="Saved" component={Saved} />
        <Main.Screen name="Profile" component={Profile} />
        <Main.Screen name="Setting" component={Setting} />
    </Main.Navigator>
);

export default Router;