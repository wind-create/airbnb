import React, { Fragment } from 'react';
import Card from '../../atom/card';
import {
    View,
    ScrollView,
    Text
} from "react-native";
import styles from './styles';
import { useSelector } from "react-redux";

const TopDestinations = ({ navigation }) => {
    const getDataHotel = useSelector((state) => state.hotel?.data);
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
                    {getDataHotel?.slice(1, 5).map((hotel) => (
                        <Fragment key={hotel.hotelId}>
                            <Card hotel={hotel} />
                        </Fragment>
                    ))}


                </ScrollView>
            </View>
        </View>
    )
};

export default TopDestinations;
