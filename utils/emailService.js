import { createTransport } from 'nodemailer'
import { renderToStaticMarkup } from 'react-dom/server'

function renderBody(body) {
  const doctype =
    '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" ' +
    '"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'

  return doctype + renderToStaticMarkup(body)
}

function emailService(config, emails) {
  const { transport: transportConfig, defaults } = config

  const transporter = createTransport(transportConfig, defaults)

  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error)
    } else {
      console.log('Server is ready to take our messages')
    }
  })

  return {
    send(template, props, message) {
      const { subject, body } = emails[template](props)

      return transporter.sendMail({
        subject,
        html: renderBody(body),
        ...message
      })
    }
  }
}

export default emailService
