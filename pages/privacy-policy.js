import PropTypes from 'prop-types'
import cn from 'classnames'
import { withTranslation } from '../i18n'
import styles from './document.module.css'
import { PrivacyPolicyDocument } from '../container/documents'

const PrivacyPolicy = ({ t }) => (
  <>
    <section className={cn([styles.section, styles['document']])}>
      <h1 className={styles.title}>{t('PrivacyPolicy.Title')}</h1>
      <h3 className={styles.subtitle}>
        {`${t('UpdatedAt', { ns: 'common' })}: ${t('PrivacyPolicy.UpdatedAt')}`}
      </h3>
      <div className={cn(['container', styles.content])}>
        <PrivacyPolicyDocument />
      </div>
    </section>
  </>
)

PrivacyPolicy.getInitialProps = async () => ({
  namespacesRequired: ['documents', 'common']
})

PrivacyPolicy.prototype = {
  t: PropTypes.func.isRequired
}

export default withTranslation(['documents', 'common'])(PrivacyPolicy)
