'use client'

import i18next, {  } from 'i18next'
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { getOptions, languages } from './settings'

const runsOnServerSide = typeof window === 'undefined'

// on client side the normal singleton is ok
i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./${language}/${namespace}.json`)
    )
  )
  // .use(LocizeBackend) // locize backend could be used on client side, but prefer to keep it in sync with server side
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  })

export const useClientTranslation = useTranslationOrg

//https://github.com/i18next/next-app-dir-i18next-example-ts/blob/main/app/i18n/client.ts
// export function useClientTranslation<
//   Ns extends FlatNamespace,
//   KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined
// >(
//   lng: string,
//   ns?: Ns,
//   options?: UseTranslationOptions<KPrefix>
// ): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
//   const [cookies, setCookie] = useCookies([cookieName])
//   const ret = useTranslationOrg(ns, options)
//   const { i18n } = ret
//   const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage)

//   useEffect(() => {
//     if (activeLng === i18n.resolvedLanguage) return
//     setActiveLng(i18n.resolvedLanguage)
//   }, [activeLng, i18n.resolvedLanguage])

//   useEffect(() => {
//     if (!lng || i18n.resolvedLanguage === lng) return
//     i18n.changeLanguage(lng)
//   }, [lng, i18n])

//   useEffect(() => {
//     if (cookies[cookieName] === lng) return
//     setCookie(cookieName, lng, { path: '/', maxAge: -1 })
//   }, [cookies, lng, setCookie])

//   return ret
// }
