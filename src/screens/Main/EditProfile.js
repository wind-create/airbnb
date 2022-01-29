import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail, setCountry } from '../../redux/User';

const EditPRofile = () => {
    const dispatch = useDispatch();
    const EditUser = useSelector((state) => state.user.user);
    return (
        <View style={styles.screen}>
            <Text> Edit Profile </Text>
            <TextInput
                style={styles.textInput}
                placeholder="Name"
                placeholderTextColor="#666666"
                onChangeText={(text) => dispatch(setName(text))}
                value={EditUser.name}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Email"
                placeholderTextColor="#666666"
                onChangeText={(text) => dispatch(setEmail(text))}
                value={EditUser.email}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Country"
                placeholderTextColor="#666666"
                onChangeText={(text) => dispatch(setCountry(text))}
                value={EditUser.country}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Country"
                placeholderTextColor="#666666"
                onChangeText={(text) => dispatch(setCountry(text))}
                value={EditUser.country}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
        paddingTop: 50
    },
    textInput: {
        paddingLeft: 10,
        color: '#333333',
    },
})
export default EditPRofile;
