require('dotenv').config()

const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths
  },
  images: {
    domains: ['https://evb.vercel.app/assets/', 'http://localhost:3000/assets/']
  }
}
