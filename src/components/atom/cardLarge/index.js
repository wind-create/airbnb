import React from 'react';
import {
    View,
    Text,
    Image
} from "react-native";
import styles from './styles';


const CardLarge = ({ navigaton, hotel }) => {

    return (

        <View style={styles.cardLargeBody}>
            <View style={styles.imageCardLarge}>
                <Image source={{
                    uri: `${hotel?.images[0]?.url}`
                }}
                    style={styles.image}
                />
            </View>
            <View style={styles.text}>
                <Text>{hotel?.name}</Text>
            </View>
        </View>
    );

}
export default CardLarge;
