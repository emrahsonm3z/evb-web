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

// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await App.getInitialProps(appContext)
//   const defaultProps = appContext.Component.defaultProps
//   return {
//     ...appProps,
//     pageProps: {
//       namespacesRequired: [
//         ...(appProps.pageProps.namespacesRequired || []),
//         ...(defaultProps?.i18nNamespaces || [])
//       ]
//     }
//   }
// }

// MyApp.getInitialProps = async ({ Component, appContext }) => {
//   let pageProps = {} // This is how pages will get their own getinitialprops
//   if (Component.getInitialProps) {
//     pageProps = await App.getInitialProps(appContext)
//   }

//   // If a page does not have namespacesRequired set, add one in with an empty array
//   /* we could also just check if pageProps.i18n exists, if it exists it means the page is wrapped with the withTranslation() HOC.
//      But in the case where the withTranslation() HOC is declared and namespacesRequired is not set, we still dont want all namespaces to be loaded. */
//   if (!pageProps.namespacesRequired) {
//     pageProps.namespacesRequired = []
//   }
//   return { pageProps }
// }

export default appWithTranslation(MyApp)
