import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation, Trans } from '../../i18n'

import Modal from '../../components/form/Modal'

function TermOfUseModal({ t }) {
  return (
    <Modal
      label={t('TermOfUse')}
      title={
        <Trans
          ns="documents"
          components={{
            strong: <strong />
          }}
        >
          {t(`TermOfUse.Title`)}
        </Trans>
      }
    >
      <Trans
        ns="documents"
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
        {t(`TermOfUse.Content`)}
      </Trans>
    </Modal>
  )
}

// TermOfUseModal.getInitialProps = async () => ({
//   namespacesRequired: ['common']
// })

TermOfUseModal.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation(['common', 'documents'])(TermOfUseModal)
