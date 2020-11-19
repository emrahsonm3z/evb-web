import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../../i18n'

import styles from './index.module.css'

function IntensiveTraining({ t }) {
  return (
    <div className="container">
      <div className={styles.block}>
        <div className={styles.content}>
          <h3 className={styles.title}>{t('IntensiveTraining.Title')}</h3>
          <br />
          <p>{t('IntensiveTraining.Content')}</p>
        </div>
        <div className={styles.img}>
          <img
            alt={t('IntensiveTraining.Title')}
            src="assets/service.jpg"
          ></img>
        </div>
      </div>
    </div>
  )
}

IntensiveTraining.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

IntensiveTraining.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(IntensiveTraining)
