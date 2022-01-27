import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import SlideDestinations from '../../components/organisms/slideDestinations';
import { fetchDataHotel } from '../../redux/Hotel';
import { useDispatch } from "react-redux";


const Explore = () => {
  const dispatch = useDispatch();
  dispatch(fetchDataHotel())
  return (
    <SafeAreaView style={styles.body}>
      <SlideDestinations />
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
  body: {
    flex: 1
  }
})
export default Explore;
