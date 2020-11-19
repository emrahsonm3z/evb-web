import PropTypes from 'prop-types'
import cn from 'classnames'
import { withTranslation } from '../i18n'
import styles from './document.module.css'

import { TermOfUseDocument } from '../container/documents'
import Meta from '../components/meta'
import { HOST_URL } from '../constants'

const TermOfUse = ({ t }) => (
  <>
    <Meta
      title={t('TermOfUse.Title', { ns: 'page_info' })}
      desc={t('TermOfUse.Description', { ns: 'page_info' })}
      canonical={`${HOST_URL}/term-of-use`}
    />
    <section className={cn([styles.section, styles['document']])}>
      <h1 className={styles.title}>{t('TermOfUse.Title')}</h1>
      <h3 className={styles.subtitle}>
        {`${t('UpdatedAt', { ns: 'common' })}: ${t('TermOfUse.UpdatedAt')}`}
      </h3>
      <div className={cn(['container', styles.content])}>
        <TermOfUseDocument />
      </div>
    </section>
  </>
)

TermOfUse.getInitialProps = async () => ({
  namespacesRequired: ['page_info', 'documents', 'common']
})

TermOfUse.prototype = {
  t: PropTypes.func.isRequired
}

export default withTranslation(['documents', 'page_info', 'common'])(TermOfUse)
