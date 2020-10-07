import React, { useState } from 'react'
// import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

import { withTranslation } from '../../i18n'

import SubTitle from '../../components/title/subtitle'
import ApplyWithCV from './apply-with-cv'
import ApplyWithForm from './apply-with-form'

// import Loading from '../../components/loader'

// const DynamicApplyWithCV = dynamic(() => import('./apply-with-cv'), {
//   loading: () => <Loading />,
//   ssr: false
// })
// const DynamicApplyWithForm = dynamic(() => import('./apply-with-form'), {
//   loading: () => <Loading />,
//   ssr: false
// })

function ApplyForm({ t }) {
  const [showApplyWithForm, setShowApplyWithForm] = useState(true)

  return (
    <div className="container">
      <SubTitle title={t('JobApplication')} />

      {/* <Loading /> */}
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
              <span className="option-title">Form ile başvuru</span>
            </span>
            <span className="option-body">
              Hakkında merak ettiklerimizi formu doldurarak bize bildir
            </span>
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
              <span className="option-title">Özgeçmiş ile başvuru</span>
            </span>
            <span className="option-body">
              Güncel özgeçmişin ile başvurunu tamamla
            </span>
          </span>
        </label>
      </div>

      {showApplyWithForm ? <ApplyWithForm /> : <ApplyWithCV />}
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
