import React from 'react'
import styles from './index.module.css'

function Logo() {
  return (
    <div className={styles.logo}>
      <a href="/">
        <img src="/assets/logo.png"></img>
      </a>
    </div>
  )
}

export default Logo
