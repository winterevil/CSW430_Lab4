import { mapContacts, fetchContactsSuccess } from "./Store";
import React, { useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ContactListItem from "./ContactListItem";

const keyExtractor = ({ phone }) => phone;

const fetchContacts = async () => {
    const data = await fetch("https://randomuser.me/api/?results=50")
    const ContactData = await data.json();
    return ContactData.results.map(mapContacts);
};

const Contacts = ({ navigation }) => {
    const { contacts } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchContacts()
            .then(
                (contacts) => {
                    dispatch(fetchContactsSuccess(contacts));
                }
            )
            .catch(
                e => {
                    console.log("Error fetching contacts:", e);
                }
            )
    }, []);

    const renderContacts = ({ item }) => {
        const { name, picture, phone } = item;
        return <ContactListItem
            name={name}
            avatar={picture}
            phone={phone}
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