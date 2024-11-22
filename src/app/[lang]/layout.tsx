import './globals.css'
import { languages } from '@/locales/settings'
import type { PropsWithChildren } from 'react'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/theme-provider'
import { useTranslation } from '@/locales'

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }))
}

type Params = Promise<{ lang: string }>

export async function generateMetadata({ params }: { params: Params }) {
  const { lang } = await params
  const { t } = await useTranslation(lang)
  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<{ params: Params }>) {
  const { lang } = await params

  return (
    <html lang={lang}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header lang={lang} />
          <main className="container py-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
