import './globals.css'

import { headers } from 'next/headers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // NOTICE: headers() are called here
  // NOTICE: Using generateStaticParams with next/headers causes error:
  // Error: Dynamic server usage: headers
  // But if we disable it only in development, things would work.
  let mode: string
  if (process.env.NODE_ENV != 'development') {
    const h = headers()
    mode = h.get('Sec-CH-Prefers-Color-Scheme') ?? ''
  } else {
    mode = 'light'
  }

  return (
    <html className={mode} lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  )
}
