import React, {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import {Header, Input, Button, Gap, Loading} from '../../components'
import { Fire } from '../../config'
import { colors, storeData, useForm } from '../../utils'
import {showMessage, hideMessage} from 'react-native-flash-message';



const Register = ({navigation}) => {
    const [form, setForm] = useForm({
        namaLengkap: '',
        alamat: '',
        noHp: '', 
        email: '',
        kataSandi: '',
    });

    const [loading, setLoading] = useState(false);
    

    
    const onMasuk = () =>{
        console.log(form);
        
        setLoading(true);
        Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.kataSandi)
        .then((success) => {
            setLoading(false);
            setForm('reset');
            //https://firebase.com/users
            const data = {
                namaLengkap: form.namaLengkap,
                alamat: form.alamat, 
                noHp: form.noHp,
                email: form.email,
                uid: success.user.uid,
            }
            Fire
            .database()
            .ref('users/' +success.user.uid+ '/')
            .set(data);

            storeData('user', data);
            console.log ('Register success : ', success); 
        })
        .catch((error) => {
            const errorMessage = error.message;
            setLoading(false);
            showMessage({
                message: error.message,
                type : 'default',
                backgroundColor: colors.error,
                color: colors.white,
            });
            console.log ('error register :', errorMessage);
          });
        
     };
    return (
    <>
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator={false}>
            {/* <Header onPress={() => navigation.goBack()} title="Daftar Akun"/> */}
            <View style={styles.content}>
        
            <Input label="Nama Lengkap"
            value={form.namaLengkap}
            onChangeText={(value) => setForm('namaLengkap', value)}/>
            <Gap height={5} />

            <Input label="Alamat" 
            value={form.alamat}
            onChangeText={(value) => setForm ('alamat', value)} />
            <Gap height={5} />

            <Input label="Nomor Telepon (Diawali : 62)" 
            value={form.noHp}
            onChangeText={(value) => setForm('noHp', value)} />
            <Gap height={5} />

            <Input label="Email" 
            value={form.email}
            onChangeText={(value) => setForm('email', value)} />
            <Gap height={5} />

            <Input label="Kata Sandi" 
            value={form.kataSandi}
            onChangeText={(value) => setForm('kataSandi', value)} secureTextEntry />
            <Gap height={20} />
            
            <Button title="Lanjutkan" onPress={onMasuk} />
        
            </View>
            </ScrollView>
        </View>
        {loading && <Loading />}
    </>
    )
    
}

export default Register


const styles = StyleSheet.create({
    page: { 
        backgroundColor: colors.white, 
        flex:1,
        paddingTop: 60
    },
    content: {
        padding :40, 
        paddingTop:0,
    }
})
