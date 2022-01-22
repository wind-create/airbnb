import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import SlideDestinations from '../../components/organisms/slideDestinations';


const Explore = () => {
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
