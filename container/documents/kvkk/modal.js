import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation, Trans } from '../../../i18n'

import Modal from '../../../components/form/Modal'

import KvkkDocument from './index'

function KvkkModal({ t, label }) {
  return (
    <Modal
      label={label}
      title={
        <Trans
          components={{
            strong: <strong />
          }}
        >
          {t(`KVKK.Title`)}
        </Trans>
      }
    >
      <KvkkDocument />
    </Modal>
  )
}

KvkkModal.propTypes = {
  t: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default withTranslation('documents')(KvkkModal)
