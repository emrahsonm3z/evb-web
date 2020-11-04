import cn from 'classnames'

import styles from './apply.module.css'
import ApplyForm from '../container/apply-form3'

const Apply = () => (
  <>
    <section className={cn([styles.section, styles['apply-form']])}>
      <ApplyForm />
    </section>
  </>
)

Apply.getInitialProps = async () => ({
  namespacesRequired: ['common', 'validation', 'documents']
})

export default Apply
