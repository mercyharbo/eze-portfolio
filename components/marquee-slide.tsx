'use client'

import Marquee from 'react-fast-marquee'

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
              className={`${item.width} h-64 bg-[#E1E3E6]/10 rounded-lg animate-pulse border border-border/10`}
            />
          ))}
        </div>
      </Marquee>
    </div>
  )
}
