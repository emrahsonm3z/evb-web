import PropTypes from 'prop-types'

import { withTranslation, Trans } from '../i18n'
import Layout from '../components/layout'

import styles from './index.module.css'
import HeroSlider from '../components/hero-slider'

const Homepage = ({ t }) => (
  <Layout>
    <section className={styles.section}>
      <HeroSlider />
    </section>
  </Layout>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Homepage)
