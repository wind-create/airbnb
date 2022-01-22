import React from 'react';
import {
    View,
    Text
} from "react-native";
import styles from './styles';
import CardLarge from '../../atom/cardLarge';


const index = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                POPULAR DESTINATIONS
            </Text>

            <CardLarge imageUri={require('../../../../assets/home.jpg')}
                name="Home"
            />
            <CardLarge imageUri={require('../../../../assets/home.jpg')}
                name="Hotel"
            />

        </View>
    )
};

export default index;
