import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Chibueze Umechukwu — Product Designer',
  description:
    'Portfolio of Chibueze Umechukwu, a product designer focused on creating clear and usable experiences from complex ideas.',
  keywords: ['Product Design', 'UI/UX', 'Portfolio', 'Chibueze Umechukwu'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary`}
      >
        <Header />
        <main id='main-content' className='min-h-screen pt-20'>
          {children}
        </main>
        <footer className='px-5 lg:px-10 relative'>
          <div className='max-w-7xl py-16 mx-auto flex flex-col items-center justify-center relative'>
            <div className='relative flex items-center justify-center w-full min-h-[200px]'>
              {/* Massive Faded Background Text */}
              <h2 className='text-[18vw] md:text-[14vw] font-bold text-foreground/5 select-none tracking-tighter leading-none capitalize'>
                Say Hello
              </h2>

              {/* Foreground Accent Text (100% Opacity) */}
              <p className='absolute text-3xl md:text-5xl font-accent text-foreground tracking-widest opacity-100 z-10'>
                Got a project?
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
