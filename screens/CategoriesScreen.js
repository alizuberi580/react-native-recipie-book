import { StyleSheet, Text, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';
import React from 'react'

  
// navigation and route is inbuilt parameter, only applicable to be used in those screens for those who are in stack
const CategoriesScreen = ({navigation}) => {
  
  function renderCategoryItem(itemData){
    function pressHandler(){
      navigation.navigate('MealsOverview',{
        categoryId: itemData.item.id
      })//second parameter in .navigate('',{})allows you to pass parameters ta te screen to which youer navigating to
    }
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />;
  }


  return (
    //<SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.rootContainer}>
        <FlatList data={CATEGORIES} keyExtractor={(item)=>item.id} renderItem={renderCategoryItem} numColumns={2} contentContainerStyle={{paddingBottom: 24}}/>
      </View>
    //</SafeAreaView>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  safeAreaContainer:{
    flex: 1,
    backgroundColor:'#3f2f25'
  },
  rootContainer:{
    flex: 1,
    backgroundColor:'#3f2f25',
    //paddingBottom:16,
    //marginBottom:16
  },
})












//when to use scroll view
/*
1- Small number of items (< 20 items)

2- All items render at once (no virtualization)

3- Simple layouts (forms, static content)

4- Mixed content types (text, images, inputs in one scrollable view)

//when to use Flat List
1- Large/long lists (100+ items)

2- Dynamic data (API-driven content)

3- Identical/similar item structures (e.g., chat messages, product cards)

4- Memory efficiency matters (lazy rendering)
*/

