import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation, Trans } from '../../../i18n'

function TermOfUseDocument({ t }) {
  return (
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
      {t(`TermOfUse.Content`)}
    </Trans>
  )
}

TermOfUseDocument.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('documents')(TermOfUseDocument)
