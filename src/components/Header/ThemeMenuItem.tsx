'use client'

import React, { PropsWithChildren } from 'react'
import { DropdownMenuItem } from '../ui/dropdown-menu'
import { useTheme } from 'next-themes'

interface Props {
  theme: string
}

const ThemeMenuItem: React.FC<PropsWithChildren & Props> = ({
  children,
  theme,
}) => {
  const { setTheme } = useTheme()
  return (
    <DropdownMenuItem onClick={() => setTheme(theme)}>
      {children}
    </DropdownMenuItem>
  )
}

export default ThemeMenuItem
