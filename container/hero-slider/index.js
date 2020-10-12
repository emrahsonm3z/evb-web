import React from 'react'
import PropTypes from 'prop-types'
import Flickity from 'react-flickity-component'
import cn from 'classnames'

import styles from './index.module.css'
import { withTranslation, Trans } from '../../i18n'
import { HERO_SLIDER_ITEMS } from '../../constants'

function HeroSlider({ t }) {
  const flickityOptions = {
    accessibility: true,
    prevNextButtons: true,
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
    pauseAutoPlayOnHover: false,
    selectedAttraction: 0.01,
    friction: 0.15
  }
  return (
    <Flickity
      className={styles['hero-slider']}
      elementType={'div'}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      {HERO_SLIDER_ITEMS.map((item) => (
        <div
          key={item.id}
          className={cn([styles['carousel-cell'], styles[item.className]])}
        >
          <div className={styles.overlay}></div>
          <div className={cn(['container', styles.inner])}>
            <h1 className={styles.title}>
              <Trans components={{ b: <b /> }}>
                {t(`Hero.Items.${item.id}.Title`)}
              </Trans>
            </h1>
            <button className={styles.btn}>
              {t(`Hero.Items.${item.id}.Button`)}
            </button>
          </div>
        </div>
      ))}
    </Flickity>
  )
}

HeroSlider.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

HeroSlider.propTypes = {
  t: PropTypes.func.isRequired
}
export default withTranslation('common')(HeroSlider)
