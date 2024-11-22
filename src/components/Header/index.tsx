import React from 'react'
import LangDropdown from './LangDropdown'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'
import { useTranslation } from '@/locales'

interface Props {
  lang: string
}

const Header: React.FC<Props> = async ({ lang }) => {
  const { t } = await useTranslation(lang)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border">
      <div className="flex h-14 items-center px-4 container gap-4">
        <Link href="/" className="text-lg font-bold">
          {t('title')}
        </Link>
        <nav className="flex gap-2 mr-auto">
          <Link href="/about">{t('about')}</Link>
        </nav>
        <ModeToggle lang={lang} />
        <LangDropdown lang={lang} />
      </div>
    </header>
  )
}

export default Header
