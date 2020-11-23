import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import styles from './index.module.css'

import Loading from '../components/loader'
import HeroSlider from '../container/hero-slider'
import VisionSlider from '../container/vision-slider'
// import Parallax from '../container/parallax'
// import Tasks from '../container/tasks'
// import MoreThanAJob from '../container/more-than-a-job'
// import IntensiveTraining from '../container/intensive-training'
// import Team from '../container/team'
// import FaqSlider from '../container/faq-slider'
// import Expectations from '../container/expectations'
import Meta from '../components/meta'
import { withTranslation } from '../i18n'
import { HOST_URL } from '../constants'

const Parallax = dynamic(() => import('../container/parallax'), {
  loading: () => <Loading />,
  ssr: false
})
const Tasks = dynamic(() => import('../container/tasks'), {
  loading: () => <Loading />,
  ssr: false
})

const MoreThanAJob = dynamic(() => import('../container/more-than-a-job'), {
  loading: () => <Loading />,
  ssr: false
})

const IntensiveTraining = dynamic(() => import('../container/parallax'), {
  loading: () => <Loading />,
  ssr: false
})

const Team = dynamic(() => import('../container/team'), {
  loading: () => <Loading />,
  ssr: false
})

const FaqSlider = dynamic(() => import('../container/faq-slider'), {
  loading: () => <Loading />,
  ssr: false
})

const Expectations = dynamic(() => import('../container/expectations'), {
  loading: () => <Loading />,
  ssr: false
})

const Homepage = ({ t, lang }) => (
  <>
    <Meta
      title={t('Home.Title')}
      desc={t('Home.Description')}
      canonical={`${HOST_URL}`}
    />
    <section className={styles.section}>
      <HeroSlider />
    </section>
    <section className={styles.section}>
      <VisionSlider />
    </section>
    <section className={styles.section}>
      <Parallax lang={lang} />
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
  </>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['page_info', 'common', 'documents']
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('page_info')(Homepage)
