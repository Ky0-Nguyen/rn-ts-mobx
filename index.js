import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import * as moment from 'moment-timezone'
import messaging from '@react-native-firebase/messaging'
// moment.tz.setDefault('UTC')

messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage)
})

AppRegistry.registerComponent(appName, () => App)
// AppRegistry.registerHeadlessTask('RNFirebaseBackgroundNotificationAction', () => bgMessaging)
