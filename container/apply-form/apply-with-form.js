import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import * as Yup from 'yup'
import axios from 'axios'

import styles from './index.module.css'

import {
  Checkbox,
  TextInput,
  RadioButton,
  RadioButtonGroup
} from '../../components/form'
import { withTranslation, Trans } from '../../i18n'

import Wizard from './wizard'
import { KvkkModal, TermOfUseModal, PrivacyPolicyModal } from '../documents'
import { MAX_FULLNAME, MAX_EMAIL, PHONE_REG_EXP } from '../../constants'
import List, { ListItem } from '../../components/list'
import { animateScroll as scroll } from 'react-scroll'

const SELECTED_VALUES = {
  Female: 'Female',
  Male: 'Male',
  TR: 'TR(Turkey)',
  Other: 'Other',
  Single: 'Single',
  Married: 'Married',
  MiddleSchool: 'MiddleSchool',
  HighSchool: 'HighSchool',
  University: 'University',
  Yes: 'Yes',
  No: 'No',
  Well: 'Well',
  Medium: 'Medium',
  Little: 'Little'
}

const initialValues =
  process.env.NODE_ENV !== 'production'
    ? {
        NameAndSurname: 'Emrah Sönmez',
        Phonenumber: '5443755025',
        Birthplace: 'Erzurum',
        Birthday: '1988-08-10',
        Gender: SELECTED_VALUES.Male,
        Nationality: SELECTED_VALUES.TR,
        HomeAddress: 'Alsancak mah. 1474 sok. No:11 Konak / İZMİR',
        EmailAddress: 'emrahsonm3z@gmail.com',
        RequestedOffice: 'İzmir',
        MaritalStatus: SELECTED_VALUES.Single,
        EducationalStatus: SELECTED_VALUES.University,
        WorkExperience: SELECTED_VALUES.Yes,
        ComputerSkills: SELECTED_VALUES.Well,
        GermanLanguageLevel: SELECTED_VALUES.Little,
        Kvkk: true,
        TermOfUseAndPrivacyPolicy: true
      }
    : {
        NameAndSurname: '',
        Phonenumber: '',
        Birthplace: '',
        Birthday: '',
        Gender: '',
        Nationality: '',
        HomeAddress: '',
        EmailAddress: '',
        RequestedOffice: '',
        MaritalStatus: '',
        EducationalStatus: '',
        WorkExperience: '',
        ComputerSkills: '',
        GermanLanguageLevel: '',
        Kvkk: false,
        TermOfUseAndPrivacyPolicy: false
      }

const ApplyFormWithForm = ({ t }) => {
  const [formLoading, setFormLoading] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  return (
    <Wizard
      initialValues={initialValues}
      validationSchema={Yup.object({
        NameAndSurname: Yup.string()
          .max(MAX_FULLNAME, t('validation:Max', { max: MAX_FULLNAME }))
          .required(t('validation:Required')),
        Phonenumber: Yup.string()
          .matches(PHONE_REG_EXP, t('validation:Invalid.Phone'))
          .required(t('validation:Required')),
        Birthday: Yup.string().required(t('validation:Required')),
        Birthplace: Yup.string().required(t('validation:Required')),
        Gender: Yup.string().required(t('validation:Required')),
        Nationality: Yup.string().required(t('validation:Required')),
        HomeAddress: Yup.string().required(t('validation:Required')),
        EmailAddress: Yup.string()
          .max(MAX_EMAIL, t('validation:Max', { max: MAX_EMAIL }))
          .email(t('validation:Invalid.Email'))
          .required(t('validation:Required')),
        RequestedOffice: Yup.string().required(t('validation:Required')),
        MaritalStatus: Yup.string().required(t('validation:Required')),
        EducationalStatus: Yup.string().required(t('validation:Required')),
        WorkExperience: Yup.string().required(t('validation:Required')),
        ComputerSkills: Yup.string().required(t('validation:Required')),
        GermanLanguageLevel: Yup.string().required(t('validation:Required')),
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
          if (typeof value === 'string') {
            formData.append(key, value)
          }
        })

        const response = axios
          .post('/api/apply', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(function (response) {
            setFormLoading(false)
            actions.setSubmitting(true)
          })
          .catch(function (error) {
            setStatusMessage(error.message)
            setFormLoading(false)
            actions.setSubmitting(false)
          })
      }}
      formLoading={formLoading}
    >
      <Wizard.Page>
        {({ errors, touched }) => {
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
                <RadioButton
                  name="Gender"
                  label={t('Female')}
                  value={SELECTED_VALUES.Female}
                />
                <RadioButton
                  name="Gender"
                  label={t('Male')}
                  value={SELECTED_VALUES.Male}
                />
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
                  value={SELECTED_VALUES.TR}
                />
                <RadioButton
                  name="Nationality"
                  label={t('Other')}
                  value={SELECTED_VALUES.Other}
                />
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
                <RadioButton
                  name="RequestedOffice"
                  label="İstanbul"
                  value="İstanbul"
                />
                <RadioButton
                  name="RequestedOffice"
                  label="İzmir"
                  value="İzmir"
                />
                <RadioButton
                  name="RequestedOffice"
                  label="Antalya"
                  value="Antalya"
                />
                <RadioButton
                  name="RequestedOffice"
                  label="Ankara"
                  value="Ankara"
                />
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
                  value={SELECTED_VALUES.Single}
                />
                <RadioButton
                  name="MaritalStatus"
                  label={t('Married')}
                  value={SELECTED_VALUES.Married}
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
                  value={SELECTED_VALUES.MiddleSchool}
                />
                <RadioButton
                  name="EducationalStatus"
                  label={t('HighSchool')}
                  value={SELECTED_VALUES.HighSchool}
                />
                <RadioButton
                  name="EducationalStatus"
                  label={t('University')}
                  value={SELECTED_VALUES.University}
                />
              </RadioButtonGroup>
              <RadioButtonGroup
                id="WorkExperience"
                label={t('WorkExperience')}
                error={errors.WorkExperience}
                touched={touched.WorkExperience}
              >
                <RadioButton
                  name="WorkExperience"
                  label={t('Yes')}
                  value={SELECTED_VALUES.Yes}
                />
                <RadioButton
                  name="WorkExperience"
                  label={t('No')}
                  value={SELECTED_VALUES.No}
                />
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
                  value={SELECTED_VALUES.Well}
                />
                <RadioButton
                  name="ComputerSkills"
                  label={t('Medium')}
                  value={SELECTED_VALUES.Medium}
                />
                <RadioButton
                  name="ComputerSkills"
                  label={t('Little')}
                  value={SELECTED_VALUES.Little}
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
                  value={SELECTED_VALUES.Well}
                />
                <RadioButton
                  name="GermanLanguageLevel"
                  label={t('Medium')}
                  value={SELECTED_VALUES.Medium}
                />
                <RadioButton
                  name="GermanLanguageLevel"
                  label={t('Little')}
                  value={SELECTED_VALUES.Little}
                />
              </RadioButtonGroup>
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
            </Fragment>
          )
        }}
      </Wizard.Page>
      <Wizard.Page>
        {({ values }) => {
          return (
            <List className={styles.list}>
              {Object.entries(values).map(([key, value]) => {
                if (typeof value === 'string') {
                  return <ListItem key={key} title={t(key)} value={t(value)} />
                }
              })}
            </List>
          )
        }}
      </Wizard.Page>
    </Wizard>
  )
}

ApplyFormWithForm.getInitialProps = async () => ({
  namespacesRequired: ['common', 'validation', 'documents']
})

ApplyFormWithForm.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation(['common', 'validation'])(ApplyFormWithForm)
