import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Kprofil, Header, Input, Button, Gap } from '../../components'
import { Fire } from '../../config'
import { colors, getData, storeData } from '../../utils'
import ImagePicker from 'react-native-image-picker'
import { ILNullPhoto } from '../../assets'
import { showMessage } from 'react-native-flash-message'

const UpdateProfil = ({ navigation }) => {
    const [profile, setProfile] = useState({
        namaLengkap: '',
        alamat: '',
        noHp: '',
        email: '',
    });
    const [kataSandi, setKataSandi] = useState('');
    const [foto, setFoto] = useState(ILNullPhoto);
    const [fotoForDB, setFotoForDB] = useState('');


    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            setFoto({ uri: res.foto });
            setProfile(data);
        });
    }, []);

    const update = () => {
        console.log('profil: ', profile);
        console.log('new Kata Sandi: ', kataSandi);

        if (kataSandi.length > 0) {
            if (kataSandi.length < 6) {
                console.log('error: ', err)
                showMessage({
                    message: 'kata sandi kurang dari enam karakter',
                    type: 'default',
                    backgroundColor: colors.error,
                    color: 'white',
                });
            } else {
                //update kataSandi 
                updateKataSandi();
                updateProfileData();
                navigation.replace('MainApp');
            }
        } else {
            updateProfileData();
            navigation.replace('MainApp');
        }
    };
    const updateKataSandi = () => {
        Fire.auth().onAuthStateChanged(user => {
            if (user) {
                user.updateKataSandi(kataSandi)
                    .catch(err => {
                        console.log('error: ', err)
                        showMessage({
                            message: err.message,
                            type: 'default',
                            backgroundColor: colors.error,
                            color: 'white',
                        })

                    })
            }
        })
    }

    const updateProfileData = () => {
        const data = profile;
        data.foto = fotoForDB;
        Fire.database()
            .ref(`users/${profile.uid}/`)
            .update(data)
            .then(() => {
                console.log('success: ', data);
                storeData('user', data);
            })
            .catch(err => {
                console.log('error: ', err)
                showMessage({
                    message: err.message,
                    type: 'default',
                    backgroundColor: colors.error,
                    color: colors.white,
                })
            })

    }

    const chageText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value,
        })
    }
    const getImage = () => {
        ImagePicker.launchImageLibrary({ quality: 0.5, maxWidth: 200, maxHeight: 200 },
            response => {
                console.log('response: ', response);
                if (response.didCancel || response.error) {
                    showMessage({
                        message: 'Oops, sepertinya anda tidak memilih foto nya?',
                        type: 'default',
                        backgroundColor: colors.error,
                        color: colors.white,
                    })
                } else {
                    console.log('response getImage: ', response)
                    const source = { uri: response.uri }

                    setFotoForDB(`data:${response.type};base64, ${response.data}`)
                    setFoto(source);

                }
            })
    }

    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title="Edit Profil" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Kprofil isRemove foto={foto} onPress={getImage} />
                    <Gap height={30} />
                    <Input label="Nama Lengkap" value={profile.namaLengkap} onChangeText={(value) => chageText('namaLengkap', value)} />
                    <Gap height={24} />
                    <Input label="Alamat" value={profile.alamat} onChangeText={() => chageText('alamat', value)} />
                    <Gap height={24} />
                    <Input label="Nomor Telepon" value={profile.noHp} disable />
                    <Gap height={24} />
                    <Input label="Email" value={profile.email} disable />
                    <Gap height={24} />
                    <Input label="Kata Sandi" value={profile.kataSandi} disable />
                    <Gap height={40} />
                    <Button title="Simpan Profil" onPress={update} />
                </View>
            </ScrollView>
        </View>
    )
}

export default UpdateProfil

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        padding: 40,
        paddingTop: 0,
    },
})
