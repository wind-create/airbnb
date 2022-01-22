import React from 'react';
import {
    View,
    Text,
    Image
} from "react-native";
import styles from './styles';


const CardLarge = (props) => {

    return (

        <View style={styles.cardLargeBody}>
            <View style={styles.imageCardLarge}>
                <Image source={props.imageUri}
                    style={styles.image}
                />
            </View>
            <View style={styles.text}>
                <Text>{props.name}</Text>
            </View>
        </View>
    );

}
export default CardLarge;
