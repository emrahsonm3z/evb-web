import React from 'react'
import cn from 'classnames'
import styles from './index.module.css'

import Figure from '../../components/figure'
import SubTitle from '../../components/title/subtitle'
import { withTranslation } from '../../i18n'

const OFFICES = [
  {
    city: 'izmir (merkez ofis)',
    address: '1474 Sokak No: 11 Alsancak',
    tel: '0(232) 488-21-00',
    email: 'info@itsbilisim.com',
    bg: '/assets/izmir.jpg'
  },
  {
    city: 'ankara',
    address:
      'Eskişehiryolu Dumlupınar Blv 6a Armada İş Merkezi Kat: 15 Daire: 23 Yenimahalle',
    bg: '/assets/ankara.jpg'
  },
  {
    city: 'antalya',
    address: 'Etiler, 829. Sk. D:No: 3 701/702, 07010 Muratpaşa',
    bg: '/assets/antalya.jpg'
  },
  {
    city: 'istanbul (anadolu)',
    address:
      'Aydınevler Mahallesi, Centrum Plaza, Sanayi Cd. No: 1 D:B Blok, 34854 Maltepe',
    bg: '/assets/istanbul-anadolu.jpg'
  },
  {
    city: 'istanbul (avrupa)',
    address: 'Gülbahar, Harman Yolu Üst Sokağı No: 4/3, 34394 Şişli',
    bg: '/assets/istanbul-avrupa.jpg'
  }
]

function OfficeAddresses({ t }) {
  return (
    <div className="container">
      <SubTitle title={t('OurOffices')} />
      <div className={styles.grid}>
        {OFFICES.map((office) => (
          <div key={office.city} className={styles.item}>
            <div className={styles.content}>
              <Figure
                src={office.bg}
                title={office.city}
                address={office.address}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default withTranslation('common')(OfficeAddresses)
