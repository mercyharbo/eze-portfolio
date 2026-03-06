'use client'

import {
  CaseStudies,
  Hero,
  MeetMe,
  Metrics,
  MoreProjects,
  Problem,
  Solution,
} from '@/components/landing-page'
import { MarqueeSlide } from '@/components/marquee-slide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

export default function Home() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Register ScrollTrigger inside the hook for SSR compatibility
      gsap.registerPlugin(ScrollTrigger)

      // Hero entrance animation
      gsap.fromTo(
        '.hero-animate',
        {
          y: 60,
          skewY: 5,
          opacity: 0,
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
          stagger: 0.1,
        },
      )

      // Set initial states to prevent FOUC
      gsap.set('.reveal, .reveal-header, .reveal-stagger > *', {
        opacity: 0,
        y: 60,
      })

      // Scroll animations for section reveals with enhanced effects
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.to(el, {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            end: 'top 60%',
            scrub: 0.5,
            once: false,
          },
        })
      })

      // Header-specific reveals with subtle scale
      gsap.utils.toArray<HTMLElement>('.reveal-header').forEach((el) => {
        gsap.fromTo(
          el,
          {
            y: 40,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 95%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })

      // Staggered grid reveals with enhanced stagger and scale
      gsap.utils.toArray<HTMLElement>('.reveal-stagger').forEach((section) => {
        const children = Array.from(section.children) as HTMLElement[]

        gsap.fromTo(
          children,
          {
            y: 60,
            opacity: 0,
            scale: 0.9,
            rotateX: 10,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 1,
            stagger: {
              amount: 0.6,
              from: 'start',
              ease: 'power2.inOut',
            },
            ease: 'power4.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    },
    { scope: container },
  )

  return (
    <div ref={container} className='flex flex-col min-h-screen space-y-10'>
      <Hero />
      <MarqueeSlide />
      <Problem />
      <Solution />
      <Metrics />
      <CaseStudies />
      <MoreProjects />
      <MeetMe />
    </div>
  )
}
