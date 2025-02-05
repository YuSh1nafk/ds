import CategoryGrid from "../components/CategoryGrid";
import { CATEGORIES } from "../data/dummy-data"
import { FlatList } from "react-native";


function CategoriesScreen({ navigation }){
    function renderCategoryItem(itemData){
    function pressHandler(){
    navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id, 
    });
}
return(
    <CategoryGrid
    title={itemData.item.title}
    color={itemData.item.color}
    onPress={pressHandler}

    />
)
};
    return ( <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} 
    renderItem={renderCategoryItem}
    numColumns={2}
    />
);
}   
export default CategoriesScreen;





