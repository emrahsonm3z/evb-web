import React from 'react'
import { withTranslation } from '../../i18n'
import { Menu, Menui18nPrefix } from '../../constants'

import styles from './index.module.css'

function Navigation({ t }) {
  return (
    <div className={styles.headerMenuWrapper}>
      <div className={styles.headerMenu}>
        <nav className={styles.menuNav}>
          {Menu.map((menuItem) => (
            <div key={menuItem} className={styles.menuItem}>
              <a href={`#${menuItem}`} className={styles.menuLink}>
                <span>{t(`${Menui18nPrefix}.${menuItem}`)}</span>
              </a>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default withTranslation('common')(Navigation)
