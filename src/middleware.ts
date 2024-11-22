import { NextResponse } from 'next/server'
import Negotiator from 'negotiator'
import type { NextRequest } from 'next/server'
import { languages, fallbackLng, cookieName } from './locales/settings'

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  const headers = {
    'accept-language':
      request.headers.get('Accept-Language') || 'en-US,en;q=0.5',
  }
  const language = new Negotiator({
    headers,
  }).language(languages)

  return language || fallbackLng
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  let locale = languages.find(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  )
  const cookieLang = request.cookies.get(cookieName)
  const hasCoolieLang = cookieLang && languages.includes(cookieLang.value)
  if (locale) {
    if (!hasCoolieLang || cookieLang.value !== locale) {
      const res = NextResponse.next()
      res.cookies.set(cookieName, locale, { maxAge: 60 * 60 * 24 * 365 })
      return res
    }
    return NextResponse.next()
  }
  if (hasCoolieLang) {
    locale = cookieLang.value
  } else {
    locale = getLocale(request)
  }
  request.nextUrl.pathname = `/${locale}/${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next|favicon.ico|engine).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
