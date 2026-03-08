'use client'

import Image from 'next/image'
import Link from 'next/link'

export const MeetMe = () => {
  return (
    <section className='reveal relative py-16 px-5 lg:px-10 overflow-hidden bg-background'>
      {/* Full-Width Atmospheric Glow */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute inset-0 bg-linear-to-r from-primary/30 via-primary/20 to-primary/15 blur-[150px]' />
      </div>

      {/* Top Fade Mask to blend with previous section */}
      <div className='absolute top-0 left-0 w-full h-10 bg-linear-to-b from-background via-background/50 to-transparent z-20 pointer-events-none' />

      {/* Bottom Fade Mask to blend with footer */}
      <div className='absolute bottom-0 left-0 w-full h-10 bg-linear-to-t from-background via-background/50 to-transparent z-20 pointer-events-none' />

      <div className='max-w-7xl mx-auto relative py-20 z-10'>
        <div className='reveal-stagger flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
          {/* Bio Content */}
          <div className='flex-1 space-y-8'>
            <div className='space-y-4'>
              <h2 className='text-5xl font-accent text-foreground tracking-wide'>
                Meet Me
              </h2>
              <div className='space-y-1'>
                <p className='text-sm text-foreground tracking-widest'>
                  My name is
                </p>
                <h3 className='text-4xl md:text-5xl font-bold text-foreground tracking-tight'>
                  Chibueze Umechukwu
                </h3>
              </div>
            </div>

            <p className='text-lg text-foreground leading-relaxed max-w-xl'>
              I&apos;m an Experience Designer who&apos;s obsessed with building
              clean, thoughtful digital experiences that just feel right. I
              design high-quality websites and products that balance aesthetics,
              usability, and business goals because pretty pixels mean nothing
              if users are confused. I care about experiences that feel
              intuitive, inclusive, and kind of addictive.
            </p>

            <div className='flex items-center gap-4'>
              <Link
                href='#'
                className='size-12 rounded-full border border-primary flex items-center justify-center text-foreground hover:bg-primary/20 transition-all duration-300'
                aria-label='X (formerly Twitter)'
              >
                <Image
                  src='/new-twitter.svg'
                  alt=''
                  width={20}
                  height={20}
                  className='size-5'
                />
              </Link>
              <Link
                href='#'
                className='size-12 rounded-full border border-primary flex items-center justify-center text-foreground hover:bg-primary/20 transition-all duration-300'
                aria-label='LinkedIn'
              >
                <Image
                  src='/linkedin-02.svg'
                  alt=''
                  width={20}
                  height={20}
                  className='size-5'
                />
              </Link>
              <Link
                href='#'
                className='size-12 rounded-full border border-primary flex items-center justify-center text-foreground hover:bg-primary/20 transition-all duration-300'
                aria-label='Email'
              >
                <Image
                  src='/mail-01.svg'
                  alt=''
                  width={20}
                  height={20}
                  className='size-5'
                />
              </Link>
            </div>
          </div>

          {/* Visual Elements */}
          <div className='lg:flex-[1.4] w-full grid grid-cols-12 gap-4 h-[250px] md:h-[400px]'>
            <div className='col-span-4 bg-[#E1E3E6]/5 rounded-2xl border border-white/5 relative overflow-hidden'>
              <Image
                src='/14bb712425765d20ab2d1e18035aa891d3a590b6.png'
                alt=''
                fill
                sizes='(max-width: 1024px) 33vw, 20vw'
                className='object-cover'
              />
              <div className='absolute inset-0 bg-linear-to-b from-white/5 to-transparent z-10' />
            </div>
            <div className='col-span-8 bg-[#E1E3E6]/5 rounded-2xl border border-white/5 relative overflow-hidden'>
              <Image
                src='/14bb712425765d20ab2d1e18035aa891d3a590b6-1.png'
                alt=''
                fill
                sizes='(max-width: 1024px) 67vw, 40vw'
                className='object-cover'
              />
              <div className='absolute inset-0 bg-linear-to-br from-white/5 to-transparent z-10' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
