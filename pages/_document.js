import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import nextCookie from 'next-cookies'

import { lngFromReq } from 'next-i18next/dist/commonjs/utils'
import { I18N_NAME } from '../constants'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const lngCookie = nextCookie(ctx)[I18N_NAME]
    const reqLng = ctx.req.i18n ? lngFromReq(ctx.req) : ctx.req.lng
    const lng = lngCookie !== undefined ? lngCookie : reqLng

    const additionalProps = {
      lng
    }
    return { ...initialProps, ...additionalProps }
  }

  render() {
    const { lng } = this.props
    return (
      <Html lang={lng}>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
