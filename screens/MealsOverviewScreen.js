// import { useLayoutEffect } from "react";
// import { View, FlatList, StyleSheet } from "react-native";
// import { MEALS, CATEGORIES } from "../data/dummy-data";
// import MealItems from "../components/MealItems";
// import Category from "../models/models/category";

// function MealOverviewScreen({ route, navigation }) {
//     const catId = route.params.categoryId; 
//     const displayMeals = MEALS.filter((mealItem) => {
//         return mealItem.categoryIds.indexOf(catId) >= 0;
//     });
//     useLayoutEffect(() => {
//         const categoryTitle = CATEGORIES.find((Category) => Category.id === catId).title;
//     navigation.setOptions({
//         title: categoryTitle
//     });
//     }, [catId, navigation]);
    

//     function renderMealItem(itemData) {
//         const item = itemData.item;
//         const mealItemProps = {
//             id: item.id,
//             title: item.title,
//             imageUrl: item.imageUrl,
//             affordability: item.affordability,
//             complexity: item.complexity,
//             duration: item.duration
//         }
//         return <MealItems {...mealItemProps }/>;
//     }

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={displayMeals} 
//                 keyExtractor={(item) => item.id}
//                 renderItem={renderMealItem}
//             />
//         </View>
//     );
// }

// export default MealOverviewScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16
//     },
// });


import React, { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItems from "../components/MealItems";
import Category from "../models/models/category";

function MealOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId; 
    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title;
        navigation.setOptions({
            title: categoryTitle
        });
    }, [catId, navigation]);
    

    function renderMealItem({ item }) {
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        };
        return <MealItems {...mealItemProps} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals} 
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
});
