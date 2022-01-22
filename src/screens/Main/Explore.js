import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
  TouchableHighlight,
  Dimensions,
  Image
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Card from '../../components/Card';
const { height, width } = Dimensions.get('window')
const Explore = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
          <View style={{
            flexDirection: 'row', padding: 10,
            backgroundColor: 'white', marginHorizontal: 20,
            shadowOffset: { width: 0, height: 0 },
            shadowColor: 'black',
            shadowOpacity: 0.2,
            elevation: 1
          }}>
            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Try Indonesia"
              placeholderTextColor="grey"
              style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
            />
          </View>
        </View>
        <ScrollView
          scrollEventThrottle={16}
        >
          <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                Top Destination
              </Text>

              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Card imageUri={require('../../../assets/home.jpg')}
                    name="Home"
                  />
                  <Card imageUri={require('../../../assets/home.jpg')}
                    name="contoh hotel"
                  />
                  <Card imageUri={require('../../../assets/home.jpg')}
                    name="contoh hotel"
                  />
                </ScrollView>
              </View>
            </View>

            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text style={{ fontSize: 24, fontWeight: '700' }}>
                POPULAR DESTINATIONS
              </Text>

              <View style={{ width: width - 40, height: 200, marginTop: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                  <Image source={require('../../../assets/home.jpg')}
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                  />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text>Hotel</Text>
                </View>
              </View>
              <View style={{ width: width - 40, height: 200, marginTop: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                  <Image source={require('../../../assets/home.jpg')}
                    style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                  />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                  <Text>Contoh Hotel</Text>
                </View>
              </View>

            </View>
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({})
export default Explore;
