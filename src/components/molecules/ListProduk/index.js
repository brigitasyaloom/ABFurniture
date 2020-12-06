import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View, Linking } from 'react-native'
import { colors, fonts, getData } from '../../../utils'
import { Button } from '../../atoms'
//import { Button } from '../../atoms'

const ListProduk = ({hargaProduk, jenisProduk,keterangan,namaLengkap, pic, noHp, namaToko, alamat,email, Penjual, onPress}) => {
    
    const [bState, setState] = useState (false);
    const [pesan, setPesan] = useState ('Tersedia');
    const [user, setUser] = useState({});
    useEffect(() => {
        getDataUser();
    }, []);
    const getDataUser = () => {
        getData('user').then(res => {
            console.log('user login: ', res);
            setUser(res);
        })
    }

    
    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.avatar} />
            <View >
            <Text style={styles.namaToko}>{namaToko}</Text>
            <Text style={styles.alamat}>Penjual : {namaLengkap}</Text>
            <Text style={styles.alamat}>Alamat : {alamat}</Text>
            {/* <Text style={styles.alamat}>No.Hp : {noHp}</Text> */}
            <Text style={styles.alamat}>{jenisProduk}</Text>
            <Text style={styles.alamat}>Rp. {hargaProduk}</Text>
            <Text style={styles.alamat}>{keterangan}</Text>
            {/* <Text style={styles.alamat}>user : {namaLengkap}</Text> */}
            <Text style={styles.tersedia}>{pesan}</Text>
            </View>
            <View style={styles.pesan}>
            <Button type="icon-only" icon="pesan" onPress={ ()=>{ Linking.openURL('https://wa.me/'+noHp)}}/>
 
            </View>
            
        </View>
    )
}

export default ListProduk

const styles = StyleSheet.create({
    avatar: {
        width: 130,
        height: 150,
        borderRadius: 10, 
        marginRight: 16,

    },
    pesan:{
        flexDirection: 'row-reverse',
        justifyContent: 'flex-start',
         //paddingLeft: 40,
         paddingTop: 120,
         paddingRight: 30,
         flex:1,
         //backgroundColor: 'red'
         //alignSelf: 'flex-end'
    },
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 15,
        borderBottomWidth:1,
        borderBottomColor: colors.border,
        padding: 10,
      //  marginHorizontal: 1,
    },
    tersedia: {
        fontSize: 12,
        fontFamily:fonts.primary[300],
        color : colors.primary,
        marginTop: 6,
    },
    namaToko: {
        fontSize: 15,
        color: colors.text.primary

    },
    alamat: {
        fontSize: 12,
        fontFamily:fonts.primary[300],
        color: 'grey',
        marginTop: 6,
        

    },
})
