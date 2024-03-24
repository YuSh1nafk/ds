import { Pressable, View, Text, StyleSheet, Platform } from "react-native"
function CategoryGrid({title, color, onPress}){
    return (<View style={style.gridItem}>
        <Pressable android_ripple={{color: '#ccc'}} 
        style={({pressed}) => 
        [style.button, pressed ? style.buttonPressed : null,]}
        onPress={onPress}
        >
            
            <View style= {[style.innerContainer, {backgroundColor: color}]}>
                <Text style= {style.title}>{title}</Text>
            </View>
        </Pressable>
    </View>);
}
export default CategoryGrid;
const style = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android ' ? 'hidden' : 'visible' 
    },
    buttonPressed: {
        opacity: 0.5
    },
    button :{
        flex: 1
    },
    innerContainer:{
        flex: 1,
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})