import type { Metadata } from 'next'
import { Albert_Sans, Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const albertSans = Albert_Sans({
  variable: '--font-albert-sans',
  subsets: ['latin'],
})

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
  title: {
    default: 'Chibueze Umechukwu — Product Designer',
    template: '%s | Chibueze Umechukwu',
  },
  description:
    'Portfolio of Chibueze Umechukwu, a product designer focused on creating clear, usable experiences from complex ideas. Specializing in UI/UX design, user research, and digital product strategy.',
  keywords: [
    'Product Designer',
    'UI/UX Designer',
    'UX Researcher',
    'Digital Product Design',
    'User Experience',
    'User Interface',
    'Portfolio',
    'Chibueze Umechukwu',
    'Figma',
    'Web Design',
    'Mobile App Design',
  ],
  authors: [{ name: 'Chibueze Umechukwu' }],
  creator: 'Chibueze Umechukwu',
  publisher: 'Chibueze Umechukwu',
  metadataBase: new URL('https://chibuezeumechukwu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chibuezeumechukwu.com',
    siteName: 'Chibueze Umechukwu Portfolio',
    title: 'Chibueze Umechukwu — Product Designer',
    description:
      'Portfolio of Chibueze Umechukwu, a product designer focused on creating clear, usable experiences from complex ideas.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chibueze Umechukwu — Product Designer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chibueze Umechukwu — Product Designer',
    description:
      'Portfolio of Chibueze Umechukwu, a product designer focused on creating clear, usable experiences from complex ideas.',
    images: ['/og-image.png'],
    creator: '@chibuezeume',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark scroll-smooth'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${albertSans.variable} antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary`}
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
