import { useLayoutEffect } from 'react';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

function headerButtonPressHandler(){
    console.log('pressed')
}


function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    useLayoutEffect(()=>{
        navigation.setOptions({headerRight: () => {
            return <IconButton icon='star' color='red' onPress={headerButtonPressHandler}/>
        }})
    }, [navigation, headerButtonPressHandler])


    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                TextStyle={styles.detailsText} // Pass the TextStyle prop
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
    },
    detailsText: {
        color: 'white',
    },
    listContainer: {
        width: '80%',
        paddingVertical: 10
    },
    listOuterContainer: {
        alignItems: 'center',
        marginHorizontal: 10,
        paddingVertical: 5
    },
});

export default MealDetailScreen;



