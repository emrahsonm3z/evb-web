import React, { useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'

import styles from './index.module.css'

import ArrowTop from '../icons/ArrowTop'

function ScrollToTop() {
  useEffect(() => {
    let body = document.body

    const handleScroll = () => {
      if (window.pageYOffset > 100) body.setAttribute('data-scrolltop', 'on')
      else body.setAttribute('data-scrolltop', 'off')
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      id="scrolltop"
      className={styles.scrolltop}
      onClick={() => {
        scroll.scrollToTop()
      }}
    >
      <span className={styles['svg-icon']}>
        <ArrowTop />
      </span>
    </div>
  )
}

export default ScrollToTop
