import React from 'react';
import {
    View,
    ScrollView,
} from "react-native";
import styles from './styles';
import Search from '../../molecules/search';
import TopDestinations from '../../molecules/topDestinations';
import PopularDestinations from '../../molecules/popularDestinations';


const SlideDestinations = () => {
    return (
        <View style={styles.body}>
            <Search />
            <ScrollView scrollEventThrottle={16} >
                <View style={styles.destination}>

                    <TopDestinations />
                    <PopularDestinations />

                </View>
            </ScrollView>

        </View>
    );
};

export default SlideDestinations;
