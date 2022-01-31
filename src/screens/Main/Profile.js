import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Button from '../../components/atom/button';
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';
import CardLarge from '../../components/atom/cardLarge';

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const bookingHistory = useSelector((state) => state.user.user.booking);
  const navigation = useNavigation();
  function SignIn() {
    return navigation.navigate("SignIn");
  }
  return (
    <ScrollView>
      <View style={styles.screen}>
        {user.loggedIn ? (
          <>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/akun.png')}
                style={styles.image}
              />
            </View>
            <View >
              <Text style={styles.headerText}>{user.name}</Text>
            </View>
            <View>
              <Text style={styles.textStyle}>{user.email}</Text>
            </View>
            <View style={styles.container}>
              <Ionicons name="location" size={30} />
              <Text style={styles.textStyle}>{user.country}</Text>
            </View>

          </>
        ) : (
          <Button
            textButton="Sign In"
            onPress={SignIn}
          />
        )
        }
        {user.loggedIn ? (
          bookingHistory.map((hotel, index) => (
            <CardLarge key={index} hotel={hotel.hotel} />
          ))
        ) : (
          <></>
        )}
      </View>
    </ScrollView>
  )
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 5
  },
  image: {
    width: '100%',
    height: '100%'
  },
  headerText: {
    fontSize: 40,
    marginVertical: 5,
  },
  textStyle: {
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    marginVertical: 5,
  }
})
export default Profile;
