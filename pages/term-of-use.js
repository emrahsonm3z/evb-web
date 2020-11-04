import PropTypes from 'prop-types'
import cn from 'classnames'
import { withTranslation } from '../i18n'
import styles from './document.module.css'

import { TermOfUseDocument } from '../container/documents'

const TermOfUse = ({ t }) => (
  <>
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
  namespacesRequired: ['documents', 'common']
})

TermOfUse.prototype = {
  t: PropTypes.func.isRequired
}

export default withTranslation(['documents', 'common'])(TermOfUse)
