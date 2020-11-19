import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scroller
} from 'react-scroll'
import styles from './index.module.css'
import { LANGUAGES, MENU, MENU_PREFIX } from '../../constants'
import { i18n, withTranslation } from '../../i18n'

const scrollerOptions = {
  duration: 500,
  spy: true,
  smooth: true,
  offset: -70
}

const LinkLabel = ({ text }) => (
  <>
    <span className={styles['mask-lnk']}>{text}</span>
    <span className={cn([styles['mask-lnk'], styles['mask-lnk-hover']])}>
      {text}
    </span>
  </>
)
const SectionLink = ({ to, text, onClick }) => (
  <ScrollLink
    activeClass="active"
    to={to}
    spy={scrollerOptions.spy}
    smooth={scrollerOptions.smooth}
    offset={scrollerOptions.offset}
    duration={scrollerOptions.duration}
    className={cn([styles['menu-link']])}
    onClick={onClick}
  >
    <LinkLabel text={text} />
  </ScrollLink>
)

const SectionLinkFromAnotherPage = ({ text, onClick }) => {
  return (
    <a className={cn([styles['menu-link']])} onClick={onClick}>
      <LinkLabel text={text} />
    </a>
  )
}

const NavLink = ({ to, text, onClick }) => (
  <Link href={to}>
    <a className={cn([styles['menu-link']])} onClick={onClick}>
      <LinkLabel text={text} />
    </a>
  </Link>
)

const Header = ({ t, lang }) => {
  const [isActive, setIsActive] = useState(false)
  const [language, setLanguage] = useState(lang)

  const router = useRouter()

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
        styles.fixed,
        // scrolled ? styles.fixed : '',
        isActive ? styles.active : ''
      ])}
    >
      <div className={cn([styles['head-top'], 'container'])}>
        <a
          className={styles['menu-btn']}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
        </a>
        <div className={cn([styles.logo, styles['hover-masks-logo']])}>
          {router.pathname == '/' ? (
            <Link href="">
              <a
                onClick={() => {
                  setIsActive(false)
                  scroll.scrollToTop()
                }}
              >
                <img alt="Evb enerji ve bilişim" src="/assets/logo.png"></img>
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a
                onClick={() => {
                  setIsActive(false)
                }}
              >
                <img alt="Evb enerji ve bilişim" src="/assets/logo.png"></img>
              </a>
            </Link>
          )}
        </div>
        <div className={cn([styles['top-menu'], styles['hover-masks']])}>
          <div className={styles['top-menu-nav']}>
            <div className="menu-topmenuonepage-container">
              <ul id="menu-topmenuonepage" className={styles.menu}>
                {MENU.map((item) => (
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
                    {item.isSection &&
                      (router.pathname == '/' ? (
                        <SectionLink
                          to={item.href}
                          text={t(`${MENU_PREFIX}.${item.text}`)}
                          onClick={() => {
                            setIsActive(false)
                          }}
                        />
                      ) : (
                        <SectionLinkFromAnotherPage
                          text={t(`${MENU_PREFIX}.${item.text}`)}
                          onClick={() => {
                            router.push('/').then(() => {
                              setIsActive(false)
                              scroller.scrollTo(item.href, {
                                ...scrollerOptions
                              })
                            })
                          }}
                        />
                      ))}

                    {!item.isSection && (
                      <NavLink
                        to={item.href}
                        text={t(`${MENU_PREFIX}.${item.text}`)}
                        onClick={() => {
                          setIsActive(false)
                        }}
                      />
                    )}
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
                    {LANGUAGES.map((item) => (
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

Header.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Header.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Header)
