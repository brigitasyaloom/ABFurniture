import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconBeranda, IconBerandaActive, IconKeranjang, IconKeranjangActive, IconInformasi, IconInformasiActive, IconProfil, IconProfilActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Beranda'){
            return active ? <IconBerandaActive /> : <IconBeranda />;
        }
        if(title === 'Tambah Produk'){
            return active ? <IconKeranjangActive /> : <IconKeranjang />;
        }
        if(title === 'Profil'){
            return active ? <IconProfilActive /> : <IconProfil />
        }
        if(title === 'Informasi'){
            return active ? <IconInformasiActive /> : <IconInformasi />;
        }
        return <IconBeranda />;
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
             <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'

    },
    text: (active) => (
    {
     fontSize: 10,
     color: active ? colors.text.menuActive : colors.text.menuInactive,
     fontFamily: fonts.primary[600],
     marginTop:4, 
    }
    ),
})
