import { mapContacts, saveContacts, getContacts } from "./Store";
import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ContactListItem from "./ContactListItem";

const keyExtractor = ({ phone }) => phone;

const fetchContacts = async () => {
    const data = await fetch("https://randomuser.me/api/?results=50")
    const ContactData = await data.json();
    return ContactData.results.map(mapContacts);
};

const Contacts = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
            const local = await getContacts();
            if (local.length > 0) setContacts(local);
            else {
                const fetched = await fetchContacts();
                setContacts(fetched);
                await saveContacts(fetched);
            }
        })();
    }, []);

    const renderContacts = ({ item }) => {
        return <ContactListItem
            name={item.name}
            avatar={item.picture}
            phone={item.phone}
            onPress={() => navigation.navigate("ProfileContact", { contact: item })}
        />;
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={contacts}
                renderItem={renderContacts}
                keyExtractor={keyExtractor}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
});

export default Contacts;