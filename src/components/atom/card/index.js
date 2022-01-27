import React from 'react';
import {
    View,
    Text,
    Image
} from "react-native";
import styles from './styles';


const Card = ({ navigaton, hotel }) => {

    return (
        <View style={styles.cardBody}>
            <View style={styles.imageCard}>
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
export default Card;
