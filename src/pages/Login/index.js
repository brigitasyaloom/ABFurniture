import React, {useState} from 'react'
import { StyleSheet, View, ScrollView} from 'react-native'
import { showMessage } from 'react-native-flash-message'
import { ILLogo } from '../../assets'
import { Button, Input, Link, Gap, Loading } from '../../components'
import { Fire } from '../../config'
import { colors, useForm, storeData} from '../../utils'


const Login = ({navigation}) => {
    const [form, setForm] = useForm ({email:'', kataSandi:'', });
    const [loading, setLoading] = useState(false);

    const login = () => {
        console.log('form: ', form );
        setLoading(true);
        Fire.auth()
        .signInWithEmailAndPassword(form.email, form.kataSandi)
        .then(res =>{
         console.log('success: ', res);
         setLoading(false);
         Fire.database()
         .ref(`users/${res.user.uid}/`)
         .once('value')
         .then(resDB => {
            console.log('data user: ', resDB.val());
            if(resDB.val()){
                storeData('user', resDB.val());
                navigation.replace('MainApp');
            }
         });

        })
        .catch( err => {
            console.log('error: ', err)
            setLoading(false);
            showMessage({
                message: err.message,
                type: 'default',
                backgroundColor: colors.error,
                color: colors.white,
            })
        })
    }
    return (
    <>
        <View style={styles.page}>
            <ScrollView showsVerticalScrollIndicator = {false}>
            <Gap height={40} />
            <ILLogo />
            <Gap height ={50} /> 
            <Input 
              label = "Email" 
              value={form.email} 
              onChangeText={value => setForm('email', value)}
              />
            <Gap height={24}/>
            <Input label = "Kata Sandi" 
              value={form.kataSandi}
              onChangeText={value => setForm('kataSandi', value)}
              secureTextEntry
              />
            <Gap height={50}/>
            <Button title="Masuk" onPress ={login} secureTextEntry />
            <Gap height={30}/>
            <Link 
                title="Buat Akun Baru" 
                size={16} 
                align="center"
                onPress={() => navigation.navigate('Register')}
                />
            </ScrollView>
       </View>
        {loading && <Loading />}
    </>
    );
};

export default Login

const styles = StyleSheet.create({
    page : {
        paddingHorizontal: 40, 
        backgroundColor: 'white', 
        flex:1
    },
    Text : {
        fontSize : 20, 
        color :'#112340', 
        marginTop:40, 
        marginBottom:40
    }

})
