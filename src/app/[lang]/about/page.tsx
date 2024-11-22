import { useTranslation } from '@/locales'

type Params = Promise<{ lang: string }>

export default async function Page({ params }: { params: Params }) {
  const { lang } = await params
  const { t } = await useTranslation(lang)
  return <h2>{t('welcomeAbout')}</h2>
}
