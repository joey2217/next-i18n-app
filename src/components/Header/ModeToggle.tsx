import * as React from 'react'
import { Moon, Sun } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTranslation } from '@/locales'
import ThemeMenuItem from './ThemeMenuItem'

interface Props {
  lang: string
}

export async function ModeToggle({ lang }: Props) {
  const { t } = await useTranslation(lang)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t('toggleTheme')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <ThemeMenuItem theme='light'>{t('light')}</ThemeMenuItem>
        <ThemeMenuItem theme='dark'>{t('dark')}</ThemeMenuItem>
        <ThemeMenuItem theme='system'>{t('system')}</ThemeMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
