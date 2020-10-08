import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './index.module.css'
import { withTranslation } from '../../i18n'
import { Location } from '../icons'

function Parallax({ t }) {
  return (
    <div className={styles.parallax}>
      <div className={cn(['container', styles.parallaxContent])}>
        <div className={styles.parallaxItem}>
          <h1>5</h1>
          <h2>{t('Locations')}</h2>
          <ul>
            {[
              'İzmir',
              'İstanbul Europa',
              'İstanbul Asien',
              'Ankara',
              'Antalya'
            ].map((item) => (
              <li key={item}>
                <Location />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.parallaxItem}>
          <h1>450+</h1>
          <h2>{t('Employee')}</h2>
        </div>
        <div className={styles.parallaxItem}>
          <h1>1,5 M</h1>
          <h2>{t('ExistingCustomers')}</h2>
        </div>
      </div>
    </div>
  )
}

Parallax.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Parallax.propTypes = {
  t: PropTypes.func.isRequired
}
export default withTranslation('common')(Parallax)
