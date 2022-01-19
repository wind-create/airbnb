import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles'
import FontAwasome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'

const HomeScreen = (props) => {
    return (
        <View style={styles.body} >
            <View
                style={styles.header}
            >
                <Text style={styles.logo}>
                    Logo
                </Text>
            </View>
            <View style={styles.box}>
                <Pressable
                    style={styles.searchButton}
                    onPress={() => { console.warn('search btn clicked') }}
                >
                    <Fontisto name="search" size={25} color={'#000000'} />
                    <Text style={styles.searchButtonText}> Where do you want to go?</Text>
                </Pressable>

                <View style={styles.boxButton}>
                    <Pressable
                        style={styles.button}
                        onPress={() => { console.warn('has been clicked') }}
                    >
                        <Text style={styles.buttonText}>Explore nearby Stays</Text>
                    </Pressable>
                    <Pressable
                        style={styles.button}
                        onPress={() => { console.warn('has been clicked') }}
                    >
                        <Text style={styles.buttonText}>Explore nearby Stays</Text>
                    </Pressable>
                </View>
            </View>

            {/* <Pressable
                style={styles.searchButton}
                onPress={() => { console.warn('search btn clicked') }}
            >
                <Fontisto name="search" size={25} color={'#f15454'} />
                <Text style={styles.searchButtonText}>Where are you going</Text>
            </Pressable>
            <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} style={styles.image}>
                <Text style={styles.title}>Go Near</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => { console.warn('has been clicked') }}
                >
                    <Text style={styles.buttonText}>Explore nearby Stays</Text>
                </Pressable>
            </ImageBackground> */}
        </View >
    )
}

export default HomeScreen
