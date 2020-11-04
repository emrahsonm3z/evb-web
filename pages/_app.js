import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import nextCookie from 'next-cookies'

import 'flickity/css/flickity.css'

import '../styles/app.css'

import { appWithTranslation } from '../i18n'
import { I18N_INITIAL_LANG, I18N_NAME } from '../constants'
import Layout from '../components/layout'

function MyApp({ Component, pageProps, default_lang }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Layout lang={default_lang} {...pageProps}>
        <Component {...pageProps} lang={default_lang} />
      </Layout>
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  return {
    ...(await App.getInitialProps(appContext)),
    default_lang: nextCookie(appContext.ctx)[I18N_NAME] || I18N_INITIAL_LANG
  }
}

export default appWithTranslation(MyApp)
