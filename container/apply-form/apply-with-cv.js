import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { withTranslation, Trans, i18n } from '../../i18n'
import { MAX_FULLNAME, MAX_EMAIL, PHONE_REG_EXP } from '../../constants'
import { Checkbox, TextInput } from '../../components/form'

import styles from './index.module.css'

const FILE_SIZE = 160 * 1024
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']

function ApplyWithCV({ t }) {
  return (
    <Formik
      initialValues={{
        NameAndSurname: '',
        EmailAddress: '',
        Phonenumber: '',
        Attachment: null,
        recaptcha: ''
      }}
      validationSchema={Yup.object({
        NameAndSurname: Yup.string()
          .max(
            MAX_FULLNAME,
            <Trans values={{ max: MAX_FULLNAME }}>{t('Validation.Max')}</Trans>
          )
          .required(t('Validation.Required')),
        EmailAddress: Yup.string()
          .max(
            MAX_EMAIL,
            <Trans values={{ max: MAX_EMAIL }}>{t('Validation.Max')}</Trans>
          )
          .email(t('Validation.Invalid.Email'))
          .required(t('Validation.Required')),
        Phonenumber: Yup.string()
          .matches(PHONE_REG_EXP, t('Validation.Invalid.Phone'))
          .required(t('Validation.Required')),
        Attachment: Yup.mixed()
          .required(t('Validation.Required'))
          .test(
            'fileSize',
            'File too large',
            (value) => value && value.size <= FILE_SIZE
          )
          .test(
            'fileFormat',
            'Unsupported Format',
            (value) => value && SUPPORTED_FORMATS.includes(value.type)
          ),
        DataProtection: Yup.bool().oneOf([true], t('Validation.YouMustAgree'))
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({
        handleSubmit,
        setFieldValue,
        setFieldTouched,
        values,
        errors,
        touched,
        isSubmitting
      }) => (
        <Form className={styles.form}>
          <TextInput
            label={t('NameAndSurname')}
            name="NameAndSurname"
            type="text"
            placeholder={t('NameAndSurname')}
            className="form-control-solid"
          />

          <TextInput
            label={t('Phonenumber')}
            name="Phonenumber"
            type="text"
            placeholder={t('Phonenumber')}
            className="form-control-solid"
          />
          <TextInput
            label={t('EmailAddress')}
            name="EmailAddress"
            type="email"
            placeholder={t('EmailAddress')}
            className="form-control-solid"
          />
          <Checkbox
            className={styles.dataProtection}
            name="DataProtection"
            label={t('DataProtection')}
          />
          <div className={styles.submitBtn}>
            <button className="btn btn-primary" type="submit">
              {t('Submit')}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default withTranslation('common')(ApplyWithCV)
