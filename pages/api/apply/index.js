import nextConnect from 'next-connect'
import multer from 'multer'

import mailer from '../../../utils/sendEmail'

const upload = multer()
const handler = nextConnect()

handler.patch(upload.any(), async (req, res) => {
  console.log('req.body', req.body)
  const { EmailAddress, NameAndSurname } = req.body
  const Attachment = req.files[0]

  console.log('Attachment', Attachment)

  let info = await mailer.send(
    'applyFormSendToUser',
    { form: req.body },
    {
      to: EmailAddress,
      attachments: [
        {
          filename: Attachment.originalname,
          contentType: Attachment.mimetype,
          encoding: Attachment.encoding,
          content: Buffer.from(Attachment.buffer)
        }
      ]
    }
  )

  console.log('Message sent: %s', info.messageId)

  res.json({
    message: `
        Email from form: ${EmailAddress}
        Name from form: ${NameAndSurname}
      `
  })
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default handler
