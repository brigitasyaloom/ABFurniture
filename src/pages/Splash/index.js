import React , {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {ILLogo} from '../../assets'
import { Fire } from '../../config';

const Splash = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        Fire.auth().onAuthStateChanged((user)=>{
          if(user){
            // user lagi login
            console.log('user: ', user)
            navigation.replace('MainApp');
          }else{
            // user logout
            navigation.replace('Promosi');
          }
        })
      }, 3000);
    }, [navigation]);
    return (
        <View style={styles.page}>
            <ILLogo />
            <Text style={styles.title}> </Text>
          </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white', 
        flex: 1, alignItems: 'center', 
        justifyContent: 'center'
    },
    title: {
        fontSize:18, 
        fontWeight: '600', 
        color: '#000000', 
        marginTop: 20
    }
})

