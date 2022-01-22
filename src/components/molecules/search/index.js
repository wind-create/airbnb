import React from 'react';
import {
    View,
    TextInput,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const Search = () => {
    return (
        <View style={styles.body}>
            <View style={styles.Search}>
                <Icon name="ios-search" size={20} style={styles.iconSearch} />
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Try Indonesia"
                    placeholderTextColor="grey"
                    style={styles.text}
                />
            </View>
        </View>

    )
};

export default Search;
