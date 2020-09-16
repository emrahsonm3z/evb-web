import React from 'react'
import cn from 'classnames'
import { withTranslation } from '../../i18n'
import * as Icons from '../icons/flags'
import styles from './index.module.css'
import headerStyles from '../header/index.module.css'

import { Languages } from '../../constants'

function LanguageSelect({ t }) {
  return (
    <div className={styles.dropdown}>
      <div className={headerStyles.topbarItem}>
        <div className={styles.btnDropdown}>
          <Icons.Turkey />
        </div>
      </div>
      <div className={cn([styles.dropdownMenu, styles.dropdownMenuAnim, styles.dropdownMenuRight])}>
        <ul className={styles.navi}>
          {Languages.map((lang) => (
            <li className={styles.naviItem} key={lang.text}>
              <a className={styles.naviLink}>
                <span className={styles.dropdownItemSymbol}>{lang.icon}</span>
                <span className={styles.dropdownItemText}>{t(lang.text)}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default withTranslation('common')(LanguageSelect)
