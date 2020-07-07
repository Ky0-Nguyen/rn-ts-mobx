import { AppNavigator } from '@components/app-navigator'
import { appModel } from '@models'
import { isMountedRef, navigationRef } from '@models/navigation-store'
import { NavigationContainer } from '@react-navigation/native'
import { observer } from 'mobx-react'
import 'mobx-react-lite/batchingForReactNative'
import React, { useEffect } from 'react'

import {
  initialWindowSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'
import { notification } from 'services/notification-helpers'
import { NotificationLocalPopup } from './components/notification-local-popup'

declare const GLOBAL: any
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest
console.disableYellowBox = true

const App = observer(() => {
  useEffect(() => {
    SplashScreen.hide()
    const init = async () => {
      await appModel.localInit()
      await appModel.appConfig.setAppConfig()
      notification.notificationListener()
      notification.unsubscribe()
      isMountedRef.current = true
    }
    init()

    return () => {
      isMountedRef.current = false
      notification.unsubscribe()
    }
  }, [])

  return (
    <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
      <NotificationLocalPopup />
      <NavigationContainer
        onStateChange={(currentState) => {
          appModel.navigation.onNavigationStateChange(currentState)
        }}
        ref={navigationRef}
      >
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
})
export default App
