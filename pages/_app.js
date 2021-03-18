import React, { useState } from 'react'
import App from 'next/app'
import nextCookie from 'next-cookies'

import 'flickity/css/flickity.css'

import '../styles/app.css'
import '../styles/utilities.css'

import { appWithTranslation } from '../i18n'
import { I18N_INITIAL_LANG, I18N_NAME } from '../constants'
import Layout from '../components/layout'
import GlobalContext from '../store'

function MyApp({ Component, pageProps }) {
  const { defaultLang } = pageProps
  const [language, setLanguage] = useState(defaultLang)
  const value = { language, setLanguage }

  return (
    <GlobalContext.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  return {
    ...(await App.getInitialProps(appContext)),
    pageProps: {
      defaultLang: nextCookie(appContext.ctx)[I18N_NAME] || I18N_INITIAL_LANG
    }
  }
}

export default appWithTranslation(MyApp)
