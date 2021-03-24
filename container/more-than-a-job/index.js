import React from 'react'
import PropTypes from 'prop-types'

import { Trans, withTranslation } from '../../i18n'

import styles from './index.module.css'

function MoreThanAJob({ t }) {
  return (
    <div className="container">
      <div className={styles.block}>
        <div className={styles.imgBlock}>
          <div className={styles.img}>
            <img alt={t('MoreThanAJob.Title')} src="assets/evb-cat.jpg" />
          </div>
          <div className={styles.img}>
            <img alt={t('MoreThanAJob.Title')} src="assets/trekking.jpg" />
          </div>
          <div className={styles.img}>
            <img alt={t('MoreThanAJob.Title')} src="assets/cyclin-tour.jpg" />
          </div>

          <div className={styles.img}>
            <img
              alt={t('MoreThanAJob.Title')}
              src="assets/new-year-party.jpg"
            />
          </div>
        </div>
        <div className={styles.text}>
          <h3 className={styles.title}>{t('MoreThanAJob.Title')}</h3>
          <Trans
            components={{
              p: <p />,
              strong: <strong />
            }}
          >
            {t('MoreThanAJob.Content')}
          </Trans>
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
