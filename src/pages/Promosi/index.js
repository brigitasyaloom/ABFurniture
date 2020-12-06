import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ImageBackground} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import {  ILPromosi_4 } from '../../assets'
import { ListProduk,  Gap, ListPromosi } from '../../components'
import { Fire } from '../../config'
import { colors } from '../../utils'

const Promosi = ({ onPress, navigation }) => {
    const [inputProduk, setInputProduk] = useState([]);
    useEffect(() => {
        Fire.database()
            .ref('tambahProduk/')
            .once('value')
            .then(res => {
                console.log('data list produk: ', res.val());
                if (res.val()) {
                    const oldData = res.val();
                    const data = [];
                    Object.keys(oldData).map(item => {
                        data.push({
                            id: item,
                            data: oldData[item]
                        })
                    })
                    console.log('parse list produk: ', data)
                    setInputProduk(data);
                }
            })
    })
    return (
        
        <ImageBackground source = {ILPromosi_4} style = {styles.page} >
        <View style={styles.latar}>
            
            <Text style={styles.teks}>KATALOK PRODUK </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Gap height={30} />
                <View>
                    {
                        inputProduk.map(tambahProduk => {
                            return (
                                <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>

                                <ListPromosi 
                                    key={tambahProduk.id}
                                    namaToko={tambahProduk.data.namaToko}
                                    namaLengkap={tambahProduk.data.namaLengkap}
                                    // alamat={tambahProduk.data.alamat}
                                    // noHp={tambahProduk.data.noHp}
                                    jenisProduk={tambahProduk.data.jenisProduk}
                                    // hargaProduk={tambahProduk.data.hargaProduk}
                                    keterangan={tambahProduk.data.ket}
                                    pic={{ uri: tambahProduk.data.fotoProduk }}
                                   //onPress={onPress}
                                />
                                </TouchableOpacity>

                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
        </ImageBackground>
    )
}

export default Promosi

const styles = StyleSheet.create({
    page: {
        paddingLeft:20,
        paddingTop:55,
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
    content: {
        backgroundColor: colors.white,
        borderRadius: 20,
        flex: 3,
        marginTop: -30,
        paddingTop: 14,
    },
    background: {
        flex: 1,
        height: 200,
        paddingTop: 30
    },
    teks: {
        textAlign: 'center',
        fontSize: 20,
        // paddingTop: 15,
        // paddingBottom: 15,
        color: colors.white,
        // backgroundColor: colors.primary,
        // opacity: 0.8
    },
})
