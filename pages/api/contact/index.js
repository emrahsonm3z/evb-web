import nextConnect from 'next-connect'
import multer from 'multer'

import Mailer from '../../../utils/sendEmail'

import i18next from '../../../i18n'
import { I18N_INITIAL_LANG, I18N_NAME } from '../../../constants'

const upload = multer()
const handler = nextConnect()

handler.post(upload.any(), async (req, res) => {
  let form = []
  Object.entries(req.body).forEach((entry) => {
    const [key, value] = entry
    form.push({
      key: i18next.i18n.t(key, {
        ns: 'common',
        lng: req.cookies[I18N_NAME] || I18N_INITIAL_LANG
      }),
      value: i18next.i18n.t(value, {
        ns: 'common',
        nsSeparator: false,
        lng: req.cookies[I18N_NAME] || I18N_INITIAL_LANG
      })
    })
  })

  Mailer.send({
    template: 'support',
    message: {
      to: { name: 'Emrah Sönmez', address: 'emrahsonm3z@gmail.com' },
      from: {
        name: process.env.EMAIL_CAREER_FROM_NAME,
        address: process.env.EMAIL_CAREER_FROM_ADDRESS
      }
    },
    locals: {
      locale: req.cookies[I18N_NAME] || I18N_INITIAL_LANG,
      variables: form
    }
  })
    .then(console.log)
    .catch(console.error)

  res.end()
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler
