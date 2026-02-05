import { Button } from '@/components/ui/button'
import Image from 'next/image'

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 px-5 lg:px-10 py-4 flex items-center justify-between bg-background backdrop-blur-md'>
      <div className='flex items-center gap-4'>
        <div className='relative'>
          <div className='size-9 rounded-full border border-primary/50 flex items-center justify-center bg-background p-2.5'>
            <Image
              src='/svg/Vector.svg'
              alt='Chibueze Umechukwu Logo'
              width={20}
              height={20}
              className='brightness-0 invert'
            />
          </div>
        </div>
        <span className='text-xl font-medium tracking-tight text-foreground'>
          Chibueze Umechukwu
        </span>
      </div>

      <Button
        variant='ghost'
        aria-label='Send a message'
        className='relative h-11 rounded-full px-8 bg-background text-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] group'
      >
        <div className='absolute inset-0 rounded-full p-px bg-linear-to-r from-primary via-transparent to-primary'>
          <div className='h-full w-full rounded-full bg-background' />
        </div>
        <span className='relative z-10 text-sm font-medium'>
          Send me a message
        </span>
      </Button>
    </header>
  )
}
