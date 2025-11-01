import { View, Text, Pressable,StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import React from 'react'

const IconButton = ({icon, color,onPress}) => {
    function pressHandler(){
        onPress()
    }
    return (
    <View style={styles.container}>
        <Pressable onPress={pressHandler} style={({pressed})=>pressed&&styles.pressed}>           
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    </View>
  )
}

export default IconButton

const styles= StyleSheet.create({
    pressed:{
        opacity: 0.7    
    },
    container:{
        marginHorizontal: 16
    }
})