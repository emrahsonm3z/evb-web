import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../../i18n'

import styles from './index.module.css'

function MoreThanAJob({ t }) {
  return (
    <div className="container">
      <div className={styles.block}>
        <div className={styles.img}>
          <img src="assets/yoga.jpg"></img>
        </div>
        <div className={styles.img}>
          <img src="assets/office_taco_party.jpg"></img>
        </div>
        <div className={styles.text}>
          <h2>{t('MoreThanAJob.Title')}</h2>
          <p>{t('MoreThanAJob.Content')}</p>
        </div>
      </div>
    </div>
  )
}

MoreThanAJob.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

MoreThanAJob.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(MoreThanAJob)
