import { createTransport } from 'nodemailer'
import Email from 'email-templates'
import path from 'path'
import { I18N_INITIAL_LANG, LANGUAGES } from '../constants'

function emailService(config) {
  const { transport: transportConfig, defaults } = config

  const transporter = createTransport(transportConfig, defaults)

  // verify connection configuration
  // transporter.verify(function (error, success) {
  //   if (error) {
  //     console.log(error)
  //   } else {
  //     console.log('Server is ready to take our messages')
  //   }
  // })

  const email = new Email({
    juiceResources: {
      webResources: {
        // relativeTo: path.resolve('emails'),
        relativeTo: path.resolve('emails'),
        images: true
      }
    },
    i18n: {
      directory: path.resolve('public/static/locales/email'),
      // directory: path.join(__dirname, 'public', 'static', 'locales', 'email'),
      defaultLocale: I18N_INITIAL_LANG,
      locales: LANGUAGES.map((c) => c.lang)
    },
    // transport: {
    //   jsonTransport: true
    // },
    // preview: true,

    transport: transporter
  })

  return {
    send({
      template,
      message = {
        from: 'EVB <system@evb.com.tr>'
      },
      locals = { locale: I18N_INITIAL_LANG }
    }) {
      return email
        .send({
          template: template,
          message: { ...message },
          locals: { ...locals }
        })
        .then((res) => {
          // console.log("res.originalMessage", res.originalMessage);
        })
        .catch(console.error)
    }
  }
}

export default emailService
