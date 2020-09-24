import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './index.module.css'
import Logo from '../logo'
import Navigation from '../navigation'
import LanguageSelect from '../languageSelect'

function Header() {
  return (
    <div id="header" className={styles.header}>
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
