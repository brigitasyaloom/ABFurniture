import React from 'react'
import { StyleSheet, Text, View, ImageBackground} from 'react-native'
import {ILGambar2, ILGetStarted, ILLogo, ILPromosi_1, ILPromosi_3, ILPromosi_5} from '../../assets';
import { Button, Gap } from '../../components'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source ={ILPromosi_5} style = {styles.page}>
          <View style={styles.latar}>

           <Text style={styles.title}>Daftar dan Masuk untuk mendapatkan produk mu!</Text>

           <View style={styles.baten}>

            <Button title= "Daftar" onPress={() => navigation.navigate('Register')}/>
            <Gap height={10}/>
            <Button type='secondary' title= "Masuk" onPress={() => navigation.navigate('Login')}/>
            </View>
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page : {
        paddingLeft:20,
        paddingTop:70,
        paddingRight:20,
        justifyContent : 'space-between',
        flex:1
    },
    latar:{
        flex:4,
        marginTop: -30,
        paddingTop: 14,
        // borderRadius: 30,
        borderTopLeftRadius: 50,
        borderTopRightRadius:50,
        backgroundColor: "#2B2E2C",
        opacity: 0.8,
    },
    title : {
        fontSize: 30, 
        fontWeight : "500", 
        color: 'white', 
        marginTop : 60,
        justifyContent: 'flex-start',
        paddingLeft: 20
    },
    baten: {
        paddingLeft: 62,
        paddingRight: 62,
        paddingTop: 200,
    }
});
