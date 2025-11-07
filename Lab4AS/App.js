
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from './src/Contact';
import Favorites from './src/Favorites';
import ProfileContact from './src/ProfileContact';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ContactsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="ProfileContact" component={ProfileContact} options={{ title: 'Profile' }} />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="ProfileContact" component={ProfileContact} options={{ title: 'Profile' }} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Contacts"
        screenOptions={{
          drawerActiveTintColor: 'blue',
          drawerInactiveTintColor: 'gray',
        }}
      >
        <Drawer.Screen
          name="Contacts"
          component={ContactsStack}
          options={{ drawerIcon: ({ color }) => <Icon name="list" color={color} size={20} /> }}
        />
        <Drawer.Screen
          name="Favorites"
          component={FavoritesStack}
          options={{ drawerIcon: ({ color }) => <Icon name="star" color={color} size={20} /> }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
