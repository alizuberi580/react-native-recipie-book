import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MealItem from './MealItem'
const MealsList = ({items}) => {
  function renderMealItem(itemData){
        const item=itemData.item
        const mealItemProps={
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }
        return <MealItem {...mealItemProps}/>
    }
  return (
        <View style={styles.rootScreen}>
            <FlatList data={items} keyExtractor={(item)=>item.id} renderItem={renderMealItem} contentContainerStyle={{paddingBottom: 24}}/>
        </View>
  )
}

export default MealsList

const styles = StyleSheet.create({
    rootScreen:{
        flex:1,
        padding: 20,
        paddingBottom:0
    },
})