/**
 * @format
 */

import {AppRegistry} from 'react-native';
import ContactsList from './ContactList';
import Contact from './Contact';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ContactsList);
export {Contact};
