import { StyleSheet } from "react-native";

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

export default styles;