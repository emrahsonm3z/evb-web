import nextConnect from 'next-connect'
import multer from 'multer'
import Email from 'email-templates'
import path from 'path'

import i18next from '../../../i18n'
import { I18N_INITIAL_LANG, I18N_NAME } from '../../../constants'
// import mailer from '../../../utils/sendEmail'

const upload = multer()
const handler = nextConnect()

handler.post(upload.any(), async (req, res) => {
  const email = new Email({
    juiceResources: {
      webResources: {
        relativeTo: path.resolve('emails'),
        images: true
      }
    },
    // transport: {
    //   jsonTransport: true,
    // },
    // preview: true,
    i18n: {
      directory: path.resolve('public/static/locales/email'),
      defaultLocale: 'tr',
      locales: ['tr', 'de']
    },

    send: true,
    transport: {
      host: 'mail.evb.com.tr',
      port: 587,
      auth: {
        user: 'kariyer@evb.com.tr',
        pass: '!q2w3e4R'
      }
      // host: "smtp.office365.com",
      // port: 587,
      // auth: {
      //   user: "bilgi@enucuzu.com",
      //   pass: "Faz65223",
      // },
      // secure: true,
      // // ignoreTLS: true,
      // tls: {
      //   rejectUnauthorized: false,
      // },
    }
  })

  email
    .send({
      template: 'evb',
      message: {
        from: 'EVB Kariyer <kariyer@evb.com.tr>',
        to: 'emrahsonm3z@gmail.com'
        // to: "emrah.sonmez@itsbilisim.com",
      },
      locals: {
        // locale: i18next.i18n.language,
        locale: req.cookies[I18N_NAME] || I18N_INITIAL_LANG,
        name: req.body.NameAndSurname || ''
      }
    })
    .then((res) => {
      // console.log("res.originalMessage", res.originalMessage);
    })
    .catch(console.error)
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
