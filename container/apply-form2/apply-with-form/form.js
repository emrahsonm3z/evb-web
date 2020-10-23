import React from 'react'
import { Form, useFormikContext } from 'formik'
import { withTranslation, Trans } from '../../../i18n'

import {
  Checkbox,
  TextInput,
  RadioButton,
  RadioButtonGroup
} from '../../../components/form'
import ErrorFocus from '../../../components/form/ErrorFocus'
import { KvkkModal, PrivacyPolicyModal, TermOfUseModal } from '../../documents'

import styles from './index.module.css'

function ApplyWithForm({ t }) {
  const { errors, touched } = useFormikContext()

  return (
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
        id="Birthplace"
        name="Birthplace"
        label={t('Birthplace')}
        placeholder={t('Birthplace')}
        className="form-control-solid"
      />
      <TextInput
        id="Birthday"
        name="Birthday"
        label={t('Birthday')}
        type="date"
        placeholder={t('Birthday')}
        className="form-control-solid"
      />
      <RadioButtonGroup
        id="Gender"
        label={t('Gender')}
        error={errors.Gender}
        touched={touched.Gender}
      >
        <RadioButton name="Gender" label={t('Female')} value={t('Female')} />
        <RadioButton name="Gender" label={t('Male')} value={t('Male')} />
      </RadioButtonGroup>

      <RadioButtonGroup
        id="Nationality"
        label={t('Nationality')}
        error={errors.Nationality}
        touched={touched.Nationality}
      >
        <RadioButton
          name="Nationality"
          label={t('TR(Turkey)')}
          value={t('TR(Turkey)')}
        />
        <RadioButton name="Nationality" label={t('Other')} value={t('Other')} />
      </RadioButtonGroup>

      <TextInput
        id="HomeAddress"
        name="HomeAddress"
        label={t('HomeAddress')}
        type="text"
        placeholder={t('HomeAddress')}
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
      <RadioButtonGroup
        id="RequestedOffice"
        label={t('RequestedOffice')}
        error={errors.RequestedOffice}
        touched={touched.RequestedOffice}
      >
        <RadioButton name="RequestedOffice" label="İstanbul" value="İstanbul" />
        <RadioButton name="RequestedOffice" label="İzmir" value="İzmir" />
        <RadioButton name="RequestedOffice" label="Antalya" value="Antalya" />
        <RadioButton name="RequestedOffice" label="Ankara" value="Ankara" />
      </RadioButtonGroup>
      <RadioButtonGroup
        id="MaritalStatus"
        label={t('MaritalStatus')}
        error={errors.MaritalStatus}
        touched={touched.MaritalStatus}
      >
        <RadioButton
          name="MaritalStatus"
          label={t('Single')}
          value={t('Single')}
        />
        <RadioButton
          name="MaritalStatus"
          label={t('Married')}
          value={t('Married')}
        />
      </RadioButtonGroup>
      <RadioButtonGroup
        id="EducationalStatus"
        label={t('EducationalStatus')}
        error={errors.EducationalStatus}
        touched={touched.EducationalStatus}
      >
        <RadioButton
          name="EducationalStatus"
          label={t('MiddleSchool')}
          value={t('MiddleSchool')}
        />
        <RadioButton
          name="EducationalStatus"
          label={t('HighSchool')}
          value={t('HighSchool')}
        />
        <RadioButton
          name="EducationalStatus"
          label={t('University')}
          value={t('University')}
        />
      </RadioButtonGroup>
      <RadioButtonGroup
        id="WorkExperience"
        label={t('WorkExperience')}
        error={errors.WorkExperience}
        touched={touched.WorkExperience}
      >
        <RadioButton name="WorkExperience" label={t('Yes')} value={t('Yes')} />
        <RadioButton name="WorkExperience" label={t('No')} value={t('No')} />
      </RadioButtonGroup>
      <RadioButtonGroup
        id="ComputerSkills"
        label={t('ComputerSkills')}
        error={errors.ComputerSkills}
        touched={touched.ComputerSkills}
      >
        <RadioButton
          name="ComputerSkills"
          label={t('Well')}
          value={t('Well')}
        />
        <RadioButtop
          name="ComputerSkills"
          label={t('Medium')}
          value={t('Medium')}
        />
        <RadioButton
          name="ComputerSkills"
          label={t('Little')}
          value={t('Little')}
        />
      </RadioButtonGroup>
      <RadioButtonGroup
        id="GermanLanguageLevel"
        label={t('GermanLanguageLevel')}
        error={errors.GermanLanguageLevel}
        touched={touched.GermanLanguageLevel}
      >
        <RadioButton
          name="GermanLanguageLevel"
          label={t('Well')}
          value={t('Well')}
        />
        <RadioButton
          name="GermanLanguageLevel"
          label={t('Medium')}
          value={t('Medium')}
        />
        <RadioButton
          name="GermanLanguageLevel"
          label={t('Little')}
          value={t('Little')}
        />
      </RadioButtonGroup>
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
      <div className={styles.submitBtn}>
        <button className="btn btn-primary" type="submit">
          {t('Submit')}
        </button>
      </div>
      <ErrorFocus />
    </Form>
  )
}

ApplyWithForm.getInitialProps = async () => ({
  namespacesRequired: ['common', 'validation', 'documents']
})

ApplyWithForm.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation(['common', 'validation'])(ApplyWithForm)
