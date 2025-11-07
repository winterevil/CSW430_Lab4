import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { getContacts } from './Store';
import ContactThum from "./ContactThum";

const keyExtractor = ({ phone }) => phone;

const Favorites = ({ navigation }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        (async () => {
            const all = await getContacts();
            setFavorites(all.filter(c => c.favorite));
        })();
    }, []);

    const renderFavoriteThumbnails = ({ item }) => {
        return (
            <ContactThum
                avatar={item.picture}
                onPress={() => navigation.navigate("ProfileContact", { contact: item })}
            />
        );
    };
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