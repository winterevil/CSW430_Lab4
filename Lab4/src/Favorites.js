import 'react-native-gesture-handler';
import { useSelector } from "react-redux";
import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ContactThum from "./ContactThum";

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
    const { contacts } = useSelector((state) => state);
    const renderFavoriteThumbnails = ({ item }) => {
        const { picture } = item;
        return (
            <ContactThum
                avatar={picture}
                onPress={() => navigation.navigate("ProfileContact", { contact: item })}
            />
        );
    };
    const favorites = contacts.filter((contact) => contact.favorite);
    return (
        <View style={styles.container}>
            <FlatList
                data={favorites}
                keyExtractor={keyExtractor}
                numColumns={3}
                contentContainerStyle={styles.list}
                renderItem={renderFavoriteThumbnails}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        flex: 1,
    },
    list: {
        alignItems: 'center',
    }
});

export default Favorites;