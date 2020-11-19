import PropTypes from 'prop-types'
import cn from 'classnames'

import styles from './contact.module.css'
import OfficeAddress from '../container/office-address'
import ContactForm from '../container/contact-form'
import Meta from '../components/meta'
import { withTranslation } from '../i18n'
import { HOST_URL } from '../constants'

const Contact = ({ t, lang }) => (
  <>
    <Meta
      title={t('Contact.Title')}
      desc={t('Contact.Description')}
      canonical={`${HOST_URL}/contact`}
    />
    <section className={cn([styles.section, styles['our-offices']])}>
      <OfficeAddress lang={lang} />
    </section>
    <section className={styles.section}>
      <ContactForm />
    </section>
    <section className={cn([styles.section, styles['map']])}>
      <div className="container">
        <iframe
          height="400"
          width="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d781.2629830686569!2d27.144611029213554!3d38.44026939872774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8436e9209b5%3A0x64800c0255ae2563!2sAlsancak%2C+1474.+Sk.+11+A%2C+35220+Konak%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1487594032146"
        ></iframe>
      </div>
    </section>
  </>
)

Contact.getInitialProps = async () => ({
  namespacesRequired: ['page_info', 'common', 'validation', 'documents']
})

Contact.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('page_info')(Contact)
