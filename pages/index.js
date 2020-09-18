import PropTypes from 'prop-types'
import cn from 'classnames'

import { withTranslation, Trans } from '../i18n'
import Layout from '../components/layout'

import { Shape } from '../components/icons'

import styles from './index.module.css'
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
            Evb, ein erfolgreiches Dienstleistungsunternehmen in der Telekommunikationsbranche seit
            2015:
          </b>
          Wir bieten Arbeit in fünf Standorten an. Jeder Mitarbeiter hat die freie Auswahl, je nach
          Belieben seinen Standort für eine oder unbegrenzte Zeit zu ändern.
        </p>
        <p>
          Insgesamt haben wir über 450 Mitarbeiter, die sich tagtäglich für das Unternehmen und
          unsere Kunden einsetzen. Für uns ist es wichtig, ein positives Arbeitsklima zu schaffen
          und unsere Motivation immer hoch zu halten. Aus diesem Grund sorgen wir immer dafür, dass
          es dir, egal an welchem Standort, gut geht.
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
                {['İzmir', 'İstanbul Europa', 'İstanbul Asien', 'Ankara', 'Antalya'].map((item) => (
                  <li key={item}>
                    <Shape />
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
          <h2>Aufgaben</h2>
          <br />
          <p>
            Deine Aufgaben bestehen darin, unsere <b>1,5 Millionen Bestandskunden</b> zu betreuen.
            Da wir der
            <b> Dienstleister unseres eigenen Energiewirtschaftsunternehmens</b> sind, wirst du
            deine meiste Zeit damit verbringen Abschläge zu ändern, Verträge zu beenden,
            Tarifwechsel durchzuführen und Rechnungen zu erläutern. Du brauchst aber keine Bedenken
            zu haben, denn du hast immer jemanden bei dir, der dich unterstützt, um auch jedes
            Kundenanliegen zu lösen. Dabei musst du aber immer serviceorientiert handeln. Bei uns
            wird guter Kundenservice sehr wertgeschätzt.
          </p>
        </div>
      </div>
    </section>

    <section className={styles.section}>
      <div className="container">
        <div className={styles.zzz}>
          <div>
            <img src="assets/yoga.jpg"></img>
          </div>
          <div>
            <img src="assets/office_taco_party.jpg"></img>
          </div>
          <div>
            <h2>Aufgaben</h2>
            <br />
            <p>
              Deine Aufgaben bestehen darin, unsere <b>1,5 Millionen Bestandskunden</b> zu betreuen.
              Da wir der
              <b> Dienstleister unseres eigenen Energiewirtschaftsunternehmens</b> sind, wirst du
              deine meiste Zeit damit verbringen Abschläge zu ändern, Verträge zu beenden,
              Tarifwechsel durchzuführen und Rechnungen zu erläutern. Du brauchst aber keine
              Bedenken zu haben, denn du hast immer jemanden bei dir, der dich unterstützt, um auch
              jedes Kundenanliegen zu lösen. Dabei musst du aber immer serviceorientiert handeln.
              Bei uns wird guter Kundenservice sehr wertgeschätzt.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div style={{ height: '500px' }}></div>
  </Layout>
)

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

Homepage.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(Homepage)
