import nextConnect from 'next-connect'
import multer from 'multer'

import Mailer from '../../../utils/sendEmail'

import i18next from '../../../i18n'
import { I18N_INITIAL_LANG, I18N_NAME } from '../../../constants'
// import mailer from '../../../utils/sendEmail'

const upload = multer()
const handler = nextConnect()

handler.post(upload.any(), async (req, res) => {
  Mailer.send({
    template: 'new-job-apply',
    message: {
      to: { name: 'Emrah Sönmez', address: 'emrahsonm3z@gmail.com' },
      from: {
        name: process.env.EMAIL_SYSTEM_FROM_NAME,
        address: process.env.EMAIL_SYSTEM_FROM_ADDRESS
      }
    },
    locals: {
      locale: req.cookies[I18N_NAME] || I18N_INITIAL_LANG,
      name: req.body.NameAndSurname || ''
    }
  })
    .then((res) => {
      // console.log('res.originalMessage', res.originalMessage)
    })
    .catch(console.error)

  // Mailer.send({
  //   template: 'job-apply-completed',
  //   message: {
  //     to: { name: 'Emrah Sönmez', address: 'emrahsonm3z@gmail.com' },
  //     from: {
  //       name: process.env.EMAIL_CAREER_FROM_NAME,
  //       address: process.env.EMAIL_CAREER_FROM_ADDRESS
  //     }
  //   },
  //   locals: {
  //     locale: req.cookies[I18N_NAME] || I18N_INITIAL_LANG,
  //     name: req.body.NameAndSurname || ''
  //   }
  // })
  //   .then((res) => {
  //     // console.log('res.originalMessage', res.originalMessage)
  //   })
  //   .catch(console.error)

  // console.log('asd', i18next.i18n.t('and'))

  // let form = {}

  // Object.keys(req.body).forEach((c) => {
  //   const indexOfKey = c.indexOf('.key')
  //   const key = c.substr(0, indexOfKey)
  //   const value = req.body[`${key}.value`]

  //   // if (req.body[c] instanceof File) {
  //   //   form = Object.assign({ [req.body[c]]: value }, form)
  //   // }

  //   console.log(key, req.body[c], value)

  //   const obj = {
  //     [key]: {
  //       title: req.body[c],
  //       value: value
  //     }
  //   }
  //   console.log(obj)
  //   console.log(form)
  //   if (req.body[c] instanceof File) {
  //   } else {
  //     form = Object.assign({}, form, obj)
  //     console.log(form)
  //   }
  // })

  // console.log('form: ', req.body)

  // const Attachment = req.files[0]
  // let info = await mailer.send(
  //   'applyFormSendToUser',
  //   { form: req.body },
  //   Attachment === undefined
  //     ? { to: EmailAddress }
  //     : {
  //         to: EmailAddress,
  //         attachments: [
  //           {
  //             filename: Attachment.originalname,
  //             contentType: Attachment.mimetype,
  //             encoding: Attachment.encoding,
  //             content: Buffer.from(Attachment.buffer)
  //           }
  //         ]
  //       }
  // )
  // console.log('Message sent: %s', info.messageId)
  // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  // res.json({
  //   message: `
  //       Email from form: ${EmailAddress}
  //       Name from form: ${NameAndSurname}
  //     `
  // })
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler
