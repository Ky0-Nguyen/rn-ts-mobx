import i18n from 'i18n-js'
import * as RNLocalize from 'react-native-localize'

import en from './locales/en.json'
import jp from './locales/jp.json'
import vi from './locales/vi.json'

const locales = RNLocalize.getLocales()
if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageTag
}
i18n.fallbacks = true
i18n.translations = {
  en,
  jp,
  vi,
}
export { i18n }
