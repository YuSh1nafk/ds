import { View, Text, StyleSheet } from "react-native"

function List ({data}){
    return(
        data.map((dataPoint, index) => (
        <View key={index} style = {styles.listItem}>
        <Text style = {styles.itemText}>{dataPoint}</Text>
        </View>
        )))
    }
    export default List

    const styles = StyleSheet.create({
        listItem: {
            borderRadius: 6,
            paddingHorizontal: 8,
            paddingVertical: 3,
            marginHorizontal: 4,
            marginVertical: 2,
            backgroundColor: 'gray'
        },
        itemText: {
            color: 'black',
            textAlign: 'center'
        }
    })