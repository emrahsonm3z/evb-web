import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './index.module.css'

const menu = [
  {
    id: 'menu-item-474',
    text: 'Home'
  },
  {
    id: 'menu-item-475',
    text: 'Resume'
  },
  {
    id: 'menu-item-476',
    text: 'Works'
  },
  {
    id: 'menu-item-477',
    text: 'Blog'
  },
  {
    id: 'menu-item-478',
    text: 'Contacts'
  }
]

function Header2() {
  const [scrolled, setScrolled] = useState(false)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) setScrolled(true)
      else setScrolled(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      id="header"
      className={cn([
        styles.header,
        scrolled ? styles.fixed : '',
        isActive ? styles.active : ''
      ])}
    >
      <div className={cn([styles['head-top'], 'container'])}>
        <a
          href="#"
          className={styles['menu-btn']}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
        </a>
        <div className={cn([styles.logo, styles['hover-masks-logo']])}>
          <a href="/">
            <img src="/assets/logo.png"></img>
          </a>
        </div>
        <div className={cn([styles['top-menu'], styles['hover-masks']])}>
          <div className={styles['top-menu-nav']}>
            <div className="menu-topmenuonepage-container">
              <ul id="menu-topmenuonepage" className={styles.menu}>
                {menu.map((item) => (
                  <li
                    key={item.id}
                    id={item.id}
                    className={cn([
                      styles['menu-item'],
                      'menu-item-type-custom',
                      'menu-item-object-custom',
                      item.id
                    ])}
                  >
                    <a href="#section-started">
                      <span className={styles['mask-lnk']}>{item.text}</span>
                      <span
                        className={cn([
                          styles['mask-lnk'],
                          styles['mask-lnk-hover']
                        ])}
                      >
                        {item.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header2
