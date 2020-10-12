import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation, Trans } from '../../i18n'

import Modal from '../../components/form/Modal'

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
      <Trans
        components={{
          p: <p />,
          strong: <strong />,
          h3: <h3 />,
          table: <table />,
          tbody: <tbody />,
          th: <th />,
          td: <td />,
          tr: <tr />,
          li: <li />,
          a: <a />,
          em: <em />,
          ul: <ul />,
          u: <u />
        }}
      >
        {t(`KVKK.Content`)}
      </Trans>
    </Modal>
  )
}

KvkkModal.propTypes = {
  t: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default withTranslation('documents')(KvkkModal)
