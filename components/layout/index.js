import React from 'react'
import Footer from '../footer'
import Header from '../header'
import Header2 from '../header2'

function Layout({ children }) {
  return (
    <div>
      <Header2 />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
