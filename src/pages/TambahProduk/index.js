import React, { useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Header, Input, Button, Gap } from '../../components'
import { colors, useForm, getData, showError } from '../../utils'
import { Fire } from '../../config'
import ImagePicker from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets'
import { showMessage } from "react-native-flash-message";


const TambahProduk = ({ navigation }) => {

    const [user, setUser] = useState({});
    const [imgURI, setURI] = useState();
    const [imgName, setName] = useState();
    const [foto, setFoto] = useState(ILNullPhoto);

    const getImage = () => {
        ImagePicker.launchImageLibrary({ quality: 0.5, maxWidth: 150, maxHeight: 150 }, response => {
            console.log('response: ', response);
            if (response.didCancel || response.error) {
                showMessage({
                    message: 'Sepertinya anda tidak jadi memilih foto',
                    type: 'default',
                    backgroundColor: 'red',
                    color: colors.white
                });
            } else {
                setURI(response.uri);
                setName(response.fileName);
                setFoto({ uri: response.uri });
            }
        });
    };
    useEffect(() => {
        getDataUser();
    }, []);
    const getDataUser = () => {
        getData('user').then(res => {
            console.log('user login: ', res);
            setUser(res);
        })
    }

    const [inputProduk, setInputProduk] = useForm({
        // tokoBy: user.email,
        namaToko: '',
        namaLengkap: user.namaLengkap,
        alamat: user.alamat,
        jenisProduk: '',
        hargaProduk: '',
        keterangan: '',
        noHp: user.noHp,
        
    });

    const tambahProduk = () => {
        Fire.database()
            .ref('tambahProduk/')
            .push({
                namaToko: inputProduk.namaToko,
                namaLengkap: user.namaLengkap,
                alamat: user.alamat,
                noHp: user.noHp,
                jenisProduk: inputProduk.jenisProduk,
                hargaProduk: inputProduk.hargaProduk,
                fotoProduk: imgURI,
                ket: inputProduk.keterangan,
                // tokoBy: user.email,
            
            }).then((data) => {
                //success callback
                console.log('data ', data)
                navigation.navigate('Beranda')
            }).catch((error) => {
                //error callback
                console.log('error ', error)
            })
    }
    return (
        <View style={styles.page}>
            <Text style={styles.teks}>Produk yang akan di jual</Text>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <View style={styles.profile}>
                        <TouchableOpacity style={styles.avatarWrapper} onPress={getImage} >
                            <Image source={foto} style={styles.avatar} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Gap height={80} />

                        <Input
                            label="Nama Toko"
                            value={inputProduk.namaToko}
                            onChangeText={(value) => setInputProduk('namaToko', value)}
                        />
                        <Gap height={8} />
                        <Input
                            label="Jenis Produk"
                            value={inputProduk.jenisProduk}
                            onChangeText={(value) => setInputProduk('jenisProduk', value)}
                        />
                        <Gap height={8} />
                        <Input
                            label="Harga Produk"
                            value={inputProduk.hargaProduk}
                            onChangeText={(value) => setInputProduk('hargaProduk', value)}
                        />
                        <Gap height={8} />

                        <Input
                            label="Keterangan Tambahan"
                            value={inputProduk.keterangan}
                            onChangeText={(value) => setInputProduk('keterangan', value)}
                        />
                        <Gap height={20} />
                    </View>
                    <View>
                        <Button
                            title="Unggah" onPress={tambahProduk} />
                        <Gap height={10} />
                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default TambahProduk

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 40,
        flex: 1,
        justifyContent: 'space-between'
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        marginBottom: 50,
        marginTop: 50
    },
    avatar: {
        width: 225,
        height: 225,
    },
    avatarWrapper: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 60,

    },
    addPhoto: {
        position: 'absolute',
        bottom: 6,
        right: 4,
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        textAlign: 'center'
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


