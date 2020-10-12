import React from 'react'
import Footer from '../footer'
import Header from '../header'
import ScrollToTop from '../scrollToTop'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default Layout
