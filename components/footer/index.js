import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { animateScroll as scroll } from 'react-scroll'
import { useRouter } from 'next/router'

import styles from './index.module.css'

import { withTranslation, Trans } from '../../i18n'
import { TermOfUseModal, PrivacyPolicyModal } from '../../container/documents'

import { CONTACT_INFORMATIONS, SOCIAL_MEDIAS } from '../../constants'

function Footer({ t }) {
  const router = useRouter()

  return (
    <footer>
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.body}>
            <div className={styles.left}>
              {router.pathname == '/' ? (
                <Link href="">
                  <a
                    onClick={() => {
                      scroll.scrollToTop()
                    }}
                  >
                    <img src="/assets/logo-white.png"></img>
                  </a>
                </Link>
              ) : (
                <Link href="/">
                  <a>
                    <img src="/assets/logo-white.png"></img>
                  </a>
                </Link>
              )}
              <div className={styles.infos}>
                {CONTACT_INFORMATIONS.map((item) => (
                  <div className={styles.info} key={item.Id}>
                    <item.Icon />
                    <span>{item.Text}</span>
                  </div>
                ))}
              </div>
            </div>
            <ul className={styles.socialMedias}>
              {SOCIAL_MEDIAS.map((media) => (
                <li key={media.Title}>
                  <a href={media.Url}>
                    <media.Icon className={styles['social-icon']} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <span className={styles['bottom-text']}>
            {t('Copyright')} © EVB ENERJİ evb.com.tr
          </span>
          <span className={styles['bottom-text']}>
            <Trans
              components={{
                span: <span />,
                termofuselink: <TermOfUseModal label={t('TermOfUse')} />,
                privacypolicylink: (
                  <PrivacyPolicyModal label={t('PrivacyPolicy')} />
                )
              }}
            >
              {t('TermOfUseAndPrivacyPolicy')}
            </Trans>
          </span>
        </div>
      </div>
    </footer>
  )
}

Footer.getInitialProps = async () => ({
  namespacesRequired: ['common', 'documents']
})

Footer.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Footer)
