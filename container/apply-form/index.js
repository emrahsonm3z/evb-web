import React, { useState } from 'react'
import dynamic from 'next/dynamic'

import { withTranslation } from '../../i18n'

import styles from './index.module.css'
import SubTitle from '../../components/title/subtitle'

const DynamicApplyWithCV = dynamic(() => import('./apply-with-cv'), {
  loading: () => <p>Loading ...</p>,
  ssr: false
})
const DynamicApplyWithForm = dynamic(() => import('./apply-with-form'), {
  loading: () => <p>Loading ...</p>,
  ssr: false
})

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
              <span className="option-title">Form ile iş başvurusu</span>
            </span>
            <span className="option-body">
              Hakkında bilmek istediğimiz bilgileri formu doldurarak başvur
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
              <span className="option-title">Özgeçmiş ile iş başvurusu</span>
            </span>
            <span className="option-body">
              Güncel özgeçmiş dökümanınla ile başvur
            </span>
          </span>
        </label>
      </div>

      {showApplyWithForm ? <DynamicApplyWithForm /> : <DynamicApplyWithCV />}
    </div>
  )
}

export default withTranslation('common')(ApplyForm)
