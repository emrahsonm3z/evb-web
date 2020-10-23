import React from 'react'
import PropTypes from 'prop-types'
import { Form, useFormikContext } from 'formik'
import cn from 'classnames'
import { withTranslation, Trans } from '../../../i18n'

import { Checkbox, TextInput } from '../../../components/form'
import ErrorFocus from '../../../components/form/ErrorFocus'
import { KvkkModal, PrivacyPolicyModal, TermOfUseModal } from '../../documents'

import styles from '../index.module.css'
import { SUPPORTED_FORMATS } from '../../../constants'
import InputFeedback from '../../../components/form/InputFeedback'

function ApplyWithCV({ t }) {
  const { setFieldValue, values, errors, touched } = useFormikContext()

  return (
    <div className={styles.form}>
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
            touched['Attachment'] && errors['Attachment'] ? 'is-invalid' : ''
          ])}
        >
          <input
            id="Attachment"
            name="Attachment"
            style={{ opacity: 0, position: 'relative', left: -40 }}
            accept=".docx"
            className={cn([
              'form-control',
              'form-control-solid',
              touched['Attachment'] && errors['Attachment'] ? 'is-invalid' : ''
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
                kvkklink: (
                  <KvkkModal label={t('JobApplicationConfirmation.Kvkk')} />
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
                    label={t('JobApplicationConfirmation.PrivacyPolicy')}
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
      <div className={styles.submitBtn}>
        <button className="btn btn-primary" type="submit">
          {t('Submit')}
        </button>
      </div>
    </div>
  )
}

ApplyWithCV.getInitialProps = async () => ({
  namespacesRequired: ['common', 'documents']
})

ApplyWithCV.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(ApplyWithCV)
