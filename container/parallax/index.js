import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './index.module.css'
import { withTranslation, i18n } from '../../i18n'
import { Location } from '../../components/icons'
import {
  CITIES_WE_ARE_IN,
  NUMBER_OF_EMPLOYEE,
  NUMBER_OF_CUSTOMER
} from '../../constants'

function Parallax({ t, lang }) {
  const [locale, setLocale] = useState(lang)
  useEffect(() => {
    setLocale(i18n.language)
  }, [i18n.language])

  return (
    <div className={styles.block}>
      <div className={cn(['container', styles.content])}>
        <div className={styles.item}>
          <h1>{CITIES_WE_ARE_IN[locale]?.length}</h1>
          <h2>{t('Locations')}</h2>
          <ul>
            {CITIES_WE_ARE_IN[locale]?.map((item) => (
              <li key={item}>
                <Location />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.item}>
          <h1>{NUMBER_OF_EMPLOYEE}</h1>
          <h2>{t('Employee')}</h2>
        </div>
        <div className={styles.item}>
          <h1>{NUMBER_OF_CUSTOMER}</h1>
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
