import React from 'react'
import cn from 'classnames'
import styles from './index.module.css'
import Logo from '../logo'
import Navigation from '../navigation'

function Header() {
  return (
    <div className={styles.header}>
      <div className={cn(['container', styles.headerContent])}>
        <div className={styles.headerLeft}>
          <Logo />
          <Navigation />
        </div>
        <div className={styles.topbar}></div>
      </div>
    </div>
  )
}

export default Header
