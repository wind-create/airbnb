import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut } from '../redux/userSlice'

export default function Gate() {
    const { isLoggedIn } = useSelector(state => state.usersReducer)
    const dispatch = useDispatch()
    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            {isLoggedIn ? (
                <TouchableOpacity onPress={() => dispatch(logOut())} >
                    <Text>Log Out</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => dispatch(logIn("bs.token"))}>
                    <Text>Log In</Text>
                </TouchableOpacity>
            )
            }
        </View>
    )
}
