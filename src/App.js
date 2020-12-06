import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import FlashMessage from "react-native-flash-message";
import {LogBox,YellowBox} from 'react-native';


const App = () => {
  YellowBox.ignoreWarnings(['Setting a timer']);
  LogBox.ignoreLogs(['']);
  return (
  <>
    <NavigationContainer>
    <Router/>
    </NavigationContainer>
    <FlashMessage position="top"/>
</>
  );
};

export default App;


