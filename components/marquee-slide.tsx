'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import { Button } from './ui/button'
import Link from 'next/link'

export const MarqueeSlide = () => {
  const images = [
    '/UI Designs Carousel/01.png',
    '/UI Designs Carousel/02.png',
    '/UI Designs Carousel/03.png',
    '/UI Designs Carousel/04.png',
    '/UI Designs Carousel/05.png',
    '/UI Designs Carousel/07.png',
    '/UI Designs Carousel/08.png',
    '/UI Designs Carousel/09.png',
    '/UI Designs Carousel/10.png',
    '/UI Designs Carousel/11.png',
    '/UI Designs Carousel/12.png',
    '/UI Designs Carousel/13.png',
    '/UI Designs Carousel/14.png',
    '/UI Designs Carousel/15.png',
    '/UI Designs Carousel/16.png',
    '/UI Designs Carousel/17.png',
    '/UI Designs Carousel/18.png',
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
        <Link 
          href='https://dribbble.com/ConradEze' 
          target='_blank' 
          rel='noopener noreferrer'
        >
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
        </Link>
      </div>
    </div>
  )
}
