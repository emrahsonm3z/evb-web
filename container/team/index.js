import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { withTranslation, Trans } from '../../i18n'

import styles from './index.module.css'

function Team({ t }) {
  return (
    <div className={styles.block}>
      <div className={cn(['container', styles.content])}>
        <h2 className={styles.title}>{t('Team.Title')}</h2>
        <p>{t('Team.Content')}</p>
      </div>
    </div>
  )
}

Team.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Team.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Team)
