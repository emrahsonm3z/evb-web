import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { withTranslation, Trans } from '../../i18n'
import { MAX_FULLNAME, MAX_EMAIL, PHONE_REG_EXP } from '../../constants'
import { Checkbox, RadioButton, TextInput } from '../../components/form'

import styles from './index.module.css'
import RadioButtonGroup from '../../components/form/RadioButtonGroup'
import KvkkModal from '../documents/kvkk-modal'

function ApplyWithForm({ t }) {
  useEffect(() => {
    let birtydayInput = document.getElementById('Birthday')

    birtydayInput.max = new Date().toISOString().split('T')[0]
  }, [])
  return (
    <Formik
      initialValues={{
        NameAndSurname: '',
        EmailAddress: '',
        Phonenumber: '',
        Birthday: '',
        Birthplace: '',
        Gender: '',
        Nationality: '',
        HomeAddress: '',
        RequestedOffice: '',
        MaritalStatus: '',
        EducationalStatus: '',
        WorkExperience: '',
        ComputerSkills: '',
        GermanLanguageLevel: '',
        Kvkk: false
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
        Birthday: Yup.string().required(t('validation:Required')),
        Birthplace: Yup.string().required(t('validation:Required')),
        Gender: Yup.string().required(t('validation:Required')),
        Nationality: Yup.string().required(t('validation:Required')),
        HomeAddress: Yup.string().required(t('validation:Required')),
        RequestedOffice: Yup.string().required(t('validation:Required')),
        MaritalStatus: Yup.string().required(t('validation:Required')),
        EducationalStatus: Yup.string().required(t('validation:Required')),
        WorkExperience: Yup.string().required(t('validation:Required')),
        ComputerSkills: Yup.string().required(t('validation:Required')),
        GermanLanguageLevel: Yup.string().required(t('validation:Required')),
        Kvkk: Yup.bool().oneOf([true], t('validation:YouMustAgree'))
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
            type="tel"
            placeholder={t('Phonenumber')}
            className="form-control-solid"
          />
          <TextInput
            label={t('Birthplace')}
            name="Birthplace"
            placeholder={t('Birthplace')}
            className="form-control-solid"
          />
          <TextInput
            id="Birthday"
            label={t('Birthday')}
            name="Birthday"
            type="date"
            // pattern="\d{4}-\d{2}-\d{2}"
            placeholder={t('Birthday')}
            className="form-control-solid"
          />
          <RadioButtonGroup
            label={t('Gender')}
            error={errors.Gender}
            touched={touched.Gender}
          >
            <RadioButton
              name="Gender"
              label={t('Female')}
              value={t('Female')}
            />
            <RadioButton name="Gender" label={t('Male')} value={t('Male')} />
          </RadioButtonGroup>

          <RadioButtonGroup
            label={t('Nationality')}
            error={errors.Nationality}
            touched={touched.Nationality}
          >
            <RadioButton
              name="Nationality"
              label={t('TR(Turkey)')}
              value={t('TR(Turkey)')}
            />
            <RadioButton
              name="Nationality"
              label={t('Other')}
              value={t('Other')}
            />
          </RadioButtonGroup>

          <TextInput
            label={t('HomeAddress')}
            name="HomeAddress"
            type="text"
            placeholder={t('HomeAddress')}
            className="form-control-solid"
          />
          <TextInput
            label={t('EmailAddress')}
            name="EmailAddress"
            type="email"
            placeholder={t('EmailAddress')}
            className="form-control-solid"
          />
          <RadioButtonGroup
            label={t('RequestedOffice')}
            error={errors.RequestedOffice}
            touched={touched.RequestedOffice}
          >
            <RadioButton
              name="RequestedOffice"
              label="İstanbul"
              value="İstanbul"
            />
            <RadioButton name="RequestedOffice" label="İzmir" value="İzmir" />
            <RadioButton
              name="RequestedOffice"
              label="Antalya"
              value="Antalya"
            />
            <RadioButton name="RequestedOffice" label="Ankara" value="Ankara" />
          </RadioButtonGroup>
          <RadioButtonGroup
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
            label={t('WorkExperience')}
            error={errors.WorkExperience}
            touched={touched.WorkExperience}
          >
            <RadioButton
              name="WorkExperience"
              label={t('Yes')}
              value={t('Yes')}
            />
            <RadioButton
              name="WorkExperience"
              label={t('No')}
              value={t('No')}
            />
          </RadioButtonGroup>
          <RadioButtonGroup
            label={t('ComputerSkills')}
            error={errors.ComputerSkills}
            touched={touched.ComputerSkills}
          >
            <RadioButton
              name="ComputerSkills"
              label={t('Well')}
              value={t('Well')}
            />
            <RadioButton
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
          <Checkbox
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

ApplyWithForm.getInitialProps = async () => ({
  namespacesRequired: ['common', 'validation', 'documents']
})

ApplyWithForm.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(ApplyWithForm)
