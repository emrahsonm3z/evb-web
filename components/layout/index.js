import React from 'react'
import Footer from '../footer'
import Header from '../header'
import ScrollToTop from '../scrollToTop'

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout
