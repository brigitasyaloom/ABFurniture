import React from 'react'
import {  StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'
//import { color } from 'react-native-reanimated'
import { ILlogoo } from '../../assets/illustration'
import { Gap } from '../../components'
import { colors } from '../../utils'

const Beranda = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Text style={styles.header}>Informasi Aplikasi</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
              <Gap height={20} />
              <Gap height={20} />
              <Image source={ILlogoo} style={styles.avatar} />
              <Gap height={10} />
              <View style={styles.container}>
              <Text style={styles.teks2}>
                  AB Furniture adalah aplikasi yang dibuat untuk 
              </Text>
              <Text style={styles.teks}>
                  memudahkan pedagang meubel dalam memasarkan 
                  produk yang dimiliki. Aplikasi ini memungkinkan pengguna dapat menjual serta membeli produk 
                  yang dibutuhkan dalam satu aplikasi. Adapun syarat dan ketentuan :
              </Text>
              <Text style={styles.teks}>
                  1. Pengguna harus memasukkan informasi dengan benar.
              </Text>
              <Text style={styles.teks}>
                  2. Detail dari produk yang akan dijual akan ditampilkan pada beranda.
              </Text>
              <Text style={styles.teks}>
                  3. Pembeli dapat melakukan pemesanan dengan cara menekan icon yang ada disamping detail produk.
              </Text>
              <Text style={styles.teks}>
                  4. Setelah menekan icon tersebut, pembeli akan langsung terhubung dengan penjual melalui aplikasi WhatsApp.
              </Text>
              <Gap height={20} />
              <Text style={styles.kontak}>
                    Kontak Admin :
              </Text>
              <Text style={styles.kontak}>
                    Email : ABF@gmail.com
              </Text>
              <Text style={styles.kontak}>
                    Nomor Tlp : 081247013400
              </Text>
              <Gap height={50} />
              <Text style={styles.teks1}>
                  Copyright ABF 2020
              </Text>
              </View>
        
            </ScrollView>
            {/* </View> */}

        </View>
    )
}

export default Beranda

const styles = StyleSheet.create({

    page: {
        backgroundColor: 'white',
        flex: 1,

    },
    container:{
        padding: 18,
        
    },
    avatar: {
        height:100,
        width:100,
        alignSelf: 'center',
    },
    teks1:{
        textAlign: 'center',
        color: 'grey',
        fontSize: 12

    },
teks2:{
    textAlign: 'center',
    fontSize: 13,
    color:'grey'
},
    teks: {
        fontSize: 13,
        textAlign: 'justify', 
        color: 'grey',
       },
    kontak: {
        fontSize: 13,
        textAlign: "justify",
        color: 'grey',
    },
    header: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 15,
        color: colors.primary,
        backgroundColor: 'black',
        opacity: 0.8

    }

})
