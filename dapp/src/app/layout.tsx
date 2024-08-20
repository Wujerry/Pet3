import type { Metadata } from 'next'
import './globals.css'
import Web3Provider from './common/Web3Provider'

export const metadata: Metadata = {
  title: 'Pet3',
  description: 'Pet3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  )
}
