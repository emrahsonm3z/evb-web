import React from 'react'
import Link from 'next/router'
import cn from 'classnames'
import styles from './index.module.css'

function Logo({ reverse = false, href, onClick, className }) {
  return (
    <Link href={href}>
      <a onClick={onClick} className={cn([styles.logo, className])}>
        <img
          alt="Evb enerji ve bilişim"
          src={!reverse ? '/assets/logo.png' : '/assets/logo-white.png'}
        ></img>
      </a>
    </Link>
  )
}

export default Logo
