import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import { lngFromReq } from 'next-i18next/dist/commonjs/utils'
import SiteConfig from '../site.config'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const lng = lngFromReq(ctx.req)
    const additionalProps = {
      lng
    }
    return { ...initialProps, ...additionalProps }
  }

  render() {
    const { lng } = this.props
    return (
      <Html
      //  lang={lng}
      >
        <Head>
          {/* base */}
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          {/* <meta name="description" content={SiteConfig.description} /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
