import PropTypes from 'prop-types'
import { i18n, withTranslation } from '../i18n'

const Homepage = ({ t }) => (
  <>
    <main>
      <div>
        <button
          type="button"
          onClick={() =>
            i18n.changeLanguage(i18n.language === 'de' ? 'tr' : 'de')
          }
        >
          {t('change-locale')}
        </button>
      </div>
    </main>
  </>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Homepage)
