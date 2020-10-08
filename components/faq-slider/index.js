import React from 'react'
import PropTypes from 'prop-types'
import Flickity from 'react-flickity-component'
import cn from 'classnames'

import styles from './index.module.css'
import { withTranslation } from '../../i18n'
import Card from '../card'
import SubTitle from '../title/subtitle'

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

function FaqSlider({ t }) {
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
        <div className={styles['carousel-cell']}>
          <Card
            className="workingHours"
            title="Deine Arbeitszeiten und Schichten"
          >
            <span>
              Wir haben insgesamt vier Schichten. Die Schichtverteilung erfolgt
              immer fair und gerecht. Jeder arbeitet in einem Monat immer
              abwechselnd in einer anderen Schicht. In den angegebenen
              Arbeitszeiten sind alle Pausen mitinbegriffen.
            </span>
            <span>1: 08:00 – 17:00</span>
            <span>2: 09:00 – 18:00</span>
            <span>3: 10:00 – 19:00 </span>
            <span>4: 11:00 – 20:00</span>
          </Card>
        </div>
        <div className={styles['carousel-cell']}>
          <Card className="breaks" title="Pausen">
            <span>
              Wir haben insgesamt vier Schichten. Die Schichtverteilung erfolgt
              immer fair und gerecht. Jeder arbeitet in einem Monat immer
              Arbeitszeiten sind alle Pausen mitinbegriffen.
            </span>
            <span>1: 08:00 – 17:00</span>
            <span>2: 09:00 – 18:00</span>
          </Card>
        </div>
        <div className={styles['carousel-cell']}>
          <Card className="mealAllowance" title="Essensvergütung">
            <span>
              Wir haben insgesamt vier Schichten. Die Schichtverteilung erfolgt
              immer fair und gerecht. Jeder arbeitet in einem Monat immer
            </span>
          </Card>
        </div>
        <div className={styles['carousel-cell']}>
          <Card className="bonus" title="Bonus">
            <span>
              Zusätzlich zu deinem Gehalt erhältst du für deine großartige
              Leistung und dein positives Kundenfeedback bis zu 20,00 % deines
              Grundlohns als Prämie ausgezahlt. Zudem erhältst du auch einen
              Anwesenheitsbonus, wenn du immer pünktlich im Büro erscheinst.
            </span>
          </Card>
        </div>
        <div className={styles['carousel-cell']}>
          <Card className="overtime" title="Überstunden">
            <span>
              Bei Bedarf kannst du frei bestimmen, ob du noch Überstunden
              leisten möchtest oder nicht. Je nach dem Arbeitsvolumen werden die
              Überstunden mit dem Faktor 1,5 oder 2,0 berechnet. Wichtig! Jede
              Auszahlung wird dir immer Netto ausgezahlt.
            </span>
          </Card>
        </div>
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
