import React, { useEffect, useState } from 'react'
import { StyleSheet,View,Text} from 'react-native'
import { ILNullPhoto } from '../../assets';
import { Kprofil, List, Gap } from '../../components'
import { colors, getData } from '../../utils';
import {Fire} from '../../config'
import { showMessage } from 'react-native-flash-message';


const Profil = ({navigation}) => {
    const [profile, setProfile] = useState({
        namaLengkap:'',
        foto: ILNullPhoto,
    });
    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            data.foto = {uri: res.foto};
            setProfile (data);

        });
    }, []);

    const signOut = () => {
        Fire.auth().signOut().then(res => {
            console.log('success sign out');
            navigation.replace('Promosi') ;
        }).catch(err => {
            showMessage({
                message: err.message,
                type: 'default',
                backgroundColor: colors.error,
                color: colors.white,
            })
            
        })
    }
    return (
        <View style={styles.page}>
            <Text style={styles.teks}>Halaman Profil</Text>
            <Gap height={30} />
            {profile.namaLengkap.length > 0 && ( <Kprofil nama={profile.namaLengkap} foto={profile.foto}/>
            )} 
           
            <Gap height={30} />
           <List 
                nama="Edit Profil" 
                desc="Last update yesterday" 
                type="next" 
                icon="edit-profil" 
                onPress={() => navigation.navigate('UpdateProfil')}
                />
                
           <List 
                nama="Keluar" 
                type="next" 
                icon="keluar"
                Button title="KELUAR" onPress={signOut}
                />
        </View>
    )
}
 
export default Profil

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',

    },
    teks: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 15,
        color: colors.primary,
        backgroundColor: 'black',
        opacity: 0.8,
 
    },
})
