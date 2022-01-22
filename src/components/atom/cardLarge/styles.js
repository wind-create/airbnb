import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({
    cardLargeBody: {
        width: width - 40,
        height: 200,
        marginTop: 20,
        borderWidth: 0.5,
        borderColor: '#dddddd'
    },
    imageCardLarge: {
        flex: 2
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd'
    },
    text: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10
    },


});

export default styles;
