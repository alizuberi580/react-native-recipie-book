import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons} from '@expo/vector-icons'
//import { SafeAreaProvider } from 'react-native-safe-area-context';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteMealScreen from './screens/FavoriteMealScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator 
    screenOptions={{
      headerStyle:{backgroundColor: '#351401'},
      headerTintColor: 'white',
      //sceneContainerStyle: {backgroundColor:'#351401'}
      drawerContentStyle:{backgroundColor:'#351401'},
      drawerInactiveTintColor:'white',
      drawerActiveTintColor:'#351401',
      drawerActiveBackgroundColor:'#e4baa1'
    }}>
    <Drawer.Screen 
      name="Categories" 
      component={CategoriesScreen} 
      options={{
        title:'All Categories',
        drawerIcon: ({color, size})=>(<Ionicons name='list' color={color} size={size}/>)
      }}
    /> 
    <Drawer.Screen 
      name="Favorites" 
      component={FavoriteMealScreen}
      options={{
        drawerIcon: ({color, size})=>(<Ionicons name='star' color={color} size={size}/>)
      }}
      />
  </Drawer.Navigator>
}
export default function App() {
  //screen=<CategoriesScreen/>
  return (
    <>
        <StatusBar style='light'/>
        <FavoritesContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                  headerStyle:{backgroundColor: '#351401'},
                  headerTintColor: 'white',
              }}
            >
              <Stack.Screen 
                name="Drawer" 
                component={DrawerNavigator}
                options={{
                  headerShown: false
                }}
              />
              <Stack.Screen 
                name="MealsOverview" 
                component={MealsOverviewScreen}
              />
              <Stack.Screen
                name="MealDetail"
                component={MealDetailScreen}
                options={{
                  title:'About the Meal'
                }}
                
              />
            </Stack.Navigator>
          </NavigationContainer>
        </FavoritesContextProvider>
    </>
  );
}

/*
Navigation:           Type	When to Choose:
1) Stack	            Default choice for most screen transitions
2) Native             Stack	Need native performance/animations
3) Bottom             Tabs Main app sections (3-5 items)
4) Drawer	            Many screens needing organization
5) Top Tabs	          Content categories needing horizontal swipe 
*/


const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    //backgroundColor:'#3f2f25'
  }
});
