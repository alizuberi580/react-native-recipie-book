import { StyleSheet, Text, View } from 'react-native'
import MealsList from '../components/MealsList/MealsList'
import { useContext } from 'react'
import { FavoritesContext } from '../store/context/favorites-context'
import { MEALS } from '../data/dummy-data'

const FavoriteMealScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>favoriteMealsCtx.ids.includes(meal.id));
  
  if(favoriteMeals.length===0){
    <View style={styles.container2}>
      <Text style={styles.text}>
        YOu have no favorite meals yet
      </Text>
    </View>
  }
  else{
    return (
    <View style={styles.conatiner}>
      <MealsList items={favoriteMeals}/>
    </View>
  )
  }
}

export default FavoriteMealScreen

const styles = StyleSheet.create({
    conatiner:{
      flex:1, 
      backgroundColor:'#3f2f25',
    },
    container2:{
      flex:1,
      backgroundColor:'#3f2f25',
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white'
    }
})