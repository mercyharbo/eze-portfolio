import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-4 md:py-6 flex items-center justify-between bg-background backdrop-blur-md transition-all duration-300'>
      <Link href='/' className='flex items-center gap-2 md:gap-4 group shrink-0'>
        <div className='relative'>
          <div className='size-9 rounded-full border border-primary/50 flex items-center justify-center bg-background p-2.5 transition-colors group-hover:border-primary'>
            <Image
              src='/svg/Vector.svg'
              alt='Chibueze Umechukwu Logo'
              width={20}
              height={20}
              className='brightness-0 invert'
            />
          </div>
        </div>
        <span className='text-sm sm:text-base md:text-xl font-medium tracking-tight text-foreground transition-colors group-hover:text-primary whitespace-nowrap'>
          Chibueze Umechukwu
        </span>
      </Link>

      <div className='flex items-center gap-2 md:gap-4'>
        <div className='hidden sm:flex items-center gap-2 md:gap-4'>
          <Link
            href='https://x.com/__chibueze'
            target='_blank'
            rel='noopener noreferrer'
            className='size-9 md:size-11 rounded-full border border-primary flex items-center justify-center text-foreground hover:bg-primary/20 transition-all duration-300'
            aria-label='X (formerly Twitter)'
          >
            <Image
              src='/new-twitter.svg'
              alt=''
              width={20}
              height={20}
              className='size-4 md:size-5'
            />
          </Link>
          <Link
            href='https://www.linkedin.com/in/chibueze-umechukwu/'
            target='_blank'
            rel='noopener noreferrer'
            className='size-9 md:size-11 rounded-full border border-primary flex items-center justify-center text-foreground hover:bg-primary/20 transition-all duration-300'
            aria-label='LinkedIn'
          >
            <Image
              src='/linkedin-02.svg'
              alt=''
              width={20}
              height={20}
              className='size-4 md:size-5'
            />
          </Link>
          <Link
            href="mailto:chibuezeumechukwu@gmail.com?subject=Let's%20Work%20Together"
            className='size-9 md:size-11 rounded-full border border-primary flex items-center justify-center text-foreground hover:bg-primary/20 transition-all duration-300'
            aria-label='Email'
          >
            <Image
              src='/mail-01.svg'
              alt=''
              width={20}
              height={20}
              className='size-4 md:size-5'
            />
          </Link>
        </div>

        <Link
          href="mailto:chibuezeumechukwu@gmail.com?subject=Let's%20Work%20Together"
        >
          <Button
            variant='ghost'
            aria-label='Send a message'
            className='relative h-9 md:h-11 rounded-full px-4 md:px-8 bg-background text-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:text-white group'
          >
            <div className='absolute inset-0 rounded-full p-px bg-linear-to-r from-primary via-transparent to-primary'>
              <div className='h-full w-full rounded-full bg-background' />
            </div>
            <span className='relative z-10 text-[10px] sm:text-xs md:text-sm font-medium'>
              <span className='md:hidden'>Message</span>
              <span className='hidden md:inline'>Send me a message</span>
            </span>
          </Button>
        </Link>
      </div>
    </header>
  )
}
