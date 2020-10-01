import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { withTranslation, Trans } from '../../i18n'
import {
  MAX_FULLNAME,
  MAX_EMAIL,
  MAX_MESSAGE,
  PHONE_REG_EXP
} from '../../constants'
import { TextArea, TextInput } from '../../components/form'

import styles from './index.module.css'

function ContactForm({ t }) {
  return (
    <>
      <h1>Contact</h1>
      <Formik
        initialValues={{ fullName: '', email: '', phone: '', message: '' }}
        validationSchema={Yup.object({
          fullName: Yup.string()
            .max(
              MAX_FULLNAME,
              <Trans values={{ max: MAX_FULLNAME }}>
                {t('Validation.Max')}
              </Trans>
            )
            .required(t('Validation.Required')),
          email: Yup.string()
            .max(
              MAX_EMAIL,
              <Trans values={{ max: MAX_EMAIL }}>{t('Validation.Max')}</Trans>
            )
            .required(t('Validation.Required')),
          phone: Yup.string()
            .matches(PHONE_REG_EXP, t('Validation.Invalid.Email'))
            .required(t('Validation.Required')),
          message: Yup.string()
            .max(
              MAX_MESSAGE,
              <Trans values={{ max: MAX_MESSAGE }}>{t('Validation.Max')}</Trans>
            )
            .required(t('Validation.Required'))
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
            label={t('FullName')}
            name="fullName"
            type="text"
            placeholder={t('FullName')}
            className="form-control-solid"
          />
          <TextInput
            label={t('Email')}
            name="email"
            type="email"
            placeholder={t('Email')}
            className="form-control-solid"
          />
          <TextInput
            label={t('PhoneNumber')}
            name="phone"
            type="text"
            placeholder={t('PhoneNumber')}
            className="form-control-solid"
          />
          <TextArea
            label={t('Message')}
            name="message"
            rows="6"
            placeholder={t('Message')}
            className="form-control-solid"
          />
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default withTranslation('common')(ContactForm)
