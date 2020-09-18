import nextCookie from 'next-cookies'
import cookie from 'js-cookie'

import { Languages } from '../constants'
import { i18n } from '../i18n'

const defaultLocale = Languages[0]

export const getLocale = async (ctx) => {
  try {
    const cookieLocale = nextCookie(ctx).locale
    let locale = defaultLocale.lang

    if (cookieLocale) {
      // check if user has set locale
      locale = Languages.map((l) => l.lang).includes(cookieLocale) ? cookieLocale : defaultLocale
    } else {
      // check if user has set locale
      cookie.set('locale', locale, { expires: 365 })
    }
    return locale
  } catch (error) {
    console.error(error)
    return defaultLocale
  }
}

export const setLocale = (locale) => {
  i18n.changeLanguage(locale)
  // cookie.set('locale', locale, { expires: 365 })
}
