import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

import Figure from '../../components/figure'
import SubTitle from '../../components/title/subtitle'
import { withTranslation, i18n } from '../../i18n'

import { OFFICES } from '../../constants'

function OfficeAddresses({ t, lang }) {
  const [locale, setLocale] = useState(lang)
  useEffect(() => {
    setLocale(i18n.language)
  }, [i18n.language])

  return (
    <div className="container">
      <SubTitle title={t('OurOffices')} />
      <div className={styles.grid}>
        {OFFICES.map((office) => (
          <div key={office.city[locale]} className={styles.item}>
            <div className={styles.content}>
              <Figure
                src={office.bg}
                title={office.city[locale]}
                alt={office.city[locale]}
                address={office.address}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

OfficeAddresses.getInitialProps = async () => {
  return {
    namespacesRequired: ['common']
  }
}

OfficeAddresses.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(OfficeAddresses)
