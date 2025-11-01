import { StyleSheet, Text, View,Image, ScrollView } from 'react-native'
import { useContext, useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import IconButton from '../components/IconButton'
import { FavoritesContext } from '../store/context/favorites-context'


const MealDetailScreen = ({route, navigation}) => {
    const favoriteMealsCtx = useContext(FavoritesContext);
    
    const mealId=route.params.mealId
    const selectedMeal=MEALS.find((meal)=>meal.id===mealId)
    
    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

    function changeFavoriteStatusHandler(){
      if(mealIsFavorite){
        favoriteMealsCtx.removeFavorite(mealId);
      }else{
        favoriteMealsCtx.addFavorite(mealId)
      }
    }
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight:()=>{
          return( 
          <IconButton 
            icon={mealIsFavorite ? 'star': 'star-outline'} 
            color="white" 
            onPress={changeFavoriteStatusHandler}
          />)
        }
      })
    },[navigation, changeFavoriteStatusHandler])
    return (
    <ScrollView style={styles.scrollViewContainer}>
      <View style={styles.rootScreen}>
        <Image source={{uri:selectedMeal.imageUrl }} style={styles.image}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailText}/>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients}/>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps}/>
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen

const styles = StyleSheet.create({
  scrollViewContainer:{
    flex: 1,
    //paddingBottom: 16,
    backgroundColor:'#3f2f25',
    //alignItems:'center' alignItems property not applicable over for scroll view
  },
  rootScreen:{
    marginBottom:32,
    alignItems:'center'
  },
  image:{
    width:'100%',
    height:350
  },
  title:{
    fontWeight:'bold',
    fontSize: 24,
    margin: 8,
    textAlign:'center',
    color:'white'
  },
  detailText:{
    color:'white'
  },
  listContainer:{
    width:'80%',
  }
})