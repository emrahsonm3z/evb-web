import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import 'flickity/css/flickity.css'

import '../styles/app.css'

import { appWithTranslation } from '../i18n'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (appContext) => {
  return {
    ...(await App.getInitialProps(appContext))
  }
}

export default appWithTranslation(MyApp)
