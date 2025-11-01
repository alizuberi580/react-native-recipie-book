import { StyleSheet, View} from 'react-native'
import MealsList from '../components/MealsList/MealsList';
import { useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';

// route.params ==> an optional object containing params which is defined while navigating eg navigate('mealsOerview',{id:itemData.item.id})
// route also have other properties key, name, path
// so now we pass object with navigate command {} in categoriesScreen, and now in mealsOverview we can access the by using command route.params
// for screen components we can simply use route as a parameter send, but for those not screen or are in nested hierarchy, we can use route hook
/*
.filter(...)
This is a built-in array method that:

//useLayoutEffect -> when we need to set, before component function execution. with use effect, it was executred after component function was executed, hemnce not a smooth transition
Creates a new array.

Includes only the elements for which the provided function returns true
*/
const MealsOverviewScreen = ({route, navigation}) => {
    const catId= route.params.categoryId
    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId)>=0;
    });

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category)=>category.id===catId).title
        navigation.setOptions({
            title:categoryTitle
        })
    },[catId, navigation])
    return (
        <View style={styles.container}>
            <MealsList items={displayedMeals}/>
        </View>
    )
    
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#3f2f25'
    },
})