'use client'

import { User, ShoppingBag, Wallet, ArrowUpDown, Users, IdCard } from 'lucide-react'
import Image from 'next/image'

export const Metrics = () => {
  return (
    <div className='px-5 lg:px-10'>
      <section className='reveal px-5 lg:px-10 py-16 rounded-3xl bg-navy/80 backdrop-blur-sm relative mx-auto border border-primary/50 max-w-7xl overflow-hidden'>
        {/* Top Fade Mask to blend with previous section */}
        <div className='absolute top-0 left-0 w-full h-20 bg-linear-to-b from-background via-background/50 to-transparent z-20 pointer-events-none' />

        {/* Bottom Fade Mask to blend with next section */}
        <div className='absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-background via-background/50 to-transparent z-20 pointer-events-none' />

        {/* Subtle Background Glow */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-primary/10 blur-[150px] -z-10' />

        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='text-center space-y-6 mb-20'>
            <h2 className='reveal-header text-4xl font-accent text-foreground tracking-wide'>
              No Guessworks
            </h2>
            <p className='text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground max-w-3xl mx-auto'>
              In the past{' '}
              <span className='text-primary font-semibold'>4 years</span>,
              I&apos;ve helped teams design and ship over{' '}
              <span className='text-primary font-semibold'>5 products</span>.
            </p>
          </div>

          <div className='reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                metric: '$30,000',
                label: 'Revenue generated within the first 3 months of launch',
                icon: (
                  <Image
                    src='/money-receive-circle.svg'
                    alt=''
                    width={20}
                    height={20}
                    className='size-5'
                  />
                ),
              },
              {
                metric: '700+',
                label: 'Customers onboarded within the first 14 days.',
                icon: <User className='size-5 text-primary' />,
              },
              {
                metric: '3,000+',
                label: 'Orders fulfilled within the first 4 months of launch.',
                icon: <ShoppingBag className='size-5 text-primary' />,
              },
              {
                metric: '5',
                label: 'Live products currently used by real users.',
                icon: (
                  <Image
                    src='/rocket-01.svg'
                    alt=''
                    width={20}
                    height={20}
                    className='size-5'
                  />
                ),
              },
              {
                metric: '₦4M+',
                label: 'Transaction volume within the first 3 months of launch.',
                icon: <Wallet className='size-5 text-primary' />,
              },
              {
                metric: '5,500+',
                label: 'Total transaction count within the first 3 months of launch.',
                icon: <ArrowUpDown className='size-5 text-primary' />,
              },
              {
                metric: '4,400+',
                label: 'Total users within the first 3 months of launch.',
                icon: <Users className='size-5 text-primary' />,
              },
              {
                metric: '1,900+',
                label: 'Activated users within the first 3 months of launch.',
                icon: <IdCard className='size-5 text-primary' />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className='p-8 rounded-3xl bg-linear-to-br from-primary/10 to-background/50 border border-white/5 backdrop-blur-md flex flex-col justify-between h-48 group hover:from-primary/20 hover:to-background'
              >
                <div className='flex justify-between items-start'>
                  <span className='text-3xl text-foreground tracking-tight'>
                    {item.metric}
                  </span>
                  <div className='p-2 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center'>
                    {item.icon}
                  </div>
                </div>
                <p className='text-sm text-foreground/60 leading-relaxed max-w-[90%]'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
