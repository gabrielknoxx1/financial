import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import './src/services/translate/i18n';

AppRegistry.registerComponent(appName, () => App);
