export const fallbackLng = 'en'
export const languages = [fallbackLng, 'zh-CN']
export const defaultNS = 'common'
export const cookieName = 'lang'

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    // backend: {
    //   projectId: '01b2e5e8-6243-47d1-b36f-963dbb8bcae3'
    // }
  }
}

export type Lang = (typeof languages)[number]

export const LANG_LABEL_MAP: Record<Lang, string> = { en: 'English', 'zh-CN': '简体中文' }
