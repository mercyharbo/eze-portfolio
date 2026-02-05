import { MarqueeSlide } from '@/components/marquee-slide'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen space-y-10'>
      <section
        aria-labelledby='hero-heading'
        className='relative min-h-[50vh] flex flex-col items-center justify-center text-center px-5 lg:px-10 pt-20 overflow-hidden'
      >
        <header className='max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out'>
          <div className='flex flex-col items-center gap-4'>
            <div className='flex items-center justify-center gap-2 group animate-bounce-subtle'>
              <p className='text-2xl text-foreground tracking-wide font-accent'>
                Hello
              </p>
              <span className='text-3xl' role='img' aria-label='Waving hand'>
                👋
              </span>
            </div>

            <h1
              id='hero-heading'
              className='text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground'
            >
              I&apos;m a product designer that turns{' '}
              <span className='text-primary font-semibold inline-block'>
                complex ideas
              </span>{' '}
              into{' '}
              <span className='text-primary font-semibold inline-block'>
                clear
              </span>
              ,{' '}
              <span className='text-primary font-semibold inline-block'>
                usable experiences
              </span>
              .
            </h1>
          </div>
        </header>
      </section>

      <MarqueeSlide />

      <section className='relative py-24 px-5 lg:px-10 bg-[#09111A] overflow-hidden'>
        {/* Full-Width Primary Glow Effect (Haze) */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15)_0%,transparent_60%)] blur-[100px]' />
          <div className='absolute bottom-[-20%] right-[-10%] w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(27,49,75,0.4)_0%,transparent_50%)]' />
        </div>

        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='space-y-12'>
            <div className='space-y-6 max-w-xl'>
              <h2 className='text-4xl font-accent text-foreground tracking-wide'>
                The Problem
              </h2>
              <p className='text-lg md:text-xl lg:text-3xl leading-[1.3] text-foreground tracking-tight'>
                Many products fail not because of bad ideas, but because users
                get confused, stuck, or disengaged.
              </p>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8'>
              <p className='text-xl text-foreground '>
                Teams struggle with:
              </p>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full lg:w-auto'>
                {[
                  'Unclear user flows',
                  'Many feature overload',
                  'Weak product direction',
                ].map((item, i) => (
                  <div
                    key={i}
                    className='px-6 py-5 rounded-xl border border-primary transition-all duration-300 w-full md:w-48 lg:w-40'
                  >
                    <p className='text-sm leading-[1.4] text-foreground/90'>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
