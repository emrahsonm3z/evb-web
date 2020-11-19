import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { animateScroll as scroll } from 'react-scroll'
import { useRouter } from 'next/router'

import styles from './index.module.css'

import { withTranslation } from '../../i18n'

import { CONTACT_INFORMATIONS, SOCIAL_MEDIAS } from '../../constants'
import { Download } from '../icons'

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
                    <img
                      alt="Evb enerji ve bilişim"
                      src="/assets/logo-white.png"
                    ></img>
                  </a>
                </Link>
              ) : (
                <Link href="/">
                  <a>
                    <img
                      alt="Evb enerji ve bilişim"
                      src="/assets/logo-white.png"
                    ></img>
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
                <div className={styles.info}>
                  <Download />
                  <a
                    href="docs/ilgili-kisi-basvuru-form.docx"
                    download={`EVB ENERJİ VE BİLİŞİM  - ${t(
                      'ContactApplicationForm'
                    )}.docx`}
                    className={styles['contact-apply-form']}
                  >
                    {t('ContactApplicationForm')}
                  </a>
                </div>
              </div>
            </div>
            <ul className={styles.socialMedias}>
              {SOCIAL_MEDIAS.map((media) => (
                <li key={media.Title}>
                  <a href={media.Url} title={media.Title} target="_blank">
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
            {t('Copyright')} © EVB ENERJİ VE BİLİŞİM evb.com.tr
          </span>
          <span className={styles['bottom-text']}>
            <Link href="/term-of-use">
              <a>{t('TermOfUse')}</a>
            </Link>{' '}
            {t('and')}{' '}
            <Link href="/privacy-policy">
              <a>{t('PrivacyPolicy')}</a>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Footer)
