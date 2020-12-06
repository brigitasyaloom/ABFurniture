import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View, Linking } from 'react-native'
import { not } from 'react-native-reanimated'
import { colors, fonts, getData } from '../../../utils'
import { Button } from '../../atoms'
//import { Button } from '../../atoms'

const ListPromosi = ({hargaProduk, jenisProduk,keterangan,namaLengkap, pic, noHp, namaToko, alamat}) => {
    
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
            {/* <Text style={styles.alamat}>Penjual : {namaLengkap}</Text> */}
            {/* <Text style={styles.alamat}>Alamat : {alamat}</Text> */}
            {/* <Text style={styles.alamat}>No.Hp : {noHp}</Text> */}
            <Text style={styles.alamat}>{jenisProduk}</Text>
            {/* <Text style={styles.alamat}>Rp. {hargaProduk}</Text> */}
            <Text style={styles.alamat}>{keterangan}</Text>
            {/* <Text style={styles.alamat}>user : {namaLengkap}</Text> */}
            {/* <Text style={styles.tersedia}>{pesan}</Text> */}
            </View>
            
        </View>
    )
}

export default ListPromosi

const styles = StyleSheet.create({
    avatar: {
        width: 210,
        height: 180,
        borderRadius: 10, 
        marginRight: 16,
    },
    container: {
        alignSelf: 'center',
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 15,  
       // borderBottomWidth:1,
        //borderBottomColor: colors.black.border,
        padding: 10,

      //  marginHorizontal: 1,
    },
    // tersedia: {
    //     fontSize: 12,
    //     fontFamily:fonts.primary[300],
    //     color : colors.primary,
    //     marginTop: 6,
    // },
    namaToko: {
        fontSize: 15,
        // color: 'white',
        color: colors.primary,
        textAlign: 'center'

    },
    alamat: {
        fontSize: 12,
        fontFamily:fonts.primary[300],
        color: 'white',
        marginTop: 6,
        textAlign: 'center'
        

    },
})
