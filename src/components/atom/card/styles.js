import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardBody: {
        height: 130,
        width: 130,
        marginLeft: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd'
    },
    imageCard: {
        flex: 2
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    text: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10
    },


});

export default styles;
