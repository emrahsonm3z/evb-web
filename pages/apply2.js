import Layout from '../components/layout'
import cn from 'classnames'

import styles from './apply.module.css'
import ApplyForm from '../container/apply-form'

const Apply = () => (
  <Layout>
    <section className={cn([styles.section, styles['apply-form']])}>
      <ApplyForm />
    </section>
  </Layout>
)

Apply.getInitialProps = async () => ({
  namespacesRequired: ['common', 'validation', 'documents']
})

export default Apply
