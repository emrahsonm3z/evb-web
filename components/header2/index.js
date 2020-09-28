import React, { useEffect, useState } from 'react'
import cn from 'classnames'
import styles from './index.module.css'
import { Languages, Menui18nPrefix } from '../../constants'
import { i18n, withTranslation } from '../../i18n'

const menu = [
  {
    id: 'menu-item-475',
    text: 'OurServices',
    href: '#ourservices'
  },
  {
    id: 'menu-item-477',
    text: 'Faqs',
    href: '#faqs'
  },
  {
    id: 'menu-item-478',
    text: 'Contact',
    href: '/contact'
  },
  {
    id: 'menu-item-479',
    text: 'Apply',
    href: '/apply',
    primary: true
  }
]

function Header2({ t }) {
  const [scrolled, setScrolled] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [language, setLanguage] = useState(i18n.language)

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

  const changeLanguage = (e) => {
    const lang = e.target.value
    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

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
                      item.primary ? styles.primary : '',
                      'menu-item-type-custom',
                      'menu-item-object-custom',
                      item.id
                    ])}
                  >
                    <a className={cn([styles['menu-link']])} href={item.href}>
                      <span className={styles['mask-lnk']}>
                        {t(`${Menui18nPrefix}.${item.text}`)}
                      </span>
                      <span
                        className={cn([
                          styles['mask-lnk'],
                          styles['mask-lnk-hover']
                        ])}
                      >
                        {t(`${Menui18nPrefix}.${item.text}`)}
                      </span>
                    </a>
                  </li>
                ))}

                <li
                  className={cn([
                    styles['menu-item'],
                    styles['lang'],
                    'menu-item-type-custom',
                    'menu-item-object-custom'
                  ])}
                >
                  <div className={styles['radio-tile-group']}>
                    {Languages.map((item) => (
                      <div
                        key={item.lang}
                        className={styles['input-container']}
                      >
                        <input
                          id={item.lang}
                          value={item.lang}
                          className={styles['radio-button']}
                          type="radio"
                          name="lang"
                          defaultChecked={language == item.lang}
                          onClick={changeLanguage}
                        />
                        <div className={styles['radio-tile']}>{item.icon}</div>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default withTranslation('common')(Header2)
