import * as React from 'react'

const Layout = ({ title, children }) => (
  <html lang="tr">
    <head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </head>
    <body>
      <h1>{title}</h1>
      <div>
        {children}
        <p>evb.com.tr</p>
      </div>
    </body>
  </html>
)

export default Layout
