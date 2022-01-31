import React, { useEffect } from 'react';
import Gap from '../../components/atom/gap'
import { StyleSheet, View, Image } from "react-native";
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';

function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("NavBar");
        }, 3000);
    }, [navigation]);
    return (
        <View style={styles.container}>
            <FontAwesome5Brands name='airbnb' size={160} />
            <Gap height={10} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5affa8",
    },
    logo: {
        width: 130,
        height: 150,
        marginBottom: 30,
    },
});
export default Splash;
