import Layout from '../components/layout'

import styles from './index.module.css'

import HeroSlider from '../container/hero-slider'
import VisionSlider from '../container/vision-slider'
import Parallax from '../container/parallax'
import Tasks from '../container/tasks'
import MoreThanAJob from '../container/more-than-a-job'
import IntensiveTraining from '../container/intensive-training'
import Team from '../container/team'
import FaqSlider from '../container/faq-slider'
import Expectations from '../container/expectations'

const Homepage = () => (
  <Layout>
    <section className={styles.section}>
      <HeroSlider />
    </section>
    <section className={styles.section}>
      <VisionSlider />
    </section>
    <section className={styles.section}>
      <Parallax />
    </section>
    <section className={styles.section} id="ourservices">
      <Tasks />
    </section>
    <section className={styles.section}>
      <MoreThanAJob />
    </section>
    <section className={styles.section}>
      <IntensiveTraining />
    </section>
    <section className={styles.section}>
      <Team />
    </section>
    <section className={styles.section} id="faqs">
      <FaqSlider />
    </section>
    <section className={styles.section}>
      <Expectations />
    </section>
  </Layout>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'documents']
})

export default Homepage
