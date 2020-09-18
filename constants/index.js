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

export { Menui18nPrefix, Menu, Languages }
