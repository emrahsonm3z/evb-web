import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './index.module.css'
import Logo from '../logo'
import Navigation from '../navigation'
import LanguageSelect from '../languageSelect'

function Header() {
  const [scrolled, setScrolled] = useState(true)

  const headerClass = cn([styles.header, scrolled ? styles.sticky : ''])

  useEffect(() => {
    const header = document.getElementById('header')
    const sticky = header.offsetTop
    const handleScroll = () => {
      if (window.pageYOffset > sticky) {
        setScrolled(true)
      } else setScrolled(false)
    }

    window.addEventListener('scroll', handleScroll)
    return (_) => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div id="header" className={headerClass}>
      <div className={cn(['container', styles.headerContent])}>
        <div className={styles.headerLeft}>
          <Logo className={styles.logo} />
          <Navigation />
        </div>
        <div className={styles.topbar}>
          <LanguageSelect />
        </div>
      </div>
    </div>
  )
}

export default Header
