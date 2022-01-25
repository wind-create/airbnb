import React, { useEffect } from 'react';
import Gap from '../../components/atom/gap'
import { StyleSheet, View, Image } from "react-native";

function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("NavBar");
        }, 3000);
    }, [navigation]);
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/airbnbwhite.png')} />
            <Gap height={10} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F35960",
    },
    logo: {
        width: 130,
        height: 150,
        marginBottom: 30,
    },
});
export default Splash;
