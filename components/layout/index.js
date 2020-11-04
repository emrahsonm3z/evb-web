import React from 'react'
import Footer from '../footer'
import Header from '../header'
import ScrollToTop from '../scrollToTop'

function Layout({ lang, children }) {
  return (
    <>
      <Header lang={lang} />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Layout
