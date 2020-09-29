import PropTypes from 'prop-types'
import cn from 'classnames'

import { withTranslation, Trans } from '../i18n'
import Layout from '../components/layout'

import styles from './index.module.css'
import HeroSlider from '../components/hero-slider'
import VisionSlider from '../components/vision-slider'
import Parallax from '../components/parallax'
import FaqSlider from '../components/faq-slider'

const Homepage = ({ t }) => (
  <Layout>
    <section className={styles.section}>
      <HeroSlider />
    </section>

    <section className={styles.section}>
      <VisionSlider />
    </section>
    <section className={styles.section}>
      <Parallax />
    </section>
    <section className={styles.section} id="ourservices">
      <div className={cn(['container', styles.tasks])}>
        <div className={styles.tasksContent}>
          <h2 className={styles.tasksTitle}>{t('Tasks.Title')}</h2>
          <br />
          <Trans components={{ p: <p />, b: <b /> }}>{t('Tasks.Text')}</Trans>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <div className="container">
        <div className={styles.moreThanJob}>
          <div className={styles.moreThanJobImg}>
            <img src="assets/yoga.jpg"></img>
          </div>
          <div className={styles.moreThanJobImg}>
            <img src="assets/office_taco_party.jpg"></img>
          </div>
          <div className={styles.moreThanJobText}>
            <h2>Mehr als ein Job</h2>
            <br />
            <p>
              Schnell wirst du erkennen, dass die EVB mehr als nur deine
              Arbeitsstelle ist. Man erwartet von dir also nicht nur deine
              tägliche Arbeit zu leisten, sondern du kannst an zahlreichen
              Aktivitäten, Fortbildungen und an verschiedenen Projekten
              teilnehmen.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <div className="container">
        <div className={styles.training}>
          <div className={styles.trainingContent}>
            <h3 className={styles.trainingTitle}>
              Intensive Einschulung für Mitarbeiter und Führungskräfte
            </h3>
            <br />
            <p>
              Bevor du mit der Arbeit beginnst, wirst du als erstes eine acht
              Wochen lange Basisschulung absolvieren. Erst wenn du fit bist,
              kannst du loslegen. Selbstverständlich wird dir die Schulungszeit
              auch voll ausbezahlt.
            </p>
          </div>
          <div className={styles.trainingImg}>
            <img src="assets/service.jpg"></img>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <div className={styles.team}>
        <div className={cn(['container', styles.teamContent])}>
          <h2 className={styles.teamTitle}>
            Fairness gegenüber unseren Kunden und Mitarbeitern
          </h2>
          <p>
            Wir achten besonders darauf, jedem den gebührenden Respekt zu
            zollen, jedermann, egal ob Führungskraft oder auch Sachbearbeiter,
            gleichermaßen zu behandeln, Verantwortungen zu übernehmen, aber auch
            die Verantwortung abzugeben, um auch anderen die Möglichkeit zu
            geben, sich als Führungskraft zu beweisen. Dabei erwarten wir nur
            Loyalität der EVB gegenüber und Zuverlässigkeit.
          </p>
        </div>
      </div>
    </section>
    <section className={styles.section} id="faqs">
      <FaqSlider />
    </section>
    <section className={styles.section}>
      <div className={styles.expectations}>
        <div className="container">
          <div className={styles.expectations}>
            <div className={styles.expectationContent}>
              <h2>Unsere Erwartungen an dich</h2>
              <span>
                Wie du siehst bieten wir dir sehr vieles an, dafür haben wir
                aber auch hohe Erwartungen an dich.
              </span>
              <ul>
                <li>
                  <span>
                    Bist du in der Lage serviceorientiert zu arbeiten?
                  </span>
                </li>
                <li>
                  <span>
                    Kannst du einen Computer bedienen und kennst dich zudem auch
                    mit MS-Office aus?
                  </span>
                </li>
                <li>
                  {' '}
                  <span>Du sprichst und schreibst gerne.</span>
                </li>
                <li>
                  <span>
                    Kannst du dich auf Deutsch schriftlich, sowie auch mündlich
                    verständigen?
                  </span>
                </li>
                <li>
                  <span>
                    Bist du in der Lage, bestimmte Prozesse zu erlernen und
                    anzuwenden?
                  </span>
                </li>
                <li>
                  <span>
                    Bist du verantwortungsbewusst und bemühst dich immer dein
                    Bestes zu leisten?
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.expectationImg}>
              <img src="assets/hearings_scaled.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Homepage)
