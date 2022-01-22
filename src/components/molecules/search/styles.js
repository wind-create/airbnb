import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    Search: {
        flexDirection: 'row', padding: 10,
        backgroundColor: 'white', marginHorizontal: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        elevation: 1
    },
    iconSearch: {
        marginRight: 10
    },
    text: {
        flex: 1,
        fontWeight: '700',
        backgroundColor: 'white'
    }


});

export default styles;