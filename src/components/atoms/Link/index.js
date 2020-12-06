import React from 'react'
import { StyleSheet, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Link = ({title, size,align, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style= {styles.Text(size,align)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    Text : (size,align) => ({
        fontSize:12,
        color:'#7D8797',
        textDecorationLine:'underline',
        textAlign : align
    }),

});
