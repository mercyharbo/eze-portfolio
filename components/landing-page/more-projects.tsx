'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { PROJECTS } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const MoreProjects = () => {
  return (
    <section className='reveal px-5 lg:px-10 py-16 bg-background'>
      <div className='max-w-7xl mx-auto space-y-16'>
        <div className='text-center'>
          <h2 className='reveal-header text-4xl font-accent text-foreground tracking-wide'>
            More Design Projects
          </h2>
        </div>

        <div className='reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {PROJECTS.slice(-3).map((project) => (
            <Card
              key={project.id}
              className='group bg-navy/50 p-2 gap-3 border border-primary/20 hover:border-primary/40 flex flex-col shadow-none overflow-hidden h-auto'
            >
              <CardHeader className='p-0 flex flex-col gap-2 '>
                {/* Visual Placeholder */}
                <div className='aspect-square w-full bg-white rounded-2xl overflow-hidden h-70 relative'>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-contain transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-linear-to-br from-white/5 to-transparent' />
                </div>
                <CardTitle className='text-xl px-4 font-bold text-foreground'>
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className='px-4 flex-1'>
                <CardDescription className='text-sm text-foreground/90 leading-relaxed line-clamp-3'>
                  {project.overview}
                </CardDescription>
              </CardContent>

              <CardFooter className='p-3 flex items-center justify-between w-full'>
                <Link
                  href={`/projects/${project.id}`}
                  className='flex items-center gap-2 text-foreground/80 text-xs font-semibold hover:text-primary transition-colors'
                >
                  <ArrowRight className='size-3.5 text-primary' />
                  View Project
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
