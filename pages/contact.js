import Layout from '../components/layout'
import cn from 'classnames'

import styles from './contact.module.css'
import Locations from '../container/locations'

const Contact = () => (
  <Layout>
    <section className={cn([styles.section, styles.location])}>
      <Locations />
    </section>
  </Layout>
)

export default Contact
