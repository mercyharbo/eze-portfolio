'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { PROJECTS } from '@/lib/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowLeft,
  ArrowUpRight,
  Box,
  CircleDollarSign,
  Users,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export interface ProjectDetailsProps {
  projectId: string
}

export function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const project = PROJECTS.find((p) => p.id === projectId)
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Set initial states to prevent FOUC
      gsap.set('.reveal-up', { y: 40, opacity: 0 })
      gsap.set('.reveal-image', { scale: 1.05, opacity: 0 })

      // Entrance Animations
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 1 },
      })

      tl.to('.reveal-up', {
        y: 0,
        opacity: 1,
        stagger: 0.1,
      }).to(
        '.reveal-image',
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
        },
        '-=0.5',
      )

      // Scroll reveals for sections
      gsap.utils.toArray<HTMLElement>('.reveal-section').forEach((section) => {
        gsap.to(section, {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        })
      })
    },
    { scope: container },
  )

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center text-white'>
        <div className='text-center space-y-6'>
          <h1 className='text-4xl font-bold font-display'>Project not found</h1>
          <Link href='/' className='text-secondary hover:underline'>
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const navItems = [
    { id: 'hero', label: 'Title' },
    ...(project.metrics?.length ? [{ id: 'metrics', label: 'Metrics' }] : []),
    ...(project.overview || project.challenge || project.scope?.length
      ? [
          {
            id: 'overview',
            label: project.sectionTitles?.overview || 'Overview',
          },
        ]
      : []),
    ...(project.problem?.statement || project.problem?.objective
      ? [{ id: 'problem', label: project.sectionTitles?.problem || 'Problem' }]
      : []),
    ...(project.research?.description || project.research?.insights?.length
      ? [
          {
            id: 'research',
            label: project.sectionTitles?.research || 'Research',
          },
        ]
      : []),
    ...(project.goals?.length
      ? [{ id: 'goals', label: project.sectionTitles?.goals || 'Goals' }]
      : []),
    ...(project.images?.length > 1 || project.sectionImage
      ? [{ id: 'ui-designs', label: project.sectionTitles?.ui || 'UI Designs' }]
      : []),
    ...(project.outcome || project.userTesting
      ? [
          {
            id: 'outcomes',
            label: project.sectionTitles?.outcome || 'Outcomes',
          },
        ]
      : []),
  ]

  return (
    <div ref={container} className='min-h-screen py-10 lg:py-20 '>
      {/* Header / Hero Section */}
      <section
        id='hero'
        className='px-5 lg:px-10 space-y-10 relative overflow-hidden'
      >
        {/* Navigation */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 lg:mb-24 reveal-up'>
          <Button
            asChild
            className='rounded-full bg-gray-800 text-white h-12 w-full sm:w-40'
          >
            <Link href='/'>
              <ArrowLeft className='size-4' />
              <span>Back to Home</span>
            </Link>
          </Button>

          {project.visitUrl && (
            <Button asChild className='rounded-full h-12 w-full sm:w-48'>
              <a
                href={project.visitUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Visit website</span>
                <ArrowUpRight className='size-4' />
              </a>
            </Button>
          )}
        </div>

        {/* Project Title & Metadata */}
        <div className='space-y-8 lg:space-y-12'>
          <h1 className='text-3xl md:text-5xl/snug lg:text-6xl/snug w-full font-medium lg:max-w-5xl font-heading uppercase'>
            {project.title}{' '}
            {project.subTitle && <span className=''>– {project.subTitle}</span>}
          </h1>

          {/* labels  */}
          <div className='space-y-5 lg:space-y-6 reveal-up'>
            {project.tools && project.tools.length > 0 && (
              <div className='flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium tracking-wider'>
                <span className='text-white uppercase'>Tools:</span>
                {project.tools.map((tool, i) => (
                  <span key={tool} className='flex items-center gap-3'>
                    {tool}
                    {i < (project.tools?.length || 0) - 1 && (
                      <span className='size-1.5 rounded-full bg-white/20' />
                    )}
                  </span>
                ))}
              </div>
            )}

            {project.skills && project.skills.length > 0 && (
              <div className='flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium tracking-wider'>
                <span className='text-white/40 uppercase'>Skills:</span>
                {project.skills.map((skill, i) => (
                  <span key={skill} className='flex items-center gap-3'>
                    {skill}
                    {i < (project.skills?.length || 0) - 1 && (
                      <span className='size-1.5 rounded-full bg-white/20' />
                    )}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className='w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent reveal-up' />

        {/* Cover Image */}
        <div className='relative w-full aspect-video rounded-3xl overflow-hidden border border-white/5 bg-navy reveal-image'>
          <Image
            src={project.images[0].url}
            alt={project.images[0].alt}
            fill
            className='object-cover'
            priority
          />
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            id='metrics'
            className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:max-w-5xl reveal-section translate-y-20 opacity-0'
          >
            {project.metrics.map((metric, i) => (
              <Card
                key={i}
                className='shadow-none bg-linear-to-br from-primary/4  to-background border border-white/10 backdrop-blur-xl group hover:border-primary/30 transition-all duration-500 rounded-4xl p-4 h-full flex flex-col justify-between'
              >
                <CardHeader className='flex-row flex justify-between items-start p-0'>
                  <span className='text-3xl tracking-tight text-white'>
                    {metric.value}
                  </span>
                  <div className='size-11 rounded-full bg-white/3 flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-colors duration-500'>
                    {metric.type === 'revenue' && (
                      <CircleDollarSign className='size-5 text-primary' />
                    )}
                    {metric.type === 'users' && (
                      <Users className='size-5 text-primary' />
                    )}
                    {metric.type === 'orders' && (
                      <Box className='size-5 text-primary' />
                    )}
                  </div>
                </CardHeader>
                <CardContent className='p-0'>
                  <p className='text-base text-foreground leading-relaxed max-w-[90%]'>
                    {metric.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <div className='grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-24 px-5 lg:px-10 pt-20 reveal-section opacity-0 translate-y-10'>
        {/* Sidebar Navigation */}
        <aside className='hidden lg:block relative '>
          {/* Vertical Split Line */}
          <div className='absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary h-68 to-transparent' />

          <div className='sticky top-32 flex flex-col gap-10'>
            <nav className='flex flex-col gap-5'>
              {navItems.map((item, idx) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group relative flex items-center h-12 transition-all duration-300 ${
                    idx === 0 ? 'text-white' : 'text-white hover:text-white/90'
                  }`}
                >
                  {idx === 0 && (
                    <>
                      {/* Pill Background with Gradient Border Effect */}
                      <div className='absolute inset-0 rounded-full border border-primary/50 [mask-image:linear-gradient(to_right,white_40%,transparent_90%)] bg-linear-to-r from-primary/10 to-transparent -z-10' />
                      {/* Glow Effect */}
                      <div className='absolute inset-0 w-24 bg-primary/5 blur-xl -z-20' />
                    </>
                  )}

                  <div
                    className={`flex items-center gap-4 ${
                      idx === 0 ? 'pl-8' : 'pl-12'
                    }`}
                  >
                    {idx === 0 && (
                      <span className='text-primary text-xl translate-y-px'>
                        →
                      </span>
                    )}
                    <span className='text-sm tracking-wide'>{item.label}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className='space-y-20'>
          {/* Project Overview */}
          {(project.overview || project.challenge || project.scope?.length) && (
            <section
              id='overview'
              className='space-y-12 lg:space-y-16 reveal-section opacity-0 translate-y-10'
            >
              <div className='space-y-6 lg:space-y-8 max-w-4xl'>
                <h2 className='text-3xl md:text-5xl font-medium font-heading'>
                  {project.sectionTitles?.overview || 'Project Overview'}
                </h2>
                <div className='space-y-4 lg:space-y-6 text-base lg:text-lg text-foreground leading-relaxed font-heading '>
                  {project.overview && <p>{project.overview}</p>}
                  {project.challenge && <p>{project.challenge}</p>}
                </div>
              </div>

              {/* Project Scope */}
              {project.scope && project.scope.length > 0 && (
                <div className='space-y-8'>
                  <h3 className='text-3xl font-medium font-heading'>
                    Project Scope
                  </h3>
                  <ul className='grid gap-4'>
                    {project.scope.map((item, i) => (
                      <li
                        key={i}
                        className='flex items-center gap-4 text-foregorund group'
                      >
                        <span className='size-1.5 rounded-full bg-white group-hover:bg-primary transition-colors' />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {(project.overview || project.challenge) && (
            <div className='w-full h-px bg-linear-to-r from-primary to-transparent' />
          )}

          {/* Problem Statement */}
          {(project.problem?.statement || project.problem?.objective) && (
            <section
              id='problem'
              className='space-y-8 lg:space-y-12 max-w-4xl reveal-section opacity-0 translate-y-10'
            >
              <div className='space-y-6'>
                <h2 className='text-3xl md:text-5xl font-medium font-heading'>
                  {project.sectionTitles?.problem || 'Problem Statement'}
                </h2>
                {project.problem?.statement && (
                  <p className='text-base lg:text-lg text-foreground leading-relaxed font-heading'>
                    {project.problem.statement}
                  </p>
                )}
              </div>
              {project.problem?.objective && (
                <p className='text-base lg:text-lg text-foreground leading-relaxed font-heading'>
                  {project.problem.objective}
                </p>
              )}
            </section>
          )}

          {/* Research & Insights */}
          {(project.research?.description ||
            project.research?.insights?.length) && (
            <section
              id='research'
              className='space-y-12 max-w-4xl reveal-section opacity-0 translate-y-10'
            >
              <div className='space-y-6'>
                <h2 className='text-4xl md:text-5xl font-medium font-heading'>
                  {project.sectionTitles?.research || 'Research & Insights'}
                </h2>
                {project.research?.description && (
                  <p className='text-lg text-foreground leading-relaxed font-heading'>
                    {project.research.description}
                  </p>
                )}
              </div>

              {project.research?.insights &&
                project.research.insights.length > 0 && (
                  <div className='space-y-6'>
                    <p className='text-white font-medium'>
                      Key insights included:
                    </p>
                    <ol className='space-y-6'>
                      {project.research.insights.map((insight, i) => (
                        <li
                          key={i}
                          className='flex gap-4 text-foreground leading-relaxed'
                        >
                          <span className='text-primary font-medium shrink-0'>
                            {i + 1}.
                          </span>
                          {insight}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
            </section>
          )}

          {/* Design Goals */}
          {project.goals && project.goals.length > 0 && (
            <section
              id='goals'
              className='space-y-8 lg:space-y-12 max-w-4xl reveal-section opacity-0 translate-y-10'
            >
              <h2 className='text-3xl md:text-5xl font-medium font-heading'>
                {project.sectionTitles?.goals || 'Design Goals'}
              </h2>
              <div className='space-y-6'>
                <p className='text-base lg:text-foreground'>
                  The design aimed to achieve three key objectives:
                </p>
                <ol className='space-y-4 lg:space-y-6'>
                  {project.goals.map((goal, i) => (
                    <li
                      key={i}
                      className='flex gap-4 text-sm lg:text-base text-foreground leading-relaxed'
                    >
                      <span className='text-primary font-medium shrink-0'>
                        {i + 1}.
                      </span>
                      {goal}
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          )}

          {project.goals && project.goals.length > 0 && (
            <div className='w-full h-px bg-linear-to-r from-primary to-transparent' />
          )}

          {/* UI Designs */}
          {(project.images?.length > 1 || project.sectionImage) && (
            <section
              id='ui-designs'
              className='space-y-16 reveal-section opacity-0 translate-y-10'
            >
              {project.sectionImage && (
                <Image
                  src={project.sectionImage}
                  alt='Section Title'
                  width={1920}
                  height={1080}
                  className='w-full h-auto'
                  priority
                />
              )}

              <div className='grid gap-12'>
                {project.images.slice(1).map((image, i) => (
                  <div key={i} className='space-y-8'>
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={1920}
                      height={1080}
                      className='w-full h-auto'
                    />
                    {image.caption && (
                      <div className='max-w-xl self-end space-y-4'>
                        <p className='text-lg text-foreground leading-relaxed'>
                          {image.caption}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Outcome */}
          {(project.outcome || project.userTesting) && (
            <section
              id='outcomes'
              className='space-y-8 lg:space-y-12 max-w-4xl reveal-section opacity-0 translate-y-10'
            >
              <h2 className='text-3xl md:text-5xl font-medium font-heading'>
                {project.sectionTitles?.outcome || 'Outcome'}
              </h2>
              <div className='space-y-4 lg:space-y-6 text-base lg:text-lg text-foreground leading-relaxed'>
                {project.outcome && <p>{project.outcome}</p>}
                {project.userTesting && <p>{project.userTesting}</p>}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
