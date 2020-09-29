import React from 'react'
import Flickity from 'react-flickity-component'
import cn from 'classnames'

import styles from './index.module.css'
import { withTranslation, Trans } from '../../i18n'

const data = [
  {
    id: 1,
    className: 'slide1',
    subtitle: 'Slide 1',
    title: 'Flickity Parallax 1'
  },
  {
    id: 2,
    className: 'slide2',
    subtitle: 'Slide 2',
    title: 'Flickity Parallax 2'
  },
  {
    id: '3',
    className: 'slide3',
    subtitle: 'Slide 3',
    title: 'Flickity Parallax 3'
  }
]

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

function HeroSlider({ t }) {
  return (
    <Flickity
      className={styles['hero-slider']}
      elementType={'div'}
      options={flickityOptions}
      disableImagesLoaded={false}
      reloadOnUpdate
      static
    >
      {data.map((item) => (
        <div
          key={item.id}
          className={cn([styles['carousel-cell'], styles[item.className]])}
        >
          <div className={styles.overlay}></div>
          <div className={cn(['container', styles.inner])}>
            <h1 className={styles.title}>
              <Trans components={{ 1: <b /> }}>{t('Hero.Text')}</Trans>
            </h1>
            <button className={styles.btn}>{t('Hero.Apply')}</button>
          </div>
        </div>
      ))}
    </Flickity>
  )
}

export default withTranslation('common')(HeroSlider)
