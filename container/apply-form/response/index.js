import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { withTranslation } from '../../../i18n'
import { Checkmark } from '../../../components/icons'

import styles from './index.module.css'

function ApplyFormResponse({ t }) {
  return (
    <div className={styles.block}>
      <Checkmark className={styles.icon} />
      <span className={styles.title}>
        {t('ApplicationHasBeenSuccessfully')}
      </span>
      <Link href="/">
        <a className={styles['back-to-home']}>{t('ReturnToHomepage')}</a>
      </Link>
    </div>
  )
}

ApplyFormResponse.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(ApplyFormResponse)
