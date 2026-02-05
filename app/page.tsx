import { MarqueeSlide } from '@/components/marquee-slide'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  DollarSign,
  Linkedin,
  Mail,
  Puzzle,
  Rocket,
  Twitter,
  User,
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen space-y-10'>
      {/* Hero Section */}
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

      {/* Marquee Portfolio Preview */}
      <MarqueeSlide />

      {/* The Problem Section */}
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
              <p className='text-xl text-foreground '>Teams struggle with:</p>

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

      {/* The Solution Section */}
      <section className='px-5 lg:px-10 py-32 relative'>
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

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10'>
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

      {/* Metrics & Impact Section */}
      <section className='px-5 lg:px-10 py-16 rounded-3xl bg-navy/80 backdrop-blur-sm relative mx-auto border border-primary/50 max-w-7xl overflow-hidden'>
        {/* Top Fade Mask to blend with previous section */}
        <div className='absolute top-0 left-0 w-full h-20 bg-linear-to-b from-background via-background/50 to-transparent z-20 pointer-events-none' />

        {/* Bottom Fade Mask to blend with next section */}
        <div className='absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-background via-background/50 to-transparent z-20 pointer-events-none' />

        {/* Subtle Background Glow */}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-primary/10 blur-[150px] -z-10' />

        <div className='max-w-7xl mx-auto relative z-10'>
          <div className='text-center space-y-6 mb-20'>
            <h2 className='text-4xl font-accent text-foreground tracking-wide'>
              No Guessworks
            </h2>
            <p className='text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground max-w-3xl mx-auto'>
              In the past{' '}
              <span className='text-primary font-semibold'>4 years</span>,
              I&apos;ve helped teams design and ship over{' '}
              <span className='text-primary font-semibold'>10 products</span>.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {[
              {
                metric: '$30,000',
                label: 'Revenue generated within the first 3 months of launch',
                icon: <DollarSign className='size-5 text-primary' />,
              },
              {
                metric: '30%',
                label: 'Reduction in onboarding drop-off rates.',
                icon: <ArrowDown className='size-5 text-primary' />,
              },
              {
                metric: '6',
                label: 'Live products currently used by real users.',
                icon: <Rocket className='size-5 text-primary' />,
              },
              {
                metric: '10+',
                label: 'Products designed end-to-end.',
                icon: <Puzzle className='size-5 text-primary' />,
              },
              {
                metric: '27%',
                label: 'Increase in monthly recurring revenue after redesign',
                icon: <ArrowUp className='size-5 text-primary' />,
              },
              {
                metric: '4,200+',
                label: 'Users onboarded within the first 30 days',
                icon: <User className='size-5 text-primary' />,
              },
              {
                metric: '25%',
                label: 'Decrease in usability-related support tickets',
                icon: <ArrowDown className='size-5 text-primary' />,
              },
              {
                metric: '35%',
                label: 'Increase in user engagement on key product flows.',
                icon: <ArrowUp className='size-5 text-primary' />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className='p-8 rounded-3xl bg-linear-to-br from-primary/10 to-background/50 border border-white/5 backdrop-blur-md flex flex-col justify-between h-48 group hover:from-primary/20 hover:to-background transition-all duration-500'
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

      {/* Case Studies Section */}
      <section className='px-5 lg:px-10 py-32 '>
        <div className='max-w-7xl mx-auto space-y-20'>
          <div className='text-center'>
            <h2 className='text-5xl font-accent text-foreground tracking-wide'>
              Case Studies
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {[1, 2, 3, 4].map((i) => (
              <Card
                key={i}
                className='group p-2 bg-navy border border-primary hover:border-primary/60 transition-all duration-500 flex flex-col shadow-none h-auto overflow-hidden'
              >
                <CardHeader className='p-0'>
                  {/* Project Image Placeholder */}
                  <div className='aspect-video w-full bg-[#E1E3E6]/5 rounded-2xl overflow-hidden relative mb-6'>
                    <div className='absolute inset-0 bg-linear-to-br from-white/5 to-transparent' />
                    <div className='size-full flex items-center justify-center'>
                      <div className='size-20 bg-primary/5 rounded-full blur-2xl' />
                    </div>
                  </div>
                  <CardTitle className='text-2xl px-4 font-bold text-foreground tracking-tight'>
                    Name of Project
                  </CardTitle>
                </CardHeader>
                <CardContent className='p-0 px-4 flex-1'>
                  <CardDescription className='text-foreground leading-relaxed text-base'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard.
                  </CardDescription>
                </CardContent>

                <CardFooter className='p-4 flex items-center justify-between w-full'>
                  <Link
                    href='#'
                    className='flex items-center gap-2 text-foreground text-sm font-semibold tracking-wide hover:gap-3 transition-all'
                  >
                    <ArrowRight className='size-4 text-primary' />
                    View Project
                  </Link>
                  <Link
                    href='#'
                    className='flex items-center gap-2 text-foreground text-sm hover:text-primary transition-all'
                  >
                    Visit website
                    <ArrowUpRight className='size-4 text-primary' />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* More Design Projects Section */}
      <section className='px-5 lg:px-10 py-32 bg-background'>
        <div className='max-w-7xl mx-auto space-y-16'>
          <div className='text-center'>
            <h2 className='text-4xl font-accent text-foreground tracking-wide'>
              More Design Projects
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className='group bg-navy/50 p-2 border border-primary/20 hover:border-primary/40 transition-all duration-300 flex flex-col shadow-none gap-0 overflow-hidden h-auto'
              >
                <CardHeader className='p-0 flex flex-col gap-2'>
                  {/* Visual Placeholder */}
                  <div className='aspect-square w-full bg-[#E1E3E6]/5 rounded-2xl overflow-hidden mb-6 relative'>
                    <div className='absolute inset-0 bg-linear-to-br from-white/5 to-transparent' />
                  </div>
                  <CardTitle className='text-xl px-4 font-bold text-foreground'>
                    Name of Project
                  </CardTitle>
                </CardHeader>
                <CardContent className='px-4 flex-1'>
                  <CardDescription className='text-sm text-foreground/90 leading-relaxed'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </CardDescription>
                </CardContent>

                <CardFooter className='p-3 flex items-center justify-between w-full'>
                  <Link
                    href='#'
                    className='flex items-center gap-2 text-foreground/80 text-xs font-semibold hover:text-primary transition-colors'
                  >
                    <ArrowRight className='size-3.5 text-primary' />
                    View Project
                  </Link>

                  <div className='p-2 rounded-full border border-primary text-primary group-hover:bg-primary/5 transition-colors'>
                    <ArrowUpRight className='size-4 text-primary' />
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Me Section */}
      <section className='relative py-32 px-5 lg:px-10 overflow-hidden bg-background'>
        {/* Full-Width Atmospheric Glow */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute inset-0 bg-linear-to-r from-primary/30 via-primary/20 to-primary/15 blur-[150px]' />
        </div>

        {/* Top Fade Mask to blend with previous section */}
        <div className='absolute top-0 left-0 w-full h-10 bg-linear-to-b from-background via-background/50 to-transparent z-20 pointer-events-none' />

        {/* Bottom Fade Mask to blend with footer */}
        <div className='absolute bottom-0 left-0 w-full h-10 bg-linear-to-t from-background via-background/50 to-transparent z-20 pointer-events-none' />

        <div className='max-w-7xl mx-auto relative py-20 z-10'>
          <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
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
                I&apos;m an Experience Designer who&apos;s obsessed with
                building clean, thoughtful digital experiences that just feel
                right. I design high-quality websites and products that balance
                aesthetics, usability, and business goals because pretty pixels
                mean nothing if users are confused. I care about experiences
                that feel intuitive, inclusive, and kind of addictive.
              </p>

              <div className='flex items-center gap-4'>
                <Link
                  href='#'
                  className='size-12 rounded-full border border-primary flex items-center justify-center text-foreground hover:bg-primary/20 transition-all duration-300'
                  aria-label='X (formerly Twitter)'
                >
                  <Twitter className='size-5' />
                </Link>
                <Link
                  href='#'
                  className='size-12 rounded-full border border-primary flex items-center justify-center text-foreground hover:bg-primary/20 transition-all duration-300'
                  aria-label='LinkedIn'
                >
                  <Linkedin className='size-5' />
                </Link>
                <Link
                  href='#'
                  className='size-12 rounded-full border border-primary flex items-center justify-center text-foreground hover:bg-primary/20 transition-all duration-300'
                  aria-label='Email'
                >
                  <Mail className='size-5' />
                </Link>
              </div>
            </div>

            {/* Visual Elements */}
            <div className='flex-1 w-full grid grid-cols-12 gap-4 h-[400px]'>
              <div className='col-span-4 bg-[#E1E3E6]/5 rounded-2xl border border-white/5 relative overflow-hidden'>
                <div className='absolute inset-0 bg-linear-to-b from-white/5 to-transparent' />
              </div>
              <div className='col-span-8 bg-[#E1E3E6]/5 rounded-2xl border border-white/5 relative overflow-hidden'>
                <div className='absolute inset-0 bg-linear-to-br from-white/5 to-transparent' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
