import type { Metadata } from 'next'
import '../styles/index.css'
import { Providers } from './providers'
import { leadwayFont } from './fonts'
import '@quantum/design-tokens/styles.css';

export const metadata: Metadata = {
  title: 'Quantum Unified Intelligence',
  description: 'Leadway Product Hub — your one-stop access to the full suite of Leadway products and services.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={leadwayFont.variable}>
      <body style={{ fontFamily: 'var(--font-leadway), sans-serif' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
