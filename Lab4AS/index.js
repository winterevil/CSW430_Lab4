/**
 * @format
 */
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont();

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-get-random-values';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

AppRegistry.registerComponent(appName, () => App);
