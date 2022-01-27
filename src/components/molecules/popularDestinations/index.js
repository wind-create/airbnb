import React, { Fragment } from 'react';
import {
    View,
    Text
} from "react-native";
import styles from './styles';
import CardLarge from '../../atom/cardLarge';
import { useSelector } from "react-redux";


const index = () => {
    const getDataHotel = useSelector((state) => state.hotel?.data);
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                POPULAR DESTINATIONS
            </Text>
            {getDataHotel?.slice(1, 5).map((hotel) => (
                <Fragment key={hotel.hotelId}>
                    <CardLarge hotel={hotel} />
                </Fragment>
            ))}

        </View>
    )
};

export default index;
