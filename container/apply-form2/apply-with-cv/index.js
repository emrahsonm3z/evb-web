import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import FormikWizard from '../../../utils/formik-wizard'
import * as Yup from 'yup'
import fileSize from 'filesize'

import { withTranslation } from '../../../i18n'
import {
  FILE_SIZE,
  MAX_EMAIL,
  MAX_FULLNAME,
  PHONE_REG_EXP,
  SUPPORTED_FORMATS
} from '../../../constants'

import Form from './form'
import Summary from '../summary'
import Response from '../../apply-form/response'

function FormWrapper({
  children,
  isLastStep,
  status,
  goToPreviousStep,
  canGoBack,
  actionLabel
}) {
  return (
    <div>
      {status != null ? (
        <Response />
      ) : (
        <>
          {' '}
          <div>
            <button
              type="button"
              onClick={goToPreviousStep}
              disabled={!canGoBack}
            >
              Previous
            </button>
            <button type="submit">
              {actionLabel || (isLastStep ? 'Gönder' : 'Next')}
            </button>
          </div>
          <hr />
          {children}
        </>
      )}
    </div>
  )
}

function ApplyWithCV({ t }) {
  const [steps, setSteps] = useState([])

  useEffect(() => {
    setSteps([
      {
        id: 'form',
        component: Form,
        initialValues: {
          NameAndSurname: 'emrah sönmez',
          EmailAddress: 'emrahsonm3z@gmail.com',
          Phonenumber: '905443755025',
          Attachment: null,
          Kvkk: true,
          TermOfUseAndPrivacyPolicy: true
        },
        actionLabel: 'Proceed'
      },
      {
        id: 'summary',
        component: Summary
      }
    ])
  })

  const handleSubmit = React.useCallback((values) => {
    console.log('full values:', values)

    return {
      message: 'Thanks for submitting!'
    }
  }, [])

  return (
    <div className="container">
      <FormikWizard
        steps={steps}
        onSubmit={handleSubmit}
        render={FormWrapper}
      />
    </div>
  )
}

ApplyWithCV.getInitialProps = async () => ({
  namespacesRequired: ['common', 'validation', 'documents']
})

ApplyWithCV.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(ApplyWithCV)
