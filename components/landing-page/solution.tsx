'use client'

export const Solution = () => {
  return (
    <section className='reveal px-5 lg:px-10 py-20 relative'>
      <div className='max-w-7xl mx-auto relative'>
        {/* Fading Grid Lines */}
        <div
          className='absolute inset-0 pointer-events-none'
          aria-hidden='true'
        >
          {/* Horizontal Lines */}
          <div className='absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent hidden lg:block' />
          <div className='absolute top-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent lg:hidden md:block' />
          <div className='absolute top-2/3 left-0 w-full h-px bg-linear-to-r from-transparent via-primary to-transparent lg:hidden md:block' />

          {/* Vertical Lines */}
          <div className='absolute top-0 left-1/3 w-px h-full bg-linear-to-b from-transparent via-primary to-transparent hidden lg:block' />
          <div className='absolute top-0 left-2/3 w-px h-full bg-linear-to-b from-transparent via-primary to-transparent hidden lg:block' />
          <div className='absolute top-0 left-1/2 w-px h-full bg-linear-to-b from-transparent via-primary to-transparent hidden md:block lg:hidden' />
        </div>

        <div className='reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10'>
          {/* Header Cell */}
          <div className='p-8 lg:p-12 space-y-4'>
            <h2 className='text-4xl font-accent text-foreground tracking-wide'>
              The Solution
            </h2>
            <p className='text-2xl leading-tight text-foreground'>
              How I Help Teams Build Better Products
            </p>
          </div>

          {/* Step 01 */}
          <div className='p-8 lg:p-12 space-y-6'>
            <span className='inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-foreground/50'>
              01
            </span>
            <p className='text-xl text-foreground/90'>Clarify the problem</p>
          </div>

          {/* Step 02 */}
          <div className='p-8 lg:p-12 space-y-6'>
            <span className='inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-foreground/50'>
              02
            </span>
            <p className='text-xl text-foreground/90'>Understand the users</p>
          </div>

          {/* Step 03 */}
          <div className='p-8 lg:p-12 space-y-6'>
            <span className='inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-foreground/50'>
              03
            </span>
            <p className='text-xl text-foreground/90'>
              Design clear, scalable solutions
            </p>
          </div>

          {/* Step 04 */}
          <div className='p-8 lg:p-12 space-y-6'>
            <span className='inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-foreground/50'>
              04
            </span>
            <p className='text-xl text-foreground/90'>
              Validate with real feedback
            </p>
          </div>

          {/* Step 05 */}
          <div className='p-8 lg:p-12 space-y-6'>
            <span className='inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-foreground/50'>
              05
            </span>
            <p className='text-xl text-foreground/90'>
              Deliver with confidence
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
