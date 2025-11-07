import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuid } from 'uuid';

export const mapContacts = (contact) => {
    const { name, picture, phone, cell, email } = contact;
    return {
        id: uuid(),
        name: name.first + ' ' + name.last,
        picture: picture.large,
        phone,
        cell,
        email,
        favorite: Math.random() < 0.1 ? true : false,
    };
};

export const saveContacts = async (contacts) => {
  try {
    await AsyncStorage.setItem('contacts', JSON.stringify(contacts));
  } catch (e) {
    console.log('Error saving contacts:', e);
  }
};

export const getContacts = async () => {
  try {
    const json = await AsyncStorage.getItem('contacts');
    return json != null ? JSON.parse(json) : [];
  } catch (e) {
    console.log('Error reading contacts:', e);
    return [];
  }
};
