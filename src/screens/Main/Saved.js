import React from 'react';
import { View, Text, ScrollView, Fragment } from 'react-native';
import { useSelector } from "react-redux";
import CardLarge from '../../components/atom/cardLarge';

const Saved = () => {
  const user = useSelector(
    (state) => state.user.user
  );
  const savedHotel = useSelector(
    (state) => state.user.user.whishlist
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      {user.loggedIn ? (
        savedHotel.map((hotel, index) => (
          <CardLarge key={index} hotel={hotel.hotel} />
        ))
      ) : (
        <Text>Please login</Text>
      )}

    </ScrollView>
  )
};

export default Saved;
