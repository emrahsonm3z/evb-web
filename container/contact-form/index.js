import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import cn from 'classnames'

import { withTranslation, Trans } from '../../i18n'
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
            .email(t('Validation.Invalid.Email')),
          phone: Yup.string()
            .matches(PHONE_REG_EXP, t('Validation.Invalid.Phone'))
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
            label={t('YourFullName')}
            name="fullName"
            type="text"
            placeholder={t('YourFullName')}
            className="form-control-solid"
          />
          <TextInput
            label={t('YourEmail')}
            name="email"
            type="email"
            placeholder={t('YourEmail')}
            className="form-control-solid"
          />
          <TextInput
            label={t('YourPhoneNumber')}
            name="phone"
            type="text"
            placeholder={t('YourPhoneNumber')}
            className="form-control-solid"
          />
          <TextArea
            label={t('YourMessage')}
            name="message"
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

export default withTranslation('common')(ContactForm)
