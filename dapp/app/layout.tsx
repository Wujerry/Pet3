import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import './globals.css'
import Web3Provider from './common/Web3Provider'
import clsx from 'clsx'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Pet3',
  description: 'Pet3',
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={clsx('dark font-sans antialiased', fontSans.variable)}>
        <Web3Provider>{children}</Web3Provider>
        <div id='pet3-wrapper'></div>
        <div
          id='pet3-handler'
          style={{ transform: `translate(var(--pet3-handler-x), var(--pet3-handler-y)) rotate(var(--pet3-rotate))` }}
        ></div>
        <div
          id='pet3-handler-efrog'
          style={{
            transform: `translate(var(--pet3-handler-efrog-x), var(--pet3-handler-efrog-y)) rotate(var(--pet3-efrog-rotate))`,
          }}
        ></div>
        <div id='pet3-lucky-box'>
          <div className='pet3-pl'>
            <div className='pet3-pl__coin'>
              <div className='pet3-pl__coin-flare'></div>
              <div className='pet3-pl__coin-flare'></div>
              <div className='pet3-pl__coin-flare'></div>
              <div className='pet3-pl__coin-flare'></div>
              <div className='pet3-pl__coin-layers'>
                <div className='pet3-pl__coin-layer'>
                  <div className='pet3-pl__coin-inscription'></div>
                </div>
                <div className='pet3-pl__coin-layer'></div>
                <div className='pet3-pl__coin-layer'></div>
                <div className='pet3-pl__coin-layer'></div>
                <div className='pet3-pl__coin-layer'>
                  <div className='pet3-pl__coin-inscription'></div>
                </div>
              </div>
            </div>
            <div className='pet3-pl__shadow'></div>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
