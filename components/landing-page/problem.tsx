'use client'

import Image from 'next/image'

export const Problem = () => {
  return (
    <section className='reveal relative py-24 px-5 lg:px-10 bg-[#09111A] overflow-hidden'>
      {/* Full-Width Primary Glow Effect (Haze) */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15)_0%,transparent_60%)] blur-[100px]' />
        <div className='absolute bottom-[-20%] right-[-10%] w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(27,49,75,0.4)_0%,transparent_50%)]' />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-16 w-full'>
          {/* Left Content Column */}
          <div className='space-y-20 max-w-xl flex flex-col justify-between'>
            <div className='space-y-6'>
              <h2 className='reveal-header text-4xl font-accent text-foreground tracking-wide'>
                The Problem
              </h2>
              <p className='text-lg md:text-xl lg:text-3xl leading-[1.3] text-foreground tracking-tight'>
                Many products fail not because of bad ideas, but because users
                get confused, stuck, or disengaged.
              </p>
            </div>

            <p className='text-xl text-foreground '>Teams struggle with:</p>
          </div>

          {/* Right Cards Column */}
          <div className='flex-1 flex justify-end w-full'>
            <div className='reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8 w-full lg:w-auto items-end justify-items-center'>
              {[
                { text: 'Unclear user flows', size: 'h-24 w-24' },
                { text: 'Weak product direction', size: 'h-40 w-40' },
                { text: 'Many feature overload', size: 'h-24 w-24' },
              ].map((item, i) => (
                <div
                  key={i}
                  className='flex flex-col items-center gap-4 w-full md:w-44 lg:w-36'
                >
                  <div className={`relative ${item.size} hidden md:block`}>
                    <Image
                      src='/mark.svg'
                      alt=''
                      fill
                      sizes='160px'
                      className='object-contain'
                    />
                  </div>
                  {/* Scribble Shade */}
                  <div className='relative h-10 w-10 -mt-3 mb-2 hidden md:block'>
                    <Image
                      src='/shade.svg'
                      alt=''
                      fill
                      sizes='40px'
                      className='object-contain opacity-90'
                    />
                  </div>
                  <div className='px-6 py-5 rounded-xl border border-primary transition-all duration-300 w-full'>
                    <p className='text-lg md:text-sm leading-[1.4] text-foreground/90'>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
