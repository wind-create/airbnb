import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../../../redux/User";
import Button from "../../atom/button";

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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F35960",
        alignItems: "center",
        justifyContent: "center"
    },
    wrapper: {
        padding: 24,
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 70
    },
    title: {
        fontSize: 24,
        color: "#e1e1e1",
        marginVertical: 20,
        fontWeight: "bold"
    },

    logo: {
        width: 130,
        height: 150,
        marginBottom: 30,
    },
    Signup: {
        marginTop: 15,
        color: "white",
        textDecorationLine: "underline",
    },
    textInput: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: 330,
        height: 45,
        marginBottom: 30,
        color: "black",
        position: "relative",
    },
    eye: {
        position: "absolute",
        right: 25,
        bottom: 305,

    }
});
export default Login;