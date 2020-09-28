const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

const option = {
  defaultLanguage: 'tr',
  otherLanguages: ['de'],
  fallbackLng: 'tr',
  defaultNS: 'common',
  localeSubpaths,
  localePath: path.resolve('./public/static/locales'),
  serverLanguageDetection: false,
  detection: {
    order: ['cookie'],
    lookupCookie: 'lang',
    caches: ['cookie'],
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
