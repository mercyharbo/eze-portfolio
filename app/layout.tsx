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
        <footer className='py-12 px-5 lg:px-10 border-t border-border/10 text-center'>
          <p className='text-sm text-foreground/60'>
            © {new Date().getFullYear()} Chibueze Umechukwu. Built with passion.
          </p>
        </footer>
      </body>
    </html>
  )
}
