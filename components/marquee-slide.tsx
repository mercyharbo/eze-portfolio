'use client'

import { ArrowRight } from 'lucide-react'
import Marquee from 'react-fast-marquee'
import { Button } from './ui/button'

export const MarqueeSlide = () => {
  const skeletons = [
    { width: 'w-64' },
    { width: 'w-48' },
    { width: 'w-96' },
    { width: 'w-72' },
    { width: 'w-40' },
    { width: 'w-56' },
    { width: 'w-56' },
    { width: 'w-56' },
  ]

  return (
    <div className='w-full overflow-hidden bg-background'>
      <Marquee speed={40} gradient={false} pauseOnHover={true}>
        <div className='flex gap-4 pr-4'>
          {skeletons.map((item, index) => (
            <div
              key={index}
              className={`${item.width} h-64 bg-[#E1E3E6]/10 rounded-lg border border-border/10`}
            />
          ))}
        </div>
      </Marquee>
      <div className='flex justify-center mt-12'>
        <Button
          variant='ghost'
          aria-label='View more UI designs'
          className='relative h-11 rounded-full px-8 bg-background text-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] group flex items-center gap-2'
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
