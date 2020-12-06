import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash, GetStarted, Register, Login, Beranda, Profil, UpdateProfil, TambahProduk, Informasi, Promosi,

} from '../pages';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import { TabActions } from '@react-navigation/native';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return(
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Beranda" component={Beranda}/>
      <Tab.Screen name="Tambah Produk" component={TambahProduk}/>
      <Tab.Screen name="Informasi" component={Informasi}/>
      <Tab.Screen name="Profil" component={Profil}/>
    </Tab.Navigator>
  )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen 
              name="Splash" 
              component={Splash} 
              options= {{headerShown : false}}/>
            <Stack.Screen 
              name="GetStarted" 
              component={GetStarted} 
              options= {{headerShown : false}}/>
            <Stack.Screen 
              name="Register" 
              component={Register} 
              options= {{headerShown : false}}/>
            <Stack.Screen 
              name="Login" 
              component={Login}
              options= {{headerShown : false}}/>
            <Stack.Screen
              name="MainApp"
              component={MainApp}
              options={{headerShown : false}}/>
              <Stack.Screen
              name="UpdateProfil"
              component={UpdateProfil}
              options={{headerShown : false}}/>
               <Stack.Screen
              name="Promosi"
              component={Promosi}
              options={{headerShown : false}}/>
        </Stack.Navigator>
    );
};

export default Router;