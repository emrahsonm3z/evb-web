import React from 'react'
import cn from 'classnames'
import styles from './index.module.css'
import { LogoWhite } from '../logo'
import { Envelope, Fax, Location, Phone } from '../icons'
import { Facebook, Instagram, Twitter, Linkedin } from '../icons/social-media'

const footerInfos = [
  {
    Id: 1,
    Icon: <Location />,
    Text: '1474 sok. No:11 35220 Alsancak İZMİR'
  },
  {
    Id: 2,
    Icon: <Envelope />,
    Text: 'info@itsbilisim.com'
  },
  {
    Id: 3,
    Icon: <Phone />,
    Text: ' 0 (232) 488-21-00'
  },
  {
    Id: 4,
    Icon: <Fax />,
    Text: '0 (232) 488-21-01'
  }
]

const socialMedias = [
  {
    Title: 'facebook',
    Url: '#',
    Icon: <Facebook />
  },
  {
    Title: 'instagram',
    Url: '#',
    Icon: <Instagram />
  },
  {
    Title: 'twitter',
    Url: '#',
    Icon: <Twitter />
  },
  {
    Title: 'linkedin',
    Url: '#',
    Icon: <Linkedin />
  }
]

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.body}>
            <div className={styles.left}>
              <div className={styles.logo}>
                <LogoWhite />
              </div>
              <div className={styles.infos}>
                {footerInfos.map((item) => (
                  <div className={styles.info} key={item.Id}>
                    {item.Icon}
                    <span>{item.Text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.right}>
              <ul className={styles.socialMedias}>
                {socialMedias.map((media) => (
                  <li key={media.Title}>
                    <a href={media.Url}>{media.Icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          <span>Copyright © EVB ENERJİ evb.com.tr</span>
          <span>Datenschutzerklärung</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
