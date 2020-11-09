import Mailer from './emailService'

const isProd = process.env.NODE_ENV === 'production'

const mailerConfig = {
  defaults: {
    from: {
      name: isProd
        ? process.env.EMAIL_SYSTEM_FROM_NAME
        : process.env.EMAIL_TEST_FROM_NAME,
      address: isProd
        ? process.env.EMAIL_SYSTEM_FROM_ADDRESS
        : process.env.EMAIL_TEST_FROM_ADDRESS
    }
  },
  transport: {
    host: isProd ? process.env.EMAIL_HOST : process.env.EMAIL_TEST_HOST,
    port: isProd ? process.env.EMAIL_PORT : process.env.EMAIL_TEST_PORT,
    auth: {
      user: isProd ? process.env.EMAIL_USER : process.env.EMAIL_TEST_USER,
      pass: isProd ? process.env.EMAIL_PASS : process.env.EMAIL_TEST_PASS
    }
    // secure: false
    // tls: {
    //   rejectUnauthorized: false
    // },
    // debug: true, // show debug output
    // logger: true // log information in console
  }
}

const mailer = Mailer(mailerConfig)

export default mailer
