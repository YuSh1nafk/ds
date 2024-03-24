import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import MealOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
function DrawNavigator(){
  return (<Draw.Navigator>
      <Drawer.Screen name='Categories' component={CategoriesScreen}/>
      <Drawer.Screen name='Favorites' component = {FavoritesScreen}/>
  </Draw.Navigator>)
}

export default function App() {
  return (
    <> 
      <StatusBar style='dark'/>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: 'orange' },
            headerTintColor: 'red',
            contentStyle: { backgroundColor: 'aqua' }
          }}
        >
          <Stack.Screen 
            name="MealsCategories" 
            component={DrawNavigator} 
            options={{
              title: 'All Categories',
            }}
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealOverviewScreen}
          />
          <Stack.Screen 
            name="MealDetail" 
            component={MealDetailScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: { 
  },
});





