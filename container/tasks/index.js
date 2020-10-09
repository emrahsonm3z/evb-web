import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import { withTranslation, Trans } from '../../i18n'

import styles from './index.module.css'

function Tasks({ t }) {
  return (
    <div className={cn(['container', styles.block])}>
      <div className={styles.content}>
        <h2 className={styles.title}>{t('Tasks.Title')}</h2>
        <br />
        <Trans components={{ p: <p />, b: <b /> }}>{t('Tasks.Content')}</Trans>
      </div>
    </div>
  )
}

Tasks.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Tasks.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Tasks)
