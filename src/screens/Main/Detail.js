import React from 'react';
import {
    ImageBackground,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Pressable
} from 'react-native';
import Ratings from '../../components/atom/ratings';
import Button from '../../components/atom/button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from "react-redux";
import { saved } from '../../redux/User'
import { AntDesign } from "@expo/vector-icons";

const Detail = ({ route, navigation }) => {
    const { hotel } = route.params;
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const IconSaved = () => {
        const result = user.whishlist.some(
            (item) => item.hotel.hotelId === hotel.hotelId
        );
        if (result)
            return (
                <Icon name="bookmark" size={28} color="white" />
            );
        if (!result)
            return (
                <Icon name="bookmark-border" size={28} color="white" />
            );
    };
    function SavedWhishlist() {
        return dispatch(saved({ hotel }));
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                backgroundColor: "white",
                paddingBottom: 20,
            }}>
            <ImageBackground style={style.headerImage} source={{
                uri:
                    `${hotel?.images[0].url}`
            }}>
                <View style={style.header}>
                    <Icon
                        name="arrow-back-ios"
                        size={28}
                        color="white"
                        onPress={navigation.goBack}
                    />

                    {user.loggedIn && (
                        <Pressable onPress={SavedWhishlist}>
                            <IconSaved />
                        </Pressable>
                    )}
                </View>
            </ImageBackground>
            <View>
                <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{hotel?.name}</Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: '400',
                            color: "grey",
                            marginTop: 5,
                        }}>
                        Indonesia
                    </Text>
                    <View
                        style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>

                        <Ratings rating={hotel?.starRating} />

                        <Text style={{ fontSize: 13, color: "grey" }}>365reviews</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ lineHeight: 20, color: "grey" }}>
                            {hotel?.description.short}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: 20,
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Price per night
                    </Text>
                    <View style={style.priceTag}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: "grey",
                                marginLeft: 5,
                            }}>
                            $100
                        </Text>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: 'bold',
                                color: "grey",
                                marginLeft: 5,
                            }}>
                            +breakfast
                        </Text>
                    </View>
                </View>
                <View style={style.btn}>
                    <Button
                        textButton="Book"
                    />
                </View>
            </View>
        </ScrollView>
    )
};
const style = StyleSheet.create({
    btn: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginHorizontal: 20,
        borderRadius: 10,
    },

    priceTag: {
        height: 40,
        alignItems: 'center',
        marginLeft: 40,
        paddingLeft: 20,
        flex: 1,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
    },
    iconContainer: {
        position: 'absolute',
        height: 60,
        width: 60,
        top: -30,
        right: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerImage: {
        height: 400,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        overflow: 'hidden',
    },
    header: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
    },
});

export default Detail;
