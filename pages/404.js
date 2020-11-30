import PropTypes from 'prop-types'
import Link from 'next/link'
import { withTranslation } from '../i18n'

import styles from './error.module.css'
import Meta from '../components/meta'

function Notfound({ t }) {
  return (
    <>
      <Meta title={t('page-notfound')} desc={t('page-notfound')} />
      <section className={styles.section}>
        <h1>404</h1>
        <h3>{t('page-notfound')}</h3>
        <Link href="/">
          <a className={styles['back-to-home']}>{t('ReturnToHomepage')}</a>
        </Link>
        <img src="/assets/404.svg" alt={t('page-notfound')} />
      </section>
    </>
  )
}

Notfound.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Notfound)
