import React from 'react'
import { Platform, View } from 'react-native'
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Auth/Welcome'
import SignIn from '../screens/Auth/SignIn'
import SignUp from '../screens/Auth/SignUp'
import BackBtn from '../components/Auth/BackBtn';

const Auth = createStackNavigator()


export default () => {
    return (
        <Auth.Navigator
            presentation="modal"
            screenOptions={{
                headerBackTitleVisible: false,
                headerTransparent: true,
                headerBackImage: () => <BackBtn />
            }}
        >
            <Auth.Screen
                name="Welcome"
                component={Welcome}
                options={{
                    headerTitleStyle: {
                        color: "white"
                    }
                }}
            />
            <Auth.Screen
                name="SignIn"
                component={SignIn}
                options={{ title: "Sign In" }}
            />
            <Auth.Screen
                name="SignUp"
                component={SignUp}
                options={{ title: "Sign Up" }}
            />
        </Auth.Navigator>
    )
}