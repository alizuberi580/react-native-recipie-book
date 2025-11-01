import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//children prop is a default prop so that whatever we pass in between opeing and closing text, we can get it display here
const Subtitle = () => {
  return (
    <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Ingredients</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    subTitle:{
    color:'#e2b497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subTitleContainer:{
    padding:8,
    marginVertical: 4,
    marginHorizontal: 24,
    borderBottomColor:'#e2b497',
    borderBottomWidth: 2
  }
})
