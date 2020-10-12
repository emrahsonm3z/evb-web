import * as Icons from '../components/icons/flags'
import { Envelope, Fax, Location, Phone } from '../components/icons'
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from '../components/icons/social-media'

import { useTransition } from '../i18n'

const LANGUAGES = [
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

const HERO_SLIDER_ITEMS = [
  {
    id: 1,
    className: 'slide1'
  },
  {
    id: 2,
    className: 'slide2'
  },
  {
    id: 3,
    className: 'slide3'
  }
]

const MENU_PREFIX = 'Menu'
// Menu.AboutUs
const MENU = [
  {
    id: 'menu-item-475',
    text: 'OurServices',
    href: 'ourservices',
    isSection: true
  },
  {
    id: 'menu-item-477',
    text: 'Faqs',
    href: 'faqs',
    isSection: true
  },
  {
    id: 'menu-item-478',
    text: 'Contact',
    href: 'contact',
    isSection: false
  },
  {
    id: 'menu-item-479',
    text: 'Apply',
    href: 'apply',
    primary: true,
    isSection: false
  }
]

const CONTACT_INFORMATIONS = [
  {
    Id: 1,
    Icon: <Location />,
    Text: '1474 sk. No:11 35220 Alsancak İZMİR'
  },
  {
    Id: 2,
    Icon: <Envelope />,
    Text: 'info@itsbilisim.com'
  },
  {
    Id: 3,
    Icon: <Phone />,
    Text: ' 0 (232) 488-21-00'
  },
  {
    Id: 4,
    Icon: <Fax />,
    Text: '0 (232) 488-21-01'
  }
]

const SOCIAL_MEDIAS = [
  {
    Title: 'facebook',
    Url: '#',
    Icon: <Facebook />
  },
  {
    Title: 'instagram',
    Url: '#',
    Icon: <Instagram />
  },
  {
    Title: 'twitter',
    Url: '#',
    Icon: <Twitter />
  },
  {
    Title: 'linkedin',
    Url: '#',
    Icon: <Linkedin />
  }
]

const CITIES_WE_ARE_IN = {
  tr: ['İzmir', 'İstanbul Avrupa', 'İstanbul Asya', 'Ankara', 'Antalya'],
  de: ['İzmir', 'İstanbul Europa', 'İstanbul Asien', 'Ankara', 'Antalya']
}

const NUMBER_OF_EMPLOYEE = '450+'
const NUMBER_OF_CUSTOMER = '1,5 M'

const FAQS_SLIDER_ITEMS = [
  {
    id: 1,
    className: 'workingHours'
  },
  {
    id: 2,
    className: 'breaks'
  },
  {
    id: 3,
    className: 'mealAllowance'
  },
  {
    id: 4,
    className: 'bonus'
  },
  {
    id: 5,
    className: 'overtime'
  }
]

export {
  MENU_PREFIX,
  MENU,
  LANGUAGES,
  MAX_FULLNAME,
  MAX_EMAIL,
  MAX_MESSAGE,
  PHONE_REG_EXP,
  FILE_SIZE,
  SUPPORTED_FORMATS,
  HERO_SLIDER_ITEMS,
  CONTACT_INFORMATIONS,
  SOCIAL_MEDIAS,
  CITIES_WE_ARE_IN,
  NUMBER_OF_EMPLOYEE,
  NUMBER_OF_CUSTOMER,
  FAQS_SLIDER_ITEMS
}
