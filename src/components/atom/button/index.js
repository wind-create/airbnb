import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({ onPress, textButton }) => {
    return (
        <TouchableOpacity
            style={styles.buttonSubmit}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
    )
};

export default Button;
