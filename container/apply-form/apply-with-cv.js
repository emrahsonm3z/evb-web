import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import cn from 'classnames'
import filesize from 'filesize'
import axios from 'axios'

import styles from './index.module.css'

import { Checkbox, TextInput } from '../../components/form'
import { withTranslation, Trans } from '../../i18n'

import InputFeedback from '../../components/form/InputFeedback'
import ErrorFocus from '../../components/form/ErrorFocus'

import Wizard from './wizard'
import { KvkkModal, TermOfUseModal, PrivacyPolicyModal } from '../documents'
import {
  MAX_FULLNAME,
  MAX_EMAIL,
  PHONE_REG_EXP,
  FILE_SIZE,
  SUPPORTED_FORMATS
} from '../../constants'
import List, { ListItem } from '../../components/list'
import { animateScroll as scroll } from 'react-scroll'

const initialValues =
  process.env.NODE_ENV !== 'production'
    ? {
        NameAndSurname: 'emrah sönmez',
        EmailAddress: 'emrahsonm3z@gmail.com',
        Phonenumber: '905443755025',
        Attachment: null,
        Kvkk: true,
        TermOfUseAndPrivacyPolicy: true
      }
    : {
        NameAndSurname: '',
        EmailAddress: '',
        Phonenumber: '',
        Attachment: null,
        Kvkk: false,
        TermOfUseAndPrivacyPolicy: false
      }

const ApplyFormWithCV = ({ t }) => {
  const [formLoading, setFormLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  return (
    <Wizard
      initialValues={initialValues}
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
      onSubmit={(values, actions) => {
        scroll.scrollToTop()
        setFormLoading(true)
        actions.setSubmitting(false)

        let formData = new FormData()

        Object.entries(values).map(([key, value]) => {
          if (typeof value === 'string' || value instanceof File) {
            formData.append(key, value)
          }
        })

        const response = axios
          .post('/api/apply', formData, {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(function (response) {
            console.log('success')
            setFormLoading(false)
            actions.setSubmitting(true)
          })
          .catch(function (error) {
            console.log('error')
            setStatusMessage(error.message)
            setFormLoading(false)
            actions.setSubmitting(false)
          })
      }}
      formLoading={formLoading}
    >
      <Wizard.Page>
        {({ setFieldValue, values, errors, touched }) => {
          return (
            <Fragment>
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
                    accept=".doc, .docx, .pdf"
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
              <div className={styles['full-width-column']}>
                <Checkbox
                  id="Kvkk"
                  name="Kvkk"
                  content={
                    <Trans
                      components={{
                        span: <span />,
                        kvkklink: (
                          <KvkkModal
                            label={t('JobApplicationConfirmation.Kvkk')}
                          />
                        )
                      }}
                    >
                      {t('JobApplicationConfirmation.ConfirmationKvkk')}
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
                        termofuselink: (
                          <TermOfUseModal
                            label={t('JobApplicationConfirmation.TermOfUse')}
                          />
                        ),
                        privacypolicylink: (
                          <PrivacyPolicyModal
                            label={t(
                              'JobApplicationConfirmation.PrivacyPolicy'
                            )}
                          />
                        )
                      }}
                    >
                      {t(
                        'JobApplicationConfirmation.ConfirmationTermOfUseAndPrivacyPolicy'
                      )}
                    </Trans>
                  }
                />
              </div>
              <ErrorFocus />
            </Fragment>
          )
        }}
      </Wizard.Page>
      <Wizard.Page>
        {({ values }) => {
          return (
            <List className={styles.list}>
              {Object.entries(values).map(([key, value]) => {
                if (typeof value === 'string' || value instanceof File) {
                  return <ListItem key={key} title={t(key)} value={value} />
                }
              })}
            </List>
          )
        }}
      </Wizard.Page>
    </Wizard>
  )
}

ApplyFormWithCV.getInitialProps = async () => ({
  namespacesRequired: ['common', 'validation', 'documents']
})

ApplyFormWithCV.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation(['common', 'validation'])(ApplyFormWithCV)
