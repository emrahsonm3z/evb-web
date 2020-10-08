import * as Icons from '../components/icons/flags'

const Menui18nPrefix = 'Menu'
const Menu = ['AboutUs', 'OurServices', 'Team', 'Faqs', 'Contact', 'Apply']
// Menu.AboutUs

const Languages = [
  {
    lang: 'tr',
    text: 'Turkish',
    icon: <Icons.Turkey />
  },
  // {
  //   lang: 'en',
  //   text: 'English',
  //   icon: <Icons.Us />
  // },
  {
    lang: 'de',
    text: 'German',
    icon: <Icons.Germany />
  }
]

const MAX_FULLNAME = 40
const MAX_EMAIL = 40
const MAX_MESSAGE = 1000
const PHONE_REG_EXP = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const FILE_SIZE = 10 * 1024 * 1024
const SUPPORTED_FORMATS = [
  {
    extension: '.doc',
    mimeType: 'application/msword'
  },
  {
    extension: '.docx',
    mimeType:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  },
  {
    extension: '.pdf',
    mimeType: 'application/pdf'
  }
]

export {
  Menui18nPrefix,
  Menu,
  Languages,
  MAX_FULLNAME,
  MAX_EMAIL,
  MAX_MESSAGE,
  PHONE_REG_EXP,
  FILE_SIZE,
  SUPPORTED_FORMATS
}
