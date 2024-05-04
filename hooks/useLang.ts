import translationsJSON from '@/utils/translations.json'
import { useAppSelector } from './reduxHooks'

const useLang = () => {
  const lang: string = useAppSelector((store) => {
    return store.lang.langCombine.lang
  })
  const translations = translationsJSON

  return translations[lang]
}

export default useLang
