import PropTypes from 'prop-types'
import { StatusCodes } from 'http-status-codes'
import Link from 'next/link'
import { withTranslation } from '../i18n'

import styles from './error.module.css'
import Meta from '../components/meta'

const Error = ({ statusCode, t }) => {
  console.log('statusCode', statusCode)
  // if (StatusCodes.NOT_FOUND == statusCode) {
  //   return (
  //     <>
  //       <Meta title={t('page-notfound')} desc={t('page-notfound')} />
  //       <section className={styles.section}>
  //         <h1>{statusCode}</h1>
  //         <h3>{t('page-notfound')}</h3>
  //         <Link href="/">
  //           <a className={styles['back-to-home']}>{t('ReturnToHomepage')}</a>
  //         </Link>
  //         <img src="/assets/404.svg" alt={t('page-notfound')} />
  //       </section>
  //     </>
  //   )
  // }

  return (
    <>
      <Meta
        title={t('error-without-status')}
        desc={t('error-without-status')}
      />
      <section className={styles.section}>
        <img src="/assets/500.svg" alt={t('error-without-status')} />
        <h3>{t('error-without-status')}</h3>
        <Link href="/">
          <a className={styles['back-to-home']}>{t('ReturnToHomepage')}</a>
        </Link>
      </section>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404

  return {
    namespacesRequired: ['common'],
    statusCode
  }
}

Error.defaultProps = {
  statusCode: null
}

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Error)
