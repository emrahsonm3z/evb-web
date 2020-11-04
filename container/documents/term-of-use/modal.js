import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation, Trans } from '../../../i18n'

import Modal from '../../../components/form/Modal'

import TermOfUseDocument from './index'

function TermOfUseModal({ t, label }) {
  return (
    <Modal
      label={label}
      title={
        <Trans
          components={{
            strong: <strong />
          }}
        >
          {t(`TermOfUse.Title`)}
        </Trans>
      }
    >
      <TermOfUseDocument />
    </Modal>
  )
}

TermOfUseModal.propTypes = {
  t: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default withTranslation('documents')(TermOfUseModal)
