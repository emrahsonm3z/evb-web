import React from 'react'
import { withTranslation } from '../../i18n'
import styles from './index.module.css'

import * as Icons from '../icons/flags'

function LanguageSelect() {
  return (
    <ul className={styles.lang}>
      <li>
        <a>
          <Icons.Turkey />
        </a>
      </li>
      <li>
        <a>
          <Icons.Germany />
        </a>
      </li>
      <li>
        <a>
          <Icons.Us />
        </a>
      </li>
    </ul>
  )
}
function LanguageSelect({ t }) {
  return (
    <div className={styles.dropdown}>
      <div className={styles.topbarItem}></div>
      <div className={styles.dropdownItem}></div>
    </div>
  )
}

export default withTranslation('common')(LanguageSelect)
