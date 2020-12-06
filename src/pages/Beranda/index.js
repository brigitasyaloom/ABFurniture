import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ILCari_2 } from '../../assets'
import { ListProduk,  Gap } from '../../components'
import { Fire } from '../../config'
import { colors } from '../../utils'

const Beranda = ({ onPress, navigation }) => {
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
        <View style={styles.page}>
            <Text style={styles.teks}>Pesan produk </Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Gap height={30} />
                <View>
                
                    {inputProduk.map(tambahProduk => {
                            return (
                                <ListProduk key={tambahProduk.id}
                                    namaToko={tambahProduk.data.namaToko}
                                    namaLengkap={tambahProduk.data.namaLengkap}
                                    alamat={tambahProduk.data.alamat}
                                    noHp={tambahProduk.data.noHp}
                                    jenisProduk={tambahProduk.data.jenisProduk}
                                    hargaProduk={tambahProduk.data.hargaProduk}
                                    keterangan={tambahProduk.data.ket}
                                    // email={tambahProduk.data.tokoBy}
                                    pic={{ uri: tambahProduk.data.fotoProduk }}
                                    onPress={onPress}

                                />

                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default Beranda

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
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
        paddingTop: 15,
        paddingBottom: 15,
        color: colors.primary,
        backgroundColor: 'black',
        opacity: 0.8
    },
})
