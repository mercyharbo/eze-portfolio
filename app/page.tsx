import { MarqueeSlide } from '@/components/marquee-slide'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
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
    </div>
  )
}
