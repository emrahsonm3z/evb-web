import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import cn from 'classnames'
import filesize from 'filesize'

import * as Yup from 'yup'

import { withTranslation, Trans } from '../../i18n'
import { MAX_FULLNAME, MAX_EMAIL, PHONE_REG_EXP } from '../../constants'
import { Checkbox, TextInput } from '../../components/form'

import styles from './index.module.css'
import InputFeedback from '../../components/form/InputFeedback'
import ErrorFocus from '../../components/form/ErrorFocus'

import { KvkkModal, TermOfUseModal, PrivacyPolicyModal } from '../documents'

import { FILE_SIZE, SUPPORTED_FORMATS } from '../../constants'

function ApplyWithCV({ t }) {
  return (
    <Formik
      initialValues={{
        NameAndSurname: '',
        EmailAddress: '',
        Phonenumber: '',
        Attachment: null,
        Kvkk: false,
        TermOfUseAndPrivacyPolicy: false
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
        Attachment: Yup.mixed()
          .required(t('validation:Required'))
          .test(
            'fileSize',
            t('validation:FileSize', { max: filesize(FILE_SIZE) }),
            (value) => value && value.size <= FILE_SIZE
          )
          .test(
            'fileFormat',
            t('validation:UnsupportedFormat', {
              extension: SUPPORTED_FORMATS.map((c) => c.extension).join(', ')
            }),
            (value) =>
              value && SUPPORTED_FORMATS.some((c) => c.mimeType === value.type)
          ),
        Kvkk: Yup.bool().oneOf([true], t('validation:YouMustAgree')),
        TermOfUseAndPrivacyPolicy: Yup.bool().oneOf(
          [true],
          t('validation:YouMustAgree')
        )
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
            id="NameAndSurname"
            name="NameAndSurname"
            label={t('NameAndSurname')}
            type="text"
            placeholder={t('NameAndSurname')}
            className="form-control-solid"
          />

          <TextInput
            id="Phonenumber"
            name="Phonenumber"
            label={t('Phonenumber')}
            type="tel"
            placeholder={t('Phonenumber')}
            className="form-control-solid"
          />
          <TextInput
            id="EmailAddress"
            name="EmailAddress"
            label={t('EmailAddress')}
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
                id="Attachment"
                name="Attachment"
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
          <div>
            <Checkbox
              id="Kvkk"
              name="Kvkk"
              content={
                <Trans
                  components={{
                    span: <span />,
                    kvkklink: <KvkkModal />
                  }}
                >
                  {t('ConfirmationKvkk')}
                </Trans>
              }
            />
            <Checkbox
              id="TermOfUseAndPrivacyPolicy"
              name="TermOfUseAndPrivacyPolicy"
              content={
                <Trans
                  components={{
                    span: <span />,
                    termofuselink: <TermOfUseModal />,
                    privacypolicylink: <PrivacyPolicyModal />
                  }}
                >
                  {t('ConfirmationTermOfUseAndPrivacyPolicy')}
                </Trans>
              }
            />
          </div>
          <ErrorFocus />
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

ApplyWithCV.getInitialProps = async () => ({
  namespacesRequired: ['common', 'validation', 'documents']
})

ApplyWithCV.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation(['common', 'validation'])(ApplyWithCV)
