import PropTypes from 'prop-types'
import cn from 'classnames'

import { withTranslation, Trans } from '../i18n'
import Layout from '../components/layout'

import { Location } from '../components/icons'

import styles from './index.module.css'
import Card from '../components/card'
const Homepage = ({ t }) => (
  <Layout>
    <section className={styles.section}>
      <div className={styles.hero}>
        <div className={cn(['container', styles.heroContent])}>
          <div>
            <h1 className={styles.heroTitle}>
              <Trans components={{ 1: <b /> }}>{t('Hero.Text')}</Trans>
            </h1>
            <button className={styles.heroApply}>{t('Hero.Apply')}</button>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <div className={cn(['container', styles.vision])}>
        <div className={styles.visionLinks}>
          {['Vision', 'QualityPromise', 'Values'].map((item) => (
            <a key={item} className={styles.visionBtn}>
              {t(item)}
            </a>
          ))}
        </div>
        <p>
          <b>
            Evb, ein erfolgreiches Dienstleistungsunternehmen in der
            Telekommunikationsbranche seit 2015:
          </b>
          Wir bieten Arbeit in fünf Standorten an. Jeder Mitarbeiter hat die
          freie Auswahl, je nach Belieben seinen Standort für eine oder
          unbegrenzte Zeit zu ändern.
        </p>
        <p>
          Insgesamt haben wir über 450 Mitarbeiter, die sich tagtäglich für das
          Unternehmen und unsere Kunden einsetzen. Für uns ist es wichtig, ein
          positives Arbeitsklima zu schaffen und unsere Motivation immer hoch zu
          halten. Aus diesem Grund sorgen wir immer dafür, dass es dir, egal an
          welchem Standort, gut geht.
        </p>
      </div>
    </section>
    <section className={styles.section}>
      <div className={styles.parallax}>
        <div className={cn(['container', styles.parallaxContent])}>
          <div className={styles.parallaxItem}>
            <div>
              <h1>5</h1>
              <h2>STANDORTEN</h2>
              <ul>
                {[
                  'İzmir',
                  'İstanbul Europa',
                  'İstanbul Asien',
                  'Ankara',
                  'Antalya'
                ].map((item) => (
                  <li key={item}>
                    <Location />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.parallaxItem}>
            <h1>450+</h1>
            <h2>MITARBEITER</h2>
          </div>
          <div className={styles.parallaxItem}>
            <h1>1,5</h1>
            <h2>MILLIONEN BESTANDSKUNDEN</h2>
          </div>
        </div>
      </div>
    </section>
    <section className={styles.section}>
      <div className={cn(['container', styles.tasks])}>
        <div className={styles.tasksContent}>
          <h2 className={styles.tasksTitle}>Aufgaben</h2>
          <br />
          <p>
            Deine Aufgaben bestehen darin, unsere
            <b>1,5 Millionen Bestandskunden</b> zu betreuen. Da wir der
            <b>Dienstleister unseres eigenen Energiewirtschaftsunternehmens</b>
            sind, wirst du deine meiste Zeit damit verbringen Abschläge zu
            ändern, Verträge zu beenden, Tarifwechsel durchzuführen und
            Rechnungen zu erläutern. Du brauchst aber keine Bedenken zu haben,
            denn du hast immer jemanden bei dir, der dich unterstützt, um auch
            jedes Kundenanliegen zu lösen. Dabei musst du aber immer
            serviceorientiert handeln. Bei uns wird guter Kundenservice sehr
            wertgeschätzt.
          </p>
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
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sssTitle}>Häufig gestellte Fragen…</h2>
        <div className={styles.sss}>
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
          <Card className="breaks" title="Pausen">
            <span>
              Wir haben insgesamt vier Schichten. Die Schichtverteilung erfolgt
              immer fair und gerecht. Jeder arbeitet in einem Monat immer
              Arbeitszeiten sind alle Pausen mitinbegriffen.
            </span>
            <span>1: 08:00 – 17:00</span>
            <span>2: 09:00 – 18:00</span>
          </Card>
          <Card className="mealAllowance" title="Essensvergütung">
            <span>
              Wir haben insgesamt vier Schichten. Die Schichtverteilung erfolgt
              immer fair und gerecht. Jeder arbeitet in einem Monat immer
            </span>
          </Card>
        </div>
      </div>
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
