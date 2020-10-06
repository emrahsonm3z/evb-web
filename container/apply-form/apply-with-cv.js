import React from 'react'
import { Formik, Form } from 'formik'
import cn from 'classnames'

import * as Yup from 'yup'

import { withTranslation, Trans } from '../../i18n'
import { MAX_FULLNAME, MAX_EMAIL, PHONE_REG_EXP } from '../../constants'
import { Checkbox, TextInput } from '../../components/form'

import styles from './index.module.css'
import InputFeedback from '../../components/form/InputFeedback'

const FILE_SIZE = 10 * 1024 * 1024
const SUPPORTED_FORMATS = [
  {
    extension: '.doc',
    mimeType: 'application/msword'
  },
  {
    extension: '.docx',
    mimeType:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  },
  {
    extension: '.pdf',
    mimeType: 'application/pdf'
  }
]
function ApplyWithCV({ t }) {
  return (
    <Formik
      initialValues={{
        NameAndSurname: '',
        EmailAddress: '',
        Phonenumber: '',
        Attachment: null,
        DataProtection: false
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
            (value) =>
              value && SUPPORTED_FORMATS.some((c) => c.mimeType === value.type)
          ),
        DataProtection: Yup.bool().oneOf([true], t('Validation.YouMustAgree'))
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(
            JSON.stringify(
              {
                fileName: values.Attachment.name,
                type: values.Attachment.type,
                size: `${values.Attachment.size} bytes`,
                ...values
              },
              null,
              2
            )
          )

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
            type="tel"
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
          <div className="form-group">
            <label htmlFor="Attachment">{t('Attachment')}</label>
            <label
              htmlFor="Attachment"
              className={cn([
                styles['custom-file-upload'],
                'form-control',
                'form-control-solid',
                touched['Attachment'] && errors['Attachment']
                  ? 'is-invalid'
                  : ''
              ])}
            >
              <input
                name="Attachment"
                id="Attachment"
                style={{ opacity: 0, position: 'relative', left: -40 }}
                className={cn([
                  'form-control',
                  'form-control-solid',
                  touched['Attachment'] && errors['Attachment']
                    ? 'is-invalid'
                    : ''
                ])}
                type="file"
                onChange={(event) => {
                  setFieldValue('Attachment', event.currentTarget.files[0])
                }}
              />
              {`${t('ChooseFile')} (${SUPPORTED_FORMATS.map(
                (c) => c.extension
              ).join(', ')})`}
            </label>
            {values.Attachment && (
              <span className={styles['selected-file-name']}>
                {values.Attachment.name}
              </span>
            )}

            {touched['Attachment'] && errors['Attachment'] ? (
              <InputFeedback error={errors['Attachment']} />
            ) : null}
          </div>

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
