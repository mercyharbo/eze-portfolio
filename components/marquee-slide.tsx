'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { Button } from './ui/button'

export const MarqueeSlide = () => {
  const images = [
    '/1ede7bc5085f47bfb9a0f42eaaaa7e891be1e05e.png',
    '/01.png',
    '/02.png',
    '/03.png',
    '/04.png',
    '/05.png',
    '/08.png',
    '/13.png',
    '/14.png',
    '/15.png',
    '/16.png',
    '/17.png',
    '/18 Facity For MSME.jpg',
    '/access.jpg',
    '/consonance-1.png',
    '/LANDING PAGE 11 1.png',
  ]

  return (
    <div className='w-full overflow-hidden bg-background'>
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        <div className='flex gap-4 pr-4'>
          {images.map((src, index) => (
            <div key={index} className='h-[440px] shrink-0'>
              <Image
                src={src}
                alt={`UI design ${index + 1}`}
                width={0}
                height={0}
                sizes='100vh'
                className='h-full w-auto block rounded-xl border border-border/10'
              />
            </div>
          ))}
        </div>
      </Marquee>
      <div className='flex justify-center mt-12'>
        <Button
          variant='ghost'
          aria-label='View more UI designs'
          className='relative h-11 rounded-full px-8 bg-background text-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:text-white group flex items-center gap-2'
        >
          <div className='absolute inset-0 rounded-full p-px bg-linear-to-r from-primary via-transparent to-primary'>
            <div className='h-full w-full rounded-full bg-background' />
          </div>
          <div className='relative z-10 flex items-center gap-2'>
            <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
            <span className='text-sm font-medium'>More UI Designs</span>
          </div>
        </Button>
      </div>
    </div>
  )
}
