import React from 'react';
import {
    View,
    Text,
    Image
} from "react-native";
import styles from './styles';


const Card = (props) => {

    return (
        <View style={styles.cardBody}>
            <View style={styles.imageCard}>
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
export default Card;
