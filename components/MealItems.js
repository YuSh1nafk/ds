import { View, Text, Pressable, Image, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItems({id, title, imageUrl, duration, complexity, affordability}){
const navigation = useNavigation();
function selectMealItemHandler(){
    navigation.navigate('MealDetail', {mealId: id, });
}

return (
<View style = {styles.mealItems}>
    <Pressable android_ripple={{color: 'red'}} style= {({pressed}) => (pressed ? styles.buttonPressed : null)}
    onPress={selectMealItemHandler}
    
    >
        <View style = {styles.innerContainer}>
        <View>
            <Image source = {{uri: imageUrl }} style={styles.image}/>
    <Text style= {styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
        </View>
    </Pressable>
</View>

)}
export default MealItems;

const styles = StyleSheet.create({
    mealItems: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 20
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,

    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 19,
        margin: 8
    },
    buttonPressed: {
        opacity: 0.5
    }
})