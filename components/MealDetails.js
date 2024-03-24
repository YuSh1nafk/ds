// import { View, Text, StyleSheet, style, TextStyle } from "react-native";
// function MealDetails ({duration, complexity, affordability}){
//     return <View style= {[styles.details, style]}>
//     <Text style = {[styles.detailItem, TextStyle]}>{duration}</Text>
//     <Text style = {[styles.detailItem, TextStyle]}>{complexity.toUpperCase()}</Text>
//     <Text style = {[styles.detailItem, TextStyle]}>{affordability.toUpperCase()}</Text>
// </View>
// }
// export default MealDetails;
// const styles = StyleSheet.create({
//     details: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 8
//     },
//     detailItem:{
//         marginHorizontal: 4,
//         fontSize: 12
//     },
// })

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// function MealDetails({ duration, complexity, affordability, TextStyle }) {
//     return (
//         <View style={styles.details}>
//             <Text style={[styles.detailItem, TextStyle]}>{duration}</Text>
//             <Text style={[styles.detailItem, TextStyle]}>{complexity.toUpperCase()}</Text>
//             <Text style={[styles.detailItem, TextStyle]}>{affordability.toUpperCase()}</Text>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     details: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical:5,
//     },
//     detailItem: {
//         marginHorizontal: 8,
//         marginVertical:5 ,
//         fontSize: 15,
//     },
// });

// export default MealDetails;



import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MealDetails({ duration, complexity, affordability, TextStyle }) {
    return (
        <View style={styles.details}>
            <Text style={[styles.detailItem, TextStyle]}>{duration}</Text>
            <Text style={[styles.detailItem, TextStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, TextStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    detailItem: {
        marginHorizontal: 4,
        marginVertical: 2,
        fontSize: 12,
        fontWeight: 'bold'
    },
});

export default MealDetails;


