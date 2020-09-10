import PropTypes from 'prop-types'
import { i18n, withTranslation } from '../i18n'
import Layout from '../components/layout'

import styles from './index.module.css'

const Homepage = ({ t }) => (
  <Layout>
    <div className={styles.body}>
      <button
        type="button"
        onClick={() =>
          i18n.changeLanguage(i18n.language === 'de' ? 'tr' : 'de')
        }
      >
        {t('change-locale')}
      </button>
      <p>
        <b>
          This example demonstrates how to shrink a navigation bar when the user
          starts to scroll the page.
        </b>
      </p>
      <p>Scroll down this frame to see the effect!</p>
      <p>Scroll to the top to remove the effect.</p>
      <p>
        <b>Note:</b> We have also made the navbar responsive, resize the browser
        window to see the effect.
      </p>
      <p>
        Lorem ipsum dolor dummy text to enable scrolling, sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </Layout>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Homepage)
