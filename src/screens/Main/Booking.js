import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Button from '../../components/atom/button';
import { useDispatch, useSelector } from "react-redux";
import { bookingHotel } from '../../redux/User'

const Booking = ({ route, navigation }) => {

    const { hotel } = route.params;
    const dispatch = useDispatch();
    const [checkin, setCheckin] = useState(new Date());
    const [checkout, setCheckout] = useState(new Date());
    const [showCheckin, setShowCheckin] = useState(false);
    const [showCheckout, setShowCheckout] = useState(false);

    const checkoutHotel = () => {
        dispatch(bookingHotel({ hotel }));
        return navigation.navigate("Profile");
    }

    const onChangeCheckin = (event, selectedDate) => {
        const currentDate = selectedDate || checkin;
        setCheckin(currentDate);
        setShowCheckin(false);
    };
    const onChangeCheckout = (event, selectedDate) => {
        const currentDate = selectedDate || checkout;
        setCheckout(currentDate);
        setShowCheckout(false);
    };
    return (
        <View style={styles.body}>
            <View style={styles.view}>
                <View style={{ margin: 10, width: '100%' }}>
                    <Text style={styles.title}>Book Now</Text>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Name"
                        placeholderTextColor="#666666"
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="#666666"
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Guest"
                        placeholderTextColor="#666666"
                    />
                    <View style={styles.checkinout}>
                        <View style={styles.check}>
                            <Text>Checkin</Text>
                            <TextInput
                                placeholder="checkin"
                                placeholderTextColor="white"
                                defaultValue={moment(checkin).format('YYYY-MM-DD')}
                                editable={false}
                                style={{ color: 'green', fontSize: 18 }}
                            />
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setShowCheckin(true)}
                            >
                                <Fontisto name='date' size={20} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.check}>
                            <Text>Checkout</Text>
                            <TextInput
                                placeholder="checkin"
                                placeholderTextColor="white"
                                defaultValue={moment(checkout).format('YYYY-MM-DD')}
                                editable={false}
                                style={{ color: 'green', fontSize: 18 }}
                            />
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setShowCheckout(true)}
                            >
                                <Fontisto name='date' size={20} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{ margin: 5, fontSize: 18 }}>Total: $100</Text>
                    <Text style={{ margin: 5, fontSize: 18 }}>Hotel: {hotel.name}</Text>
                </View>

                <Button
                    textButton="Checkout"
                    onPress={checkoutHotel}
                />

                {showCheckin && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={checkin}
                        minimumDate={new Date()}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChangeCheckin}
                    />
                )}
                {showCheckout && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={checkout}
                        minimumDate={checkin}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChangeCheckout}
                    />
                )}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    view: {
        width: '100%',
        height: '100%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 5,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    TextInput: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: 330,
        height: 45,
        marginBottom: 30,
        color: "black",
        position: "relative",
    },
    icon: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    checkinout: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    check: {
        margin: 5,
        flexDirection: 'row'
    },
    button: {
        borderRadius: 5,
        height: 40,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
    },
});

export default Booking;