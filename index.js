import { AppRegistry } from 'react-native';
import App from './App';
import BackgroundTimer from 'react-native-background-timer';

setTimeout = BackgroundTimer.setTimeout.bind(BackgroundTimer)
setInterval = BackgroundTimer.setInterval.bind(BackgroundTimer)
clearTimeout = BackgroundTimer.clearTimeout.bind(BackgroundTimer)
clearInterval = BackgroundTimer.clearInterval.bind(BackgroundTimer)

AppRegistry.registerComponent('FirebaseReactNative', () => App);
