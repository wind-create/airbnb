import React from 'react';
import {
    View,
    Text,
    Image,
    Pressable
} from "react-native";
import styles from './styles';
import { useNavigation } from "@react-navigation/native";


const Card = ({ hotel }) => {
    const navigation = useNavigation();
    function DetailNavigation() {
        return navigation.navigate("Detail");

    }
    return (
        <Pressable onPress={DetailNavigation}>
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
        </Pressable>
    );

}
export default Card;
