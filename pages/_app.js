import React from 'react'
import App from 'next/app'
import Head from 'next/head'

import { appWithTranslation } from '../i18n'

import '../styles/app.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
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
