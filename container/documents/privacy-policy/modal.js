import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation, Trans } from '../../../i18n'

import Modal from '../../../components/form/Modal'

import PrivacyPolicyDocument from './index'

function PrivacyPolicyModal({ t, label }) {
  return (
    <Modal
      label={label}
      title={
        <Trans
          components={{
            strong: <strong />
          }}
        >
          {t(`PrivacyPolicy.Title`)}
        </Trans>
      }
    >
      <PrivacyPolicyDocument />
    </Modal>
  )
}

PrivacyPolicyModal.propTypes = {
  t: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default withTranslation('documents')(PrivacyPolicyModal)
