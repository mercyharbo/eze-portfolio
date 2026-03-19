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
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const CaseStudies = () => {
  return (
    <section className='reveal px-5 lg:px-10 py-16 '>
      <div className='max-w-7xl mx-auto space-y-20'>
        <div className='text-center'>
          <h2 className='reveal-header text-5xl font-accent text-foreground tracking-wide'>
            Case Studies
          </h2>
        </div>

        <div className='reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-10'>
          {PROJECTS.slice(0, 4).map((project) => (
            <Card
              key={project.id}
              className='group p-2 bg-navy border border-primary hover:border-primary/60 flex flex-col shadow-none h-auto overflow-hidden'
            >
              <CardHeader className='p-0'>
                {/* Project Image */}
                <div className='aspect-video w-full bg-[#E1E3E6]/5 rounded-2xl overflow-hidden relative mb-6'>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes='(max-width: 768px) 100vw, 50vw'
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-linear-to-br from-white/5 to-transparent' />
                </div>
                <CardTitle className='text-2xl px-4 font-bold text-foreground tracking-tight'>
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className='p-0 px-4 flex-1'>
                <CardDescription className='text-foreground underline decoration-primary/30 leading-relaxed text-base line-clamp-2'>
                  {project.overview}
                </CardDescription>
              </CardContent>

              <CardFooter className='p-4 flex items-center justify-between w-full'>
                <Link
                  href={`/projects/${project.id}`}
                  className='flex items-center gap-2 text-foreground text-sm font-semibold tracking-wide hover:gap-3 transition-all'
                >
                  <ArrowRight className='size-4 text-primary' />
                  View Project
                </Link>
                {project.visitUrl && (
                  <Link
                    href={project.visitUrl}
                    target='_blank'
                    className='flex items-center gap-2 text-foreground text-sm hover:text-primary transition-all'
                  >
                    Visit website
                    <ArrowUpRight className='size-4 text-primary' />
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
