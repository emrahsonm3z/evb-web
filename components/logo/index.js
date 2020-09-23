import React from 'react'
import cn from 'classnames'
import styles from './index.module.css'

function Logo({ className }) {
  return (
    <div className={cn([styles.logo, className])}>
      <a href="/">
        <img src="/assets/logo.png"></img>
      </a>
    </div>
  )
}

export function LogoWhite({ className }) {
  return (
    <div className={cn([styles.logo, className])}>
      <a href="/">
        <img src="/assets/logo-white.png"></img>
      </a>
    </div>
  )
}

export default Logo
