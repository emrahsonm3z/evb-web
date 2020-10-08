import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import cn from 'classnames'

import { withTranslation } from '../../i18n'
import {
  MAX_FULLNAME,
  MAX_EMAIL,
  MAX_MESSAGE,
  PHONE_REG_EXP
} from '../../constants'
import { TextArea, TextInput } from '../../components/form'

import styles from './index.module.css'
import SubTitle from '../../components/title/subtitle'

function ContactForm({ t }) {
  return (
    <div className="container">
      <SubTitle title={t('ContactUs')} />

      <Formik
        initialValues={{
          NameAndSurname: '',
          EmailAddress: '',
          Phonenumber: '',
          Message: ''
        }}
        validationSchema={Yup.object({
          NameAndSurname: Yup.string()
            .max(MAX_FULLNAME, t('validation:Max', { max: MAX_FULLNAME }))
            .required(t('validation:Required')),
          EmailAddress: Yup.string()
            .max(MAX_EMAIL, t('validation:Max', { max: MAX_EMAIL }))
            .email(t('validation:Invalid.Email'))
            .required(t('validation:Required')),
          Phonenumber: Yup.string()
            .matches(PHONE_REG_EXP, t('validation:Invalid.Phone'))
            .required(t('validation:Required')),
          Message: Yup.string()
            .max(MAX_MESSAGE, t('validation:Max', { max: MAX_MESSAGE }))
            .required(t('validation:Required'))
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <Form className={styles.form}>
          <TextInput
            label={t('NameAndSurname')}
            name="NameAndSurname"
            type="text"
            placeholder={t('NameAndSurname')}
            className="form-control-solid"
          />
          <TextInput
            label={t('EmailAddress')}
            name="EmailAddress"
            type="email"
            placeholder={t('EmailAddress')}
            className="form-control-solid"
          />
          <TextInput
            label={t('Phonenumber')}
            name="Phonenumber"
            type="tel"
            placeholder={t('Phonenumber')}
            className="form-control-solid"
          />
          <TextArea
            label={t('YourMessage')}
            name="Message"
            rows="5"
            placeholder={t('YourMessage')}
            className={cn(['form-control-solid', 'a-height', styles.message])}
          />
          <div className={styles.submitBtn}>
            <button className="btn btn-primary" type="submit">
              {t('Submit')}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

ContactForm.getInitialProps = async () => ({
  namespacesRequired: ['common', 'validation']
})

ContactForm.propTypes = {
  t: PropTypes.func.isRequired
}
export default withTranslation('common')(ContactForm)
