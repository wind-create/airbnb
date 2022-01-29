import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { setName, setEmail, setCountry } from '../../../redux/User';
import styles from './styles';

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
        </View>
    )
};

export default EditPRofile;
