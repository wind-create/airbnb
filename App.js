import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/redux/Store';
import { Provider } from "react-redux";
import Router from './src/navigation/Router';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar hidden />
        <Router />
      </NavigationContainer>
    </Provider>
  )
}

export default App
