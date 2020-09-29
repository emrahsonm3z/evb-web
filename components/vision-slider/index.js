import React from 'react'
import Flickity from 'react-flickity-component'
import cn from 'classnames'

import styles from './index.module.css'
import { withTranslation, Trans } from '../../i18n'

const flickityOptions = {
  accessibility: true,
  prevNextButtons: false,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 50,
    x2: 60,
    y2: 45,
    x3: 15
  },
  autoPlay: 10000,
  selectedAttraction: 0.2,
  friction: 0.8
}

const visionContainer = 'VisionContainer'
const visionContainerItems = ['Vision', 'QualityPromise', 'Values']

function VisionSlider({ t }) {
  return (
    <div className={cn(['container', styles.vision])}>
      <Flickity
        className={styles['vision-slider']}
        elementType={'div'}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {visionContainerItems.map((item) => (
          <div key={item} className={styles['carousel-cell']}>
            <div className={cn([styles.inner])}>
              <i>
                <h2>{t(`${visionContainer}.${item}.Title`)}</h2>
                <Trans components={{ p: <p />, b: <b /> }}>
                  {t(`${visionContainer}.${item}.Text`)}
                </Trans>
              </i>
            </div>
          </div>
        ))}
      </Flickity>
    </div>
  )
}

export default withTranslation('common')(VisionSlider)
