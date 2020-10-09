import React from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../../i18n'

import styles from './index.module.css'

function Expectations({ t }) {
  return (
    <div className={styles.block}>
      <div className="container">
        <div className={styles.body}>
          <div className={styles.content}>
            <h2>{t('Expectations.Title')}</h2>
            <span>{t('Expectations.Content')}</span>
            <ul>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <li key={item}>
                  <span>{t(`Expectations.Items.${item}`)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.img}>
            <img src="assets/hearings_scaled.jpg"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

Expectations.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Expectations.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Expectations)
