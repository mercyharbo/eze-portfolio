'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { PROJECTS } from '@/lib/data'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowLeft,
  ArrowRightLeft,
  ArrowUpRight,
  Hourglass,
  IdCard,
  Users,
  Wallet,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export interface ProjectDetailsProps {
  projectId: string
}

export function ProjectDetails({ projectId }: ProjectDetailsProps) {
  const project = PROJECTS.find((p) => p.id === projectId)
  const container = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState('hero')

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

  // Scroll spy to track active section
  useEffect(() => {
    if (!project) return

    const sectionIds = ['hero', 'metrics', ...project.sections.map((s) => s.id)]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [project])

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
    { id: 'hero', label: 'Home' },
    ...(project.metrics?.length ? [{ id: 'metrics', label: 'Metrics' }] : []),
    ...project.sections.map((section) => ({
      id: section.id,
      label:
        section.title ||
        section.id.charAt(0).toUpperCase() + section.id.slice(1),
    })),
  ]

  return (
    <div ref={container} className='min-h-screen py-10 lg:py-20 '>
      {/* Header / Hero Section */}
      <section
        id='hero'
        className='px-5 lg:px-10 space-y-10 relative overflow-hidden'
      >
        {/* Navigation */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6 reveal-up'>
          <Button
            asChild
            className='rounded-full bg-gray-800 text-white h-12 w-full sm:w-40 border border-white/5 hover:bg-gray-700 transition-all'
          >
            <Link href='/'>
              <ArrowLeft className='size-4' />
              <span>Back to Home</span>
            </Link>
          </Button>

          {project.status === 'live' && project.visitUrl && (
            <Button
              asChild
              className='rounded-full h-12 w-full sm:w-48 bg-linear-to-r from-cyan-500 to-blue-600 hover:brightness-110 text-white border-none shadow-lg shadow-blue-500/20 transition-all font-semibold'
            >
              <Link
                href={project.visitUrl}
                target='_blank'
                rel='noopener noreferrer'
              >
                <span>Visit website</span>
                <ArrowUpRight className='size-4 ml-1' />
              </Link>
            </Button>
          )}

          {project.status === 'development' && (
            <Button
              disabled
              className='rounded-full bg-gray-800 text-white h-12 w-full sm:w-64 border border-white/5 cursor-default hover:bg-gray-800/60 transition-all'
            >
              <span className='font-medium'>Development in progress</span>
              <Hourglass className='size-4 ml-2 opacity-90' />
            </Button>
          )}
        </div>

        {/* Project Title & Metadata */}
        <div className='space-y-8 lg:space-y-12'>
          <h1 className='text-3xl md:text-4xl/snug lg:text-6xl/snug w-full font-medium lg:max-w-7xl font-heading Capitialize'>
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
            src={project.heroImage}
            alt={project.title}
            fill
            className='object-cover'
            priority
          />
        </div>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div
            id='metrics'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:max-w-7xl reveal-section translate-y-20 opacity-0'
          >
            {project.metrics.map((metric, i) => (
              <Card
                key={i}
                className='shadow-none bg-linear-to-br from-white/5 to-background border border-white/10 backdrop-blur-xl group hover:border-primary/30 transition-all duration-500 rounded-3xl p-6 h-full flex flex-col justify-between'
              >
                <CardHeader className='flex-row flex justify-between items-start p-0'>
                  <span className='text-2xl lg:text-3xl tracking-tight text-white font-medium leading-none'>
                    {metric.value}
                  </span>
                  <div className='size-11 rounded-full bg-linear-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-colors duration-500 shrink-0'>
                    {metric.type === 'revenue' && (
                      <Wallet className='size-5 text-primary' />
                    )}
                    {metric.type === 'users' && i === 2 && (
                      <IdCard className='size-5 text-primary' />
                    )}
                    {metric.type === 'users' && i !== 2 && (
                      <Users className='size-5 text-primary' />
                    )}
                    {metric.type === 'orders' && (
                      <ArrowRightLeft className='size-5 text-primary' />
                    )}
                  </div>
                </CardHeader>
                <CardContent className='p-0'>
                  <p className='text-sm text-foreground/80 leading-relaxed'>
                    {metric.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <div
        className={`grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-24 px-5 lg:px-10 pt-20 h-auto`}
      >
        {/* Sidebar Navigation - Only for Classic Layout */}
        <aside className='hidden lg:block relative h-full'>
          {/* Vertical Split Line */}
          <div className='absolute -right-10 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-primary h-68 to-transparent' />

          <div className='sticky top-32 flex flex-col gap-10'>
            <nav className='flex flex-col gap-5'>
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={`group relative flex items-center h-12 transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-white/60 hover:text-white/90'
                    }`}
                  >
                    {isActive && (
                      <>
                        {/* Pill Background with Gradient Border Effect */}
                        <div className='absolute inset-0 rounded-full border border-primary/50 mask-[linear-gradient(to_right,white_40%,transparent_90%)] bg-linear-to-r from-primary/10 to-transparent -z-10' />
                        {/* Glow Effect */}
                        <div className='absolute inset-0 w-24 bg-primary/5 blur-xl -z-20' />
                      </>
                    )}

                    <div
                      className={`flex items-center gap-4 ${
                        isActive ? 'pl-8' : 'pl-12'
                      }`}
                    >
                      {isActive && (
                        <span className='text-primary text-xl translate-y-px'>
                          →
                        </span>
                      )}
                      <span className='text-sm tracking-wide'>
                        {item.label}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </nav>
          </div>
        </aside>

        <div className='space-y-20 flex-1'>
          {project.sections.map((section) => (
            <div key={section.id} className='space-y-20'>
              {/* Dynamic Section Rendering */}
              <section
                id={section.id}
                className='space-y-12 lg:space-y-16 reveal-section opacity-0 translate-y-10'
              >
                {/* Section Images Rendering (Top Position - Before Title) */}
                {section.imagePosition === 'top' &&
                  section.images &&
                  section.images.length > 0 && (
                    <div className='flex flex-col gap-6 lg:gap-12 lg:mx-0'>
                      {section.images.map((image, i) => (
                        <div key={i} className='space-y-8'>
                          <Image
                            src={image.url}
                            alt={image.alt}
                            width={1920}
                            height={1080}
                            className='w-full h-auto rounded-3xl lg:rounded-4xl'
                          />
                          {image.caption && (
                            <div className='max-w-xl px-5 lg:px-0'>
                              <p className='text-lg text-foreground leading-relaxed'>
                                {image.caption}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                {/* Section Title */}
                {section.title && section.type !== 'ui-designs' && (
                  <h2 className='text-3xl md:text-5xl font-medium font-heading'>
                    {section.title}
                  </h2>
                )}

                {/* Section Content - Based on Type */}
                <div className='space-y-8 max-w-4xl'>
                  {/* Basic Content (Overview, Problem, Outcome) */}
                  {(section.type === 'overview' ||
                    section.type === 'problem' ||
                    section.type === 'outcome') && (
                    <div className='space-y-6 text-base lg:text-lg text-foreground leading-relaxed font-heading'>
                      {section.highlight && (
                        <p className='text-lg lg:text-xl text-white font-medium leading-relaxed pl-6 border-l-2 border-primary/30 italic'>
                          {section.highlight}
                        </p>
                      )}
                      {Array.isArray(section.content) ? (
                        section.content.map((p, i) => <p key={i}>{p}</p>)
                      ) : (
                        <p>{section.content}</p>
                      )}
                    </div>
                  )}

                  {/* Scope List */}
                  {section.type === 'scope' && section.content && (
                    <ul className='grid gap-4'>
                      {Array.isArray(section.content) &&
                        section.content.map((item, i) => (
                          <li
                            key={i}
                            className='flex items-center gap-4 text-foreground group'
                          >
                            <span className='size-1.5 rounded-full bg-white group-hover:bg-primary transition-colors' />
                            {item}
                          </li>
                        ))}
                    </ul>
                  )}

                  {/* Numbered Sections (Research, Goals) */}
                  {(section.type === 'research' ||
                    section.type === 'goals') && (
                    <div className='space-y-8'>
                      {section.content && (
                        <div
                          className={`space-y-6 ${section.type === 'research' ? 'text-base font-normal' : 'text-base lg:text-lg font-heading'} text-foreground leading-relaxed`}
                        >
                          {Array.isArray(section.content) ? (
                            section.content.map((p, i) => <p key={i}>{p}</p>)
                          ) : (
                            <p>{section.content}</p>
                          )}
                        </div>
                      )}
                      {section.items && (
                        <div
                          className={`grid grid-cols-1 ${section.type === 'research' ? 'gap-4' : 'gap-5 lg:gap-6'}`}
                        >
                          {section.items.map((item, i) => (
                            <div
                              key={i}
                              className='flex gap-4 items-start group'
                            >
                              {section.listType === 'bullets' ? (
                                <div className='size-1.5 rounded-full bg-foreground/60 mt-3' />
                              ) : (
                                <span
                                  className={`text-primary ${section.itemTitleWeight === 'normal' ? 'font-normal' : section.itemTitleWeight === 'medium' ? 'font-medium' : section.type === 'research' ? 'font-normal' : 'font-medium'} text-base shrink-0`}
                                >
                                  {i + 1}.
                                </span>
                              )}
                              <div className='flex-1'>
                                <p
                                  className={`text-foreground leading-relaxed ${section.type === 'research' ? 'text-base' : 'text-base lg:text-lg'}`}
                                >
                                  {item.title &&
                                    item.title !== (i + 1).toString() && (
                                      <span
                                        className={`${section.itemTitleWeight === 'normal' ? 'font-normal' : section.itemTitleWeight === 'medium' ? 'font-medium' : section.type === 'research' ? 'font-normal' : 'font-medium'} text-white italic`}
                                      >
                                        {item.title}
                                      </span>
                                    )}
                                  {item.title &&
                                    item.title !== (i + 1).toString() &&
                                    item.body &&
                                    !Array.isArray(item.body) &&
                                    ': '}
                                  {item.body && !Array.isArray(item.body) && (
                                    <span className='text-foreground'>
                                      {item.body}
                                    </span>
                                  )}
                                </p>
                                {item.body && Array.isArray(item.body) && (
                                  <ul className='space-y-3 mt-3'>
                                    {item.body.map((bp, j) => (
                                      <li
                                        key={j}
                                        className='flex items-start gap-3'
                                      >
                                        <span className='mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground/60' />
                                        <span className='text-foreground'>
                                          {bp}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Workflow Section (Vertical stack, bold inline title) */}
                  {section.type === 'workflow' && (
                    <div className='space-y-4'>
                      {section.content && (
                        <div className='text-base lg:text-lg text-foreground leading-relaxed space-y-3'>
                          {Array.isArray(section.content) ? (
                            section.content.map((p, i) => (
                              <p
                                key={i}
                                className={
                                  i === 0 && section.id === 'development'
                                    ? 'font-bold'
                                    : ''
                                }
                              >
                                {p}
                              </p>
                            ))
                          ) : (
                            <p>{section.content}</p>
                          )}
                        </div>
                      )}
                      {section.items &&
                        section.items.map((item, i) => (
                          <div key={i} className='flex gap-4 items-start'>
                            {section.listType === 'bullets' ? (
                              <div className='size-1.5 rounded-full bg-foreground/60 mt-3' />
                            ) : section.listType === 'numbered' ? (
                              <span className='text-white font-medium text-base lg:text-lg shrink-0'>
                                {i + 1}.
                              </span>
                            ) : null}
                            <div className='flex-1 space-y-2'>
                              {/* Numbered lists: inline title + body with dash */}
                              {section.listType === 'numbered' ? (
                                <p className='text-base lg:text-lg leading-relaxed'>
                                  {item.title && (
                                    <span className='font-medium text-white'>
                                      {item.title}
                                    </span>
                                  )}
                                  {item.title &&
                                    item.body &&
                                    !Array.isArray(item.body) &&
                                    ' – '}
                                  {item.body && !Array.isArray(item.body) && (
                                    <span className='text-foreground'>
                                      {item.body}
                                    </span>
                                  )}
                                </p>
                              ) : section.itemTitleWeight === 'bold' ? (
                                /* Bold title weight: inline title:body format */
                                <p className='text-base lg:text-lg leading-relaxed'>
                                  {item.title && (
                                    <span className='font-bold text-white'>
                                      {item.title}:
                                    </span>
                                  )}{' '}
                                  {item.body && !Array.isArray(item.body) && (
                                    <span className='text-foreground'>
                                      {item.body}
                                    </span>
                                  )}
                                </p>
                              ) : (
                                /* Non-numbered, non-bold: title and body on separate lines */
                                <>
                                  {item.title && (
                                    <p
                                      className={`${section.itemTitleWeight === 'normal' ? 'font-normal' : 'font-medium'} text-white text-base lg:text-lg`}
                                    >
                                      {item.title}
                                    </p>
                                  )}
                                  {item.body && !Array.isArray(item.body) && (
                                    <p className='text-base lg:text-lg text-foreground leading-relaxed'>
                                      {item.body}
                                    </p>
                                  )}
                                </>
                              )}
                              {item.body && Array.isArray(item.body) && (
                                <ul className='space-y-4'>
                                  {item.body.map((bp, j) => (
                                    <li
                                      key={j}
                                      className='flex items-start gap-3'
                                    >
                                      <span className='mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground/60' />
                                      <span className='text-foreground'>
                                        {bp}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        ))}
                      {section.postContent && (
                        <div className='text-base lg:text-lg text-foreground leading-relaxed pt-4 border-t border-white/5 mt-8'>
                          {Array.isArray(section.postContent) ? (
                            section.postContent.map((p, i) => (
                              <p key={i}>{p}</p>
                            ))
                          ) : (
                            <p>{section.postContent}</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Insights Section (Bulleted/Numbered list) */}
                  {section.type === 'insights' && (
                    <div className='space-y-8'>
                      {section.content && (
                        <div className='text-base lg:text-lg text-foreground leading-relaxed space-y-4'>
                          {Array.isArray(section.content) ? (
                            section.content.map((p, i) => <p key={i}>{p}</p>)
                          ) : (
                            <p>{section.content}</p>
                          )}
                        </div>
                      )}
                      {section.highlight && (
                        <p className='text-lg lg:text-xl text-white font-medium leading-relaxed pl-6 border-l-2 border-primary/30'>
                          {section.highlight}
                        </p>
                      )}
                      {section.items && (
                        <ul className='space-y-4'>
                          {section.items.map((item, i) => (
                            <li
                              key={i}
                              className='flex items-start gap-3 text-base lg:text-lg leading-relaxed'
                            >
                              {section.listType === 'numbered' ? (
                                <span className='text-white font-medium shrink-0'>
                                  {i + 1}.
                                </span>
                              ) : (
                                <span className='mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground/60' />
                              )}
                              <p>
                                {item.title && (
                                  <span
                                    className={`${section.itemTitleWeight === 'normal' ? 'font-normal' : 'font-medium'} text-white`}
                                  >
                                    {item.title}
                                  </span>
                                )}
                                {item.title &&
                                  item.body &&
                                  !Array.isArray(item.body) &&
                                  ': '}
                                {item.body && !Array.isArray(item.body) && (
                                  <span className='text-foreground'>
                                    {item.body}
                                  </span>
                                )}
                              </p>
                              {item.body && Array.isArray(item.body) && (
                                <ul className='space-y-3'>
                                  {item.body.map((bp, j) => (
                                    <li
                                      key={j}
                                      className='flex items-start gap-3'
                                    >
                                      <span className='mt-2.5 size-1.5 shrink-0 rounded-full bg-foreground/60' />
                                      <span className='text-foreground'>
                                        {bp}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.postContent && (
                        <div className='text-base lg:text-lg text-foreground leading-relaxed space-y-4'>
                          {Array.isArray(section.postContent) ? (
                            section.postContent.map((p, i) => (
                              <p key={i}>{p}</p>
                            ))
                          ) : (
                            <p>{section.postContent}</p>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* UI Designs Section Header (Special case for project.sectionImage) */}
                  {section.type === 'ui-designs' && project.sectionImage && (
                    <div className='lg:mx-0'>
                      <Image
                        src={project.sectionImage}
                        alt='Section Title'
                        width={1920}
                        height={1080}
                        className='w-full h-auto'
                        priority
                      />
                    </div>
                  )}

                  {/* Generic Images Rendering for any section (Bottom Position by default) */}
                  {section.imagePosition !== 'top' &&
                    section.images &&
                    section.images.length > 0 && (
                      <div
                        className={`flex flex-col gap-6 lg:gap-12 lg:mx-0 ${section.type === 'scope' || section.type === 'research' || section.type === 'goals' || section.type === 'workflow' || section.type === 'insights' ? 'mt-6 lg:mt-12' : ''}`}
                      >
                        {section.images.map((image, i) => (
                          <div key={i} className='space-y-8'>
                            <Image
                              src={image.url}
                              alt={image.alt}
                              width={1920}
                              height={1080}
                              className='w-full h-auto rounded-3xl lg:rounded-4xl'
                            />
                            {image.caption && (
                              <div className='max-w-xl px-5 lg:px-0'>
                                <p className='text-lg text-foreground leading-relaxed'>
                                  {image.caption}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                </div>
              </section>

              {/* Dynamic Separator */}
              {section.type !== 'outcome' &&
                section.type !== 'ui-designs' &&
                section.id !== 'values' && (
                  <div className='w-full h-px bg-linear-to-r from-primary to-transparent opacity-30' />
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
