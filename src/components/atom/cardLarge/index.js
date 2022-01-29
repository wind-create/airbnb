import React from 'react';
import {
    View,
    Text,
    Image,
    Pressable
} from "react-native";
import styles from './styles';
import Ratings from '../ratings';
import { useNavigation } from "@react-navigation/native";


const CardLarge = ({ hotel }) => {
    const navigation = useNavigation();
    function DetailNavigation() {
        return navigation.navigate("Detail", { hotel });

    }

    return (
        <Pressable onPress={DetailNavigation}>
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
                    <Ratings rating={hotel?.starRating} />
                </View>
            </View>
        </Pressable>
    );

}
export default CardLarge;
