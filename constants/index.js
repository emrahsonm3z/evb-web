import * as Icons from '../components/icons/flags'

const HOST_URL = 'https://www.evb.com.tr'
const ORGANIZATION = 'Evb enerji ve bilisim'

const I18N_NAME = 'evb-lang'
const I18N_INITIAL_LANG = 'tr'

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
    Icon: require('../components/icons/Location').default,
    Text: '1474 sk. No:11 35220 Alsancak İZMİR'
  },
  {
    Id: 2,
    Icon: require('../components/icons/Envelope').default,
    Text: 'info@itsbilisim.com'
  },
  {
    Id: 3,
    Icon: require('../components/icons/Phone').default,
    Text: ' 0 (232) 488-21-00'
  },
  {
    Id: 4,
    Icon: require('../components/icons/Fax').default,
    Text: '0 (232) 488-21-01'
  }
]

const SOCIAL_MEDIAS = [
  {
    Title: 'facebook',
    Url: 'https://tr-tr.facebook.com/enerjivebilisim',
    Icon: require('../components/icons/social-media/Facebook').default
  },
  {
    Title: 'instagram',
    Url: 'https://www.instagram.com/evbenerjivebilisim',
    Icon: require('../components/icons/social-media/Instagram').default
  },
  {
    Title: 'linkedin',
    Url: 'https://lu.linkedin.com/company/evb-enerji-ve-bilisim-a-s',
    Icon: require('../components/icons/social-media/Linkedin').default
  },
  {
    Title: 'kariyer.net',
    Url:
      'https://www.kariyer.net/firma-profil/evb-enerji-bilisim-ve-iletisim-hizmetleri-a-s-18587-212063',
    Icon: require('../components/icons/social-media/Kariyer').default
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

const OFFICES = [
  {
    city: {
      tr: 'izmir (merkez ofis)',
      de: 'izmir (zentralbüro)'
    },
    address: '1474 Sokak No: 11 Alsancak',
    tel: '0(232) 488-21-00',
    email: 'info@itsbilisim.com',
    bg: '/assets/izmir.jpg'
  },
  {
    city: {
      tr: 'ankara',
      de: 'ankara'
    },
    address:
      'Eskişehiryolu Dumlupınar Blv 6a Armada İş Merkezi Kat: 15 Daire: 23 Yenimahalle',
    bg: '/assets/ankara.jpg'
  },
  {
    city: {
      tr: 'antalya',
      de: 'antalya'
    },
    address: 'Etiler, 829. Sk. D:No: 3 701/702, 07010 Muratpaşa',
    bg: '/assets/antalya.jpg'
  },
  {
    city: {
      tr: 'istanbul asya',
      de: 'istanbul asien'
    },
    address:
      'Aydınevler Mahallesi, Centrum Plaza, Sanayi Cd. No: 1 D:B Blok, 34854 Maltepe',
    bg: '/assets/istanbul-anadolu.jpg'
  },
  {
    city: {
      tr: 'istanbul avrupa',
      de: 'istanbul europa'
    },
    address: 'Gülbahar, Harman Yolu Üst Sokağı No: 4/3, 34394 Şişli',
    bg: '/assets/istanbul-avrupa.jpg'
  }
]

export {
  I18N_NAME,
  I18N_INITIAL_LANG,
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
  FAQS_SLIDER_ITEMS,
  OFFICES,
  HOST_URL,
  ORGANIZATION
}
