import React, { useRef, useState } from 'react'
import cn from 'classnames'

import { i18n, withTranslation } from '../../i18n'
import { useDetectOutsideClick } from '../../utils/useDetectOutsideClick'
import styles from './index.module.css'
import headerStyles from '../header/index.module.css'

import { Languages } from '../../constants'

function LanguageSelect({ t }) {
  const [language, setLanguage] = useState(Languages[0])

  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  const onClick = () => setIsActive(!isActive)

  const selectLanguage = (l) => {
    setLanguage(l)
    i18n.changeLanguage(l.lang)
    setIsActive(false)
  }

  return (
    <div className={styles.dropdown}>
      <div className={headerStyles.topbarItem}>
        <div
          onClick={onClick}
          className={cn([styles.btnDropdown, isActive ? styles.selected : styles.unselected])}
        >
          {language.icon}
        </div>
      </div>
      <div
        ref={dropdownRef}
        className={cn([
          styles.dropdownMenu,
          styles.dropdownMenuAnim,
          styles.dropdownMenuRight,
          isActive ? styles.active : styles.inactive
        ])}
      >
        <ul className={styles.navi}>
          {Languages.map((l) => (
            <li className={styles.naviItem} key={l.lang}>
              <a className={styles.naviLink} onClick={() => selectLanguage(l)}>
                <span className={styles.dropdownItemSymbol}>{l.icon}</span>
                <span className={styles.dropdownItemText}>{t(l.text)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default withTranslation('common')(LanguageSelect)
