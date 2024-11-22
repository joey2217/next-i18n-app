import { useTranslation } from '@/locales'

type Params = Promise<{ lang: string }>

export default async function Home({ params }: { params: Params }) {
  const { lang } = await params
  const { t } = await useTranslation(lang)
  return <h1>{t('welcome')}</h1>
}
