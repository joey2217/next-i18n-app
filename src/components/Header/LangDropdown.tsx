'use client'

import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LANG_LABEL_MAP } from '@/locales/settings'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface Props {
  lang: string
}

const LangDropdown: React.FC<Props> = ({ lang }) => {
  const pathname = usePathname()
  const suffix = pathname.replace(`/${lang}`, '')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{LANG_LABEL_MAP[lang]}</DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.entries(LANG_LABEL_MAP).map(([l, label]) => (
          <DropdownMenuItem asChild key={l}>
            <Link href={`/${l}${suffix}`}>{label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LangDropdown
