import React from 'react'
import PropTypes from 'prop-types'
import Flickity from 'react-flickity-component'
import cn from 'classnames'

import styles from './index.module.css'
import { withTranslation, Trans } from '../../i18n'
import Card from '../../components/card'
import SubTitle from '../../components/title/subtitle'
import { FAQS_SLIDER_ITEMS } from '../../constants'

function FaqSlider({ t }) {
  const flickityOptions = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: false,
    setGallerySize: false,
    contain: true,
    groupCells: '100%',
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15
    },
    autoPlay: 5000,
    selectedAttraction: 0.01,
    friction: 0.15
  }

  return (
    <div className={cn(['container', styles.faq])}>
      <SubTitle title={t('Menu.Faqs')} />
      <Flickity
        className={styles['faq-slider']}
        elementType={'div'}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {FAQS_SLIDER_ITEMS.map((item) => (
          <div key={item.id} className={styles['carousel-cell']}>
            <Card
              className={item.className}
              title={t(`Faqs.Items.${item.id}.Title`)}
            >
              <Trans components={{ span: <span /> }}>
                {t(`Faqs.Items.${item.id}.Content`)}
              </Trans>
            </Card>
          </div>
        ))}
      </Flickity>
    </div>
  )
}

FaqSlider.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

FaqSlider.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(FaqSlider)
