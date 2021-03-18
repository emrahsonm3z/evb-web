import { createContext } from 'react'
import { I18N_INITIAL_LANG } from '../constants'

const GlobalContext = createContext({
  language: I18N_INITIAL_LANG,
  setLanguage: () => {}
})

export default GlobalContext
