import React from 'react';
import Card from '../../atom/card';
import {
    View,
    ScrollView,
    Text
} from "react-native";
import styles from './styles';

const TopDestinations = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Top Destinations
            </Text>

            <View style={styles.cardSlide}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    <Card imageUri={require('../../../../assets/home.jpg')}
                        name="Home"
                    />
                    <Card imageUri={require('../../../../assets/home.jpg')}
                        name="contoh hotel"
                    />
                    <Card imageUri={require('../../../../assets/home.jpg')}
                        name="contoh hotel"
                    />
                    <Card imageUri={require('../../../../assets/home.jpg')}
                        name="contoh hotel"
                    />
                </ScrollView>
            </View>
        </View>
    )
};

export default TopDestinations;
