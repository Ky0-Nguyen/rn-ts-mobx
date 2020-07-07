import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Zocial from 'react-native-vector-icons/Zocial'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Colors from 'themes/Colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export * from './go-icons'

const SIZE_ICON = 20
const COLOR_ICON = Colors.mainWhite

export const icStar = (size?: number, color?: string) => (
  <AntDesign
    name={'staro'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icFlag = (size?: number, color?: string) => (
  <AntDesign
    name={'flag'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icLeaf = (size?: number, color?: string) => (
  <Entypo name={'leaf'} size={size || SIZE_ICON} color={color || COLOR_ICON} />
)

export const icEmoji = (size?: number, color?: string) => (
  <Entypo
    name={'emoji-happy'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)
export const icMoreVertical = (size?: number, color?: string) => (
  <Feather
    name={'more-vertical'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icClearAll = (size?: number, color?: string) => (
  <MaterialCommunityIcons
    name={'notification-clear-all'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icNotification = (size?: number, color?: string) => (
  <Ionicons
    name={'ios-notifications'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icYoutube = (size?: number, color?: string) => (
  <AntDesign
    name={'youtube'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icCircle = (size?: number, color?: string) => (
  <FontAwesome
    name={'circle'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icCircleSlice = (size?: number, color?: string) => (
  <MaterialCommunityIcons
    name={'circle-slice-8'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icBack = (size?: number, color?: string) => (
  <Feather
    name={'chevron-left'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icCheck = (size?: number, color?: string) => (
  <Ionicons
    name={'ios-checkmark'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
    style={{ position: 'absolute', zIndex: 1 }}
  />
)

export const icVoice = (size?: number, color?: string) => (
  <MaterialIcons
    name={'keyboard-voice'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icCall = (size?: number, color?: string) => (
  <Feather
    name={'phone'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)
export const icSquare = (size?: number, color?: string) => (
  <Ionicons
    name={'md-square'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icImage = (size?: number, color?: string) => (
  <Entypo
    name={'images'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icEmailOpen = (size?: number, color?: string) => (
  <MaterialCommunityIcons
    name={'email-open'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)
export const icPlay = (size?: number, color?: string) => (
  <FontAwesome5
    name={'play'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)
export const icEdit = (size?: number, color?: string) => (
  <MaterialIcons
    name={'edit'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icTimeOff = (size?: number, color?: string) => (
  <MaterialCommunityIcons
    name={'timer'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)
export const icTimeLine = (size?: number, color?: string) => (
  <MaterialCommunityIcons
    name={'chart-timeline'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)
export const icDirectory = (size?: number, color?: string) => (
  <Ionicons
    name={'md-bookmarks'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)
export const icProfile = (size?: number, color?: string) => (
  <AntDesign
    name={'user'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)
export const icEmail = (size?: number, color?: string) => (
  <Zocial name={'email'} size={size || SIZE_ICON} color={color || COLOR_ICON} />
)
export const icInfo = (size?: number, color?: string) => (
  <Feather name={'info'} size={size || SIZE_ICON} color={color || COLOR_ICON} />
)

export const icClose = (size?: number, color?: string) => (
  <AntDesign
    name={'close'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)
export const icCloseCirlcle = (size?: number, color?: string) => (
  <AntDesign
    name={'closecircle'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)
export const icWifiOff = (size?: number, color?: string) => (
  <MaterialIcons
    name={'portable-wifi-off'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icRight = (size?: number, color?: string) => (
  <Feather
    name={'chevron-right'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icDown = (size?: number, color?: string) => (
  <AntDesign
    name={'down'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icEye = (size?: number, color?: string) => (
  <EvilIcons name="eye" size={size || SIZE_ICON} color={color || COLOR_ICON} />
)

export const PlusIcon = ({
  size,
  color,
}: {
  size?: number
  color?: string
}) => (
  <AntDesign
    name="plus"
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  ></AntDesign>
)

export const SuccessIndicatorIcon = ({ size, color }) => (
  <Feather name="check" size={size || SIZE_ICON} color={color || COLOR_ICON} />
)

export const FileIcon = ({ size, color }) => (
  <FontAwesome
    name="file-o"
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icAccept = (size?: number, color?: string) => (
  <FontAwesome
    name={'chevron-down'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icSuccess = (size?: number, color?: string) => (
  <AntDesign
    name={'downcircleo'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icInfoCirlce = (size?: number, color?: string) => (
  <AntDesign
    name={'infocirlce'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const CheckSquared = ({ size, color = Colors.primaryColor.main }) => (
  <AntDesign
    name={'checksquare'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const CheckSquareo = ({ size, color = Colors.primaryColor.main }) => (
  <AntDesign
    name={'checksquareo'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const Intermediate = ({ size, color = Colors.primaryColor.main }) => (
  <MaterialCommunityIcons
    name={'checkbox-intermediate'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const UserDependent = ({ size, color = Colors.primaryColor.main }) => (
  <FontAwesome5
    name={'user-alt'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const UserOffBoarding = ({ size, color = Colors.primaryColor.main }) => (
  <FontAwesome5
    name={'user-minus'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)
