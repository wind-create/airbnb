import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#eaeaea"
    },
    box: {
        padding: 20,
        height: 250,
        margin: 35,
        borderWidth: 0,
        borderRadius: 6,
        backgroundColor: "#C0C0C0",
    },
    header: {
        width: '100%',
        height: 50,
        backgroundColor: '#5F9EA0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    searchButton: {
        backgroundColor: '#ffffff',
        width: 280,
        height: 40,
        borderRadius: 10,
        marginHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        top: 3,
    },
    searchButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#ffffff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    // image: {
    //     width: '100%',
    //     height: 500,
    //     resizeMode: 'cover',
    //     justifyContent: 'center',
    //     zIndex: -1,
    // },
    // title: {
    //     fontSize: 80,
    //     fontWeight: 'bold',
    //     color: '#ffffff',
    //     width: '70%',
    //     marginLeft: 25,
    // },
    // button: {
    //     backgroundColor: '#ffffff',
    //     width: 200,
    //     height: 40,
    //     borderRadius: 10,
    //     marginTop: 25,
    //     marginLeft: 25,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // buttonText: {
    //     fontSize: 16,
    //     fontWeight: 'bold',
    // },
    // searchButton: {
    //     backgroundColor: '#ffffff',
    //     width: Dimensions.get('screen').width - 20,
    //     height: 60,
    //     borderRadius: 30,
    //     marginHorizontal: 10,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     position: 'absolute',
    //     top: 20,
    //     elevation: 100,
    // },
    // searchButtonText: {
    //     fontSize: 16,
    //     fontWeight: 'bold',
    // },
})

export default styles
