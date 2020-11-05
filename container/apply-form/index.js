import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { withTranslation } from '../../i18n'

import SubTitle from '../../components/title/subtitle'
import ApplyFormWithCV from './apply-with-cv'
import ApplyFormWithForm from './apply-with-form'

function ApplyForm({ t }) {
  const [showApplyWithForm, setShowApplyWithForm] = useState(true)

  return (
    <div className="container">
      <SubTitle title={t('JobApplication')} />

      <div className="form-group d-flex flex-row flex-wrap">
        <label className="option option-plain" htmlFor="apply-with-form">
          <span className="option-control">
            <span className="radio">
              <input
                id="apply-with-form"
                type="radio"
                name="apply-type"
                value={true}
                defaultChecked
                onChange={() => {
                  setShowApplyWithForm(true)
                }}
              />
              <span></span>
            </span>
          </span>
          <span className="option-label">
            <span className="option-head">
              <span className="option-title">{t('ApplyWithForm')}</span>
            </span>
            <span className="option-body">{t('ApplyWithFormDesc')}</span>
          </span>
        </label>
        <label className="option option option-plain" htmlFor="apply-with-cv">
          <span className="option-control">
            <span className="radio">
              <input
                id="apply-with-cv"
                type="radio"
                name="apply-type"
                value={false}
                onChange={() => {
                  setShowApplyWithForm(false)
                }}
              />
              <span></span>
            </span>
          </span>
          <span className="option-label">
            <span className="option-head">
              <span className="option-title">{t('ApplyWithResume')}</span>
            </span>
            <span className="option-body">{t('ApplyWithResumeDesc')}</span>
          </span>
        </label>
      </div>

      {showApplyWithForm ? <ApplyFormWithForm /> : <ApplyFormWithCV />}
    </div>
  )
}

ApplyForm.getInitialProps = async () => ({
  namespacesRequired: ['common']
})

ApplyForm.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(ApplyForm)
