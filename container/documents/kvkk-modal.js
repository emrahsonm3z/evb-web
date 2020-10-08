import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation, Trans } from '../../i18n'

import Modal from '../../components/form/Modal'

function KvkkModal({ t }) {
  return (
    <Modal
      label={t('Kvkk')}
      title={
        <Trans
          ns="documents"
          components={{
            strong: <strong />
          }}
        >
          {t(`KVKK.Title`)}
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
        {t(`KVKK.Content`)}
      </Trans>
    </Modal>
  )
}

KvkkModal.getInitialProps = async () => ({
  namespacesRequired: ['common', 'documents']
})

KvkkModal.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(KvkkModal)
