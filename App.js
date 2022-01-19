import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image } from 'react-native';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import Gate from './src/components/Gate';
import * as font from "expo-font"
import store from './src/redux/store'
import { Provider } from 'react-redux'



const cacheImages = images => images.map(image => {
  if (typeof image === "string") {
    return Image.prefetch(image)
  } else {
    return Asset.fromModule(image).downloadAsync()
  }
})

const cacheFonts = fonts => fonts.map(font => FontFace.loadAsync(font))

export default function App() {

  const [isReady, setIsReady] = useState(false)
  const handleFinish = () => setIsReady(true)
  const loadAssets = async () => {
    const images = [
      require("./assets/loginBg.jpeg"),
      "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png"
    ]
    const fonts = [Ionicons.font]
    const imagePromises = cacheImages(images)
    const fontPromises = cacheFonts(fonts)
    return Promise.all([...fontPromises, ...imagePromises])
  }

  return isReady ? (
    <Provider store={store}>
      <Gate />
    </Provider>

  ) : (
    <AppLoading
      onError={console.error}
      onFinish={handleFinish}
      startAsync={loadAssets}
    />
  );
}

const styles = StyleSheet.create({

});
