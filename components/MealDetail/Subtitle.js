import { View, Text, StyleSheet } from "react-native";
function Subtitle ({children}){
return (
    <View style = {styles.subtitleContainer}>
            <Text style = {styles.subtitle}> {children}</Text>
            </View>
);
}
export default Subtitle

const styles = StyleSheet.create({
    subtitle:{
        color: 'orange',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer:{
        padding: 5,
        marginHorizontal: 5,
        marginVertical: 2,
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        borderRadius: 4
    }
});