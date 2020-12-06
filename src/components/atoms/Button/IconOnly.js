import React from 'react'
//import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IconBackDark, IconBeli } from '../../../assets'

const IconOnly = ({onPress, icon}) => {
    const Icon = () => {
        if(icon === 'back-dark'){
            return <IconBackDark />
        }
        if(icon === 'pesan'){
            return <IconBeli />
        }
        if(icon === 'back-light'){
            return <IconBackDark />

        }
        return <IconBackDark />
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon />
        </TouchableOpacity>
    )
}

export default IconOnly


