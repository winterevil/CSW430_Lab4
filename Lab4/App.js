/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import 'react-native-gesture-handler';
import React from 'react';
import Contacts from './src/Contact';
import Store from './src/Store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileContact from './src/ProfileContact';
import Favorites from './src/Favorites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/MaterialIcons";

const Stack = createStackNavigator();

function ContactsScreens() {
  return (
    <Stack.Navigator
      initialRouteName='Contacts'
      screenOptions={
        {
          headerShown: true
        }
      }>
      <Stack.Screen name="Contacts" component={Contacts}
        options={{ title: "Contacts" }} />
      <Stack.Screen name="ProfileContact" component={ProfileContact}
        options={{ title: "Profile contact" }} />
    </Stack.Navigator>
  );
}

function FavoriteScreens() {
  return (
    <Stack.Navigator
      initialRouteName='Favorites'
      screenOptions={
        {
          headerShown: true
        }
      }>
      <Stack.Screen name="Favorites" component={Favorites}
        options={{ title: "Favorites" }} />
      <Stack.Screen name="ProfileContact" component={ProfileContact}
        options={{ title: "Profile contact" }} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Contacts"
        component={ContactsScreens}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color, size }) => (
            <Icon name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreens}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
