// Optional flow type
// import { NotificationOpen } from 'react-native-firebase/notifications'

// type NotificationOpenType = NotificationOpen
export default async (notificationOpen) => {
  if (notificationOpen.action === 'snooze') {
    // handle the action
  }

  return Promise.resolve()
}
