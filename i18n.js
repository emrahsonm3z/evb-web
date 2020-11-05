const NextI18Next = require('next-i18next').default
// const LanguageDetector = require('i18next-browser-languagedetector').default
// const { initReactI18next } = require('react-i18next')
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const Cookies = require('js-cookie')
const path = require('path')
const { I18N_NAME, I18N_INITIAL_LANG, LANGUAGES } = require('./constants')

const option = {
  // use: [LanguageDetector, initReactI18next],
  ignoreRoutes: ['/_next', '/static', '/public'],
  lng: Cookies.get(I18N_NAME),
  defaultLanguage: I18N_INITIAL_LANG,
  otherLanguages: LANGUAGES.filter((c) => c.lang !== I18N_INITIAL_LANG).map(
    (c) => c.lang
  ),
  fallbackLng: I18N_INITIAL_LANG,
  defaultNS: 'common',
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
  // debug: process.env.NODE_ENV === 'development',
  serverLanguageDetection: false,
  detection: {
    order: ['cookie', 'localStorage'],
    lookupCookie: I18N_NAME,
    lookupLocalStorage: I18N_NAME,
    caches: ['cookie', 'localStorage'],
    cookieExpirationDate: new Date().setMonth(new Date().getMonth() + 12),
    cookieSameSite: 'strict'
  },
  react: {
    // trigger a rerender when language is changed
    bindI18n: 'languageChanged',
    // we're NOT using suspsense to detect when the translations have loaded
    useSuspense: false
  }
}

module.exports = new NextI18Next(option)
