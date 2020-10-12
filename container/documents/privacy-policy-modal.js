import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation, Trans } from '../../i18n'

import Modal from '../../components/form/Modal'

function PrivacyPolicyModal({ t }) {
  return (
    <Modal
      label={t('PrivacyPolicy')}
      title={
        <Trans
          ns="documents"
          components={{
            strong: <strong />
          }}
        >
          {t(`PrivacyPolicy.Title`)}
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
        {t(`PrivacyPolicy.Content`)}
      </Trans>
    </Modal>
  )
}

// PrivacyPolicyModal.getInitialProps = async () => ({
//   namespacesRequired: ['common']
// })

PrivacyPolicyModal.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation(['common', 'documents'])(PrivacyPolicyModal)
