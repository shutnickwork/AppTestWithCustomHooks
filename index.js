/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/app/App';
import Main from './src/navigation/MainNavigator';
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => Main);
