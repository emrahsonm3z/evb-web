import PropTypes from 'prop-types'
import cn from 'classnames'
import { withTranslation } from '../i18n'
import styles from './document.module.css'
import { PrivacyPolicyDocument } from '../container/documents'
import Meta from '../components/meta'
import { HOST_URL } from '../constants'

const PrivacyPolicy = ({ t }) => (
  <>
    <Meta
      title={t('PrivacyPolicy.Title', { ns: 'page_info' })}
      desc={t('PrivacyPolicy.Description', { ns: 'page_info' })}
      canonical={`${HOST_URL}/privacy-policy`}
    />
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
  namespacesRequired: ['page_info', 'documents', 'common']
})

PrivacyPolicy.prototype = {
  t: PropTypes.func.isRequired
}

export default withTranslation(['documents', 'page_info', 'common'])(
  PrivacyPolicy
)
