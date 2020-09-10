import React from 'react'

import styles from './index.module.css'

function Navigation() {
  return (
    <div className={styles.navbar}>
      <a href="#default" className="logo">
        CompanyLogo
      </a>
      <div className={styles.navbarRight}>
        <a className="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  )
}

export default Navigation
