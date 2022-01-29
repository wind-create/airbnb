import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../../../redux/User";
import Button from "../../atom/button";
import styles from './styles';

const Login = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);
    const [secure, setSecure] = useState(true)
    const navigation = useNavigation();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const showAlert = () => Alert.alert("Wrong email or password!");


    function handleLogin() {
        if (userData.email === email && userData.password === password) {
            dispatch(LogIn(true));
            return navigation.navigate("Splash");
        } else {
            showAlert();
        }
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <View style={styles.wrapper}>
                <Image style={styles.logo} source={require('../../../../assets/airbnbwhite.png')} />
                <Text style={styles.title}>Login</Text>
                <TextInput placeholder="Email"
                    placeholderTextColor="#E1E1E1"
                    keyboardType={"email-address"}
                    style={styles.textInput}
                    onChangeText={email => setEmail(email)}
                />
                <TextInput placeholder="Password"
                    placeholderTextColor="#E1E1E1"
                    secureTextEntry={secure}
                    style={styles.textInput}
                    onChangeText={password => setPassword(password)}
                />


                <Button
                    textButton="Login"
                    onPress={handleLogin}
                />
            </View>
        </KeyboardAwareScrollView>
    );
}

export default Login;