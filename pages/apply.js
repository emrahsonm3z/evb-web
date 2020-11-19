import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './apply.module.css'
import ApplyForm from '../container/apply-form'
import { withTranslation } from '../i18n'
import Meta from '../components/Meta'
import { HOST_URL } from '../constants'

const Apply = ({ t }) => (
  <>
    <Meta
      title={t('Apply.Title')}
      desc={t('Apply.Description')}
      canonical={`${HOST_URL}/apply`}
    />
    <section className={cn([styles.section, styles['apply-form']])}>
      <ApplyForm />
    </section>
  </>
)

Apply.getInitialProps = async () => ({
  namespacesRequired: ['page_info', 'common', 'validation', 'documents']
})

Apply.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('page_info')(Apply)
