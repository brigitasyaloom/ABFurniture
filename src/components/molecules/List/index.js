import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconEditProfil, IconKeluar, IconNext } from '../../../assets'
import { colors, fonts } from '../../../utils'

const List = ({profil, nama, desc, type, icon, onPress}) => {
    const Icon = () => {
        if(icon === 'edit-profil'){
            return <IconEditProfil />;
        }
        if(icon === 'keluar'){
            return <IconKeluar />;
        } 
        return <IconEditProfil />;
    };
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            { icon ? <Icon /> : <Image source={profil} style={styles.avatar} /> }
            <View style={styles.content}>
            <Text style={styles.nama}>{nama}</Text>
            <Text style={styles.desc}>{desc}</Text>
            </View>
            {type === 'next' && <IconNext />}
            </TouchableOpacity>
    
 
    )
}

export default List;

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        padding:16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content:{
        flex:1,
        marginLeft: 16,
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46/2,
        marginRight: 12

    },
    nama: {
        fontSize:16,
        color: colors.text.primary
    },
    desc: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.primary

    },

})
