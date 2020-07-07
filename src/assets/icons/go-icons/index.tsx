import React from 'react'
import Colors from 'themes/Colors'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import fontelloConfig from './config.json'
const CustomIcon = createIconSetFromFontello(fontelloConfig)

// comment-alt
// thumbs-up
// arrow-circle-right
export const SIZE_ICON = 20
export const COLOR_ICON = Colors.mainWhite
// newspaper

export const icCircleRight = (size?: number, color?: string) => (
  <CustomIcon
    name={'arrow-circle-right'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icCheck2 = (size?: number, color?: string) => (
  <CustomIcon
    name={'check'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icPhone = (size?: number, color?: string) => (
  <CustomIcon
    name={'phone'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icSend = (size?: number, color?: string) => (
  <CustomIcon
    name={'location-arrow'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icNewsPaper = (size?: number, color?: string) => (
  <CustomIcon
    name={'newspaper'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

// comment-dots
export const icCommentDots = (size?: number, color?: string) => (
  <CustomIcon
    name={'comment-dots'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icSearch = (size?: number, color?: string) => (
  <CustomIcon
    name={'search'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icFilter = (size?: number, color?: string) => (
  <CustomIcon
    name={'filter'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icComment = (size?: number, color?: string) => (
  <CustomIcon
    name={'comment-alt'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icLike = (size?: number, color?: string) => (
  <CustomIcon
    name={'thumbs-up'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icEvents = (size?: number, color?: string) => (
  <CustomIcon
    name={'parcel'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icMenu = (size?: number, color?: string) => (
  <CustomIcon
    name={'align-justify'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icDashboard = (size?: number, color?: string) => (
  <CustomIcon
    name={'dashboard'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icPlus = (size?: number, color?: string) => (
  <CustomIcon
    name={'plus'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icBox = (size?: number, color?: string) => (
  <CustomIcon
    name={'box'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)

export const icNotif = (size?: number, color?: string) => (
  <CustomIcon
    name={'bell'}
    size={size || SIZE_ICON}
    color={color || COLOR_ICON}
  />
)
