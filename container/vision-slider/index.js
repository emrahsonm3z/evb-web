import React from 'react'
import PropTypes from 'prop-types'
import Flickity from 'react-flickity-component'
import cn from 'classnames'

import styles from './index.module.css'
import { withTranslation, Trans } from '../../i18n'

function VisionSlider({ t }) {
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
    autoPlay: 5000,
    selectedAttraction: 0.2,
    friction: 0.8
  }
  return (
    <div className={cn(['container', styles.vision])}>
      <div className={styles.info}>
        <Trans components={{ p: <p />, b: <b /> }}>
          {t('VisionContainer.Info')}
        </Trans>
      </div>
      <Flickity
        className={styles['vision-slider']}
        elementType={'div'}
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {Array.from({ length: 8 }, (_, i) => i + 1).map((c) => (
          <div key={c} className={styles['carousel-cell']}>
            <div className={cn([styles.inner, styles.centered])}>
              {/* <h2>{t(`VisionContainer.Items.${c}.Title`)}</h2> */}
              <Trans components={{ span: <span />, h3: <h3 /> }}>
                {t(`VisionContainer.Items.${c}.Content`)}
              </Trans>
            </div>
          </div>
        ))}
        {/* <div className={styles['carousel-cell']}>
          <div className={cn([styles.inner])}>
            <h2>{t(`VisionContainer.Items.2.Title`)}</h2>
            <Trans components={{ span: <span />, h3: <h3 /> }}>
              {t(`VisionContainer.Items.2.Content`)}
            </Trans>
          </div>
        </div>
        <div className={styles['carousel-cell']}>
          <div className={cn([styles.inner, styles.centered])}>
            <h2>{t(`VisionContainer.Items.1.Title`)}</h2>
            <Trans components={{ span: <span />, h3: <h3 /> }}>
              {t(`VisionContainer.Items.1.Content`)}
            </Trans>
          </div>
        </div>
        <div className={styles['carousel-cell']}>
          <div className={cn([styles.inner])}>
            <h2>{t(`VisionContainer.Items.3.Title`)}</h2>
            <Trans components={{ span: <span />, h3: <h3 /> }}>
              {t(`VisionContainer.Items.3.Content`)}
            </Trans>
          </div>
        </div> */}
      </Flickity>
    </div>
  )
}

VisionSlider.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

VisionSlider.propTypes = {
  t: PropTypes.func.isRequired
}
export default withTranslation('common')(VisionSlider)
