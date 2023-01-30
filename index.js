/**
 * @format
 */

import { AppRegistry } from 'react-native'
// import App from './src/App'
import { name as appName } from './app.json'
import HomeScreen from './src/screens/HomeScreen'

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

// AppRegistry.registerComponent(appName, () => App)
AppRegistry.registerComponent(appName, () => HomeScreen)
