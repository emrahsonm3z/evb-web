import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

import Figure from '../../components/figure'
import SubTitle from '../../components/title/subtitle'
import { withTranslation, i18n } from '../../i18n'

import { OFFICES } from '../../constants'
import GlobalContext from '../../store'

function OfficeAddresses({ t, lang }) {
  const { language } = useContext(GlobalContext)

  return (
    <div className="container">
      <SubTitle title={t('OurOffices')} />
      <div className={styles.grid}>
        {OFFICES.map((office) => (
          <div key={office.city[language]} className={styles.item}>
            <div className={styles.content}>
              <Figure
                src={office.bg}
                title={office.city[language]}
                alt={office.city[language]}
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
