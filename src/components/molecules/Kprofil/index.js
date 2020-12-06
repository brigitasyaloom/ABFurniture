import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { IconRemovePhoto } from '../../../assets'
import { colors, fonts } from '../../../utils'

const Kprofil = ({ nama, isRemove, foto, onPress }) => {
    return (
        <View style={styles.container}>
            {!isRemove && (
                <View style={styles.borderProfil}>
                    <Image source={foto} style={styles.avatar} />
                </View>
            )}


            {isRemove && (
                <TouchableOpacity style={styles.borderProfil} onPress={onPress}>
                    <Image source={foto} style={styles.avatar} />
                    {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
                </TouchableOpacity>
            )}
            {  nama && (
                <View>
                    <Text style={styles.nama}>{nama}</Text>
                </View>
            )}

        </View>
    );
};

export default Kprofil

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
    },
    borderProfil: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.border,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 16,
    },
    removePhoto: {
        position: 'absolute',
        right: 8,
        bottom: 8,

    },
})
