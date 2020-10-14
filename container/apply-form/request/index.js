import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { withTranslation } from '../../../i18n'
import { Checkmark } from '../../../components/icons'

import styles from './index.module.css'

function ApplyFormRequest({ t, form }) {
  return (
    <div className={styles.block}>
      <Checkmark className={styles.icon} />
      <span className={styles.title}>Başvurunuz başarıyla alınmıştır</span>
      <Link href="/">
        <a className={styles['back-to-home']}>Anasayfaya dön</a>
      </Link>
    </div>
  )
}

ApplyFormRequest.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(ApplyFormRequest)
