export interface Project {
    id: string
    title: string
    subTitle?: string
    category: string
    year: string
    tools?: string[]
    skills?: string[]
    overview: string
    challenge: string
    scope: string[]
    problem: {
        statement: string
        objective: string
    }
    research: {
        description: string
        insights: string[]
    }
    goals: string[]
    outcome: string
    userTesting: string
    images: {
        url: string
        alt: string
        caption?: string
    }[]
    metrics?: {
        value: string
        label: string
        type?: 'revenue' | 'users' | 'orders'
    }[]
    sectionImage?: string
    visitUrl?: string
    sectionTitles?: {
        overview?: string
        problem?: string
        research?: string
        goals?: string
        ui?: string
        outcome?: string
    }
}

export const PROJECTS: Project[] = [
    {
        id: 'leban-street',
        title: 'Leban Street',
        subTitle: 'Restaurant Mobile Web App Design',
        category: 'Product Design',
        year: '2024',
        tools: ['FIGMA', 'LOTTIEFILES', 'NOTION'],
        skills: ['WEB DESIGN', 'UX DESIGNER', 'UX RESEARCHER'],
        overview:
            'Leban Street is a modern restaurant offering a fusion of Mediterranean and African flavours, popular for its quick delivery and signature street-style meals. The goal of this project was to design a mobile-first web experience that captures the restaurant’s vibrant identity while delivering a seamless and delightful food ordering flow.',
        challenge:
            'The challenge was to translate the in-person Leban Street experience into an engaging digital interface that allows users to browse, customise, and order meals effortlessly.',
        scope: [
            'Dish Detail & Cart Interaction',
            'Restaurant Menu & Listing Interface',
            'Mobile User Flow and UX Enhancements',
        ],
        problem: {
            statement:
                'The existing ordering process for Leban Street relied heavily on third-party platforms, which limited brand expression and user experience control. Customers faced inconsistent menu layouts, slow navigation, and limited flexibility for custom orders.',
            objective:
                'The objective was to design a dedicated mobile web app where users could browse the menu intuitively, customise their meals, and check out with minimal friction.',
        },
        research: {
            description:
                'To design an experience tailored to user behaviour, I reviewed several food delivery apps such as Chowdeck, Uber Eats, and DoorDash, focusing on interaction patterns, visual hierarchy, and micro-interactions.',
            insights: [
                'Users prefer horizontal category navigation on mobile over dropdowns.',
                'Quick “Add to Cart” actions increase conversions compared to forcing users through multiple steps.',
                'Bottom sheet modals for item details and cart management provide a smoother flow than full-page transitions.',
                'High-quality imagery significantly influences purchase decisions.',
            ],
        },
        goals: [
            'Visual Delight – Create a fresh and appetising interface that reflects the brand’s personality.',
            'Ease of Use – Ensure users can browse, customise, and order in under three taps.',
            'Consistency – Maintain a cohesive look and feel across all interactions and screens.',
        ],
        outcome:
            'The final design successfully combines clarity, speed, and visual appeal, giving users a frictionless ordering experience that feels familiar yet distinctly Leban Street. The mobile-first approach ensures performance across various devices while maintaining strong visual consistency.',
        userTesting:
            'User testing results showed that most participants were able to browse and add items to their cart within 20 seconds, and all users described the interface as “clean,” “inviting,” and “intuitive.”',
        images: [
            {
                url: '/leban_cover.jpg',
                alt: 'Leban Street Cover',
            },
            {
                url: '/leban-1.png',
                alt: 'Leban Street Design 1',
            },
            {
                url: '/leban-2.png',
                alt: 'Leban Street Design 2',
            },
            {
                url: '/leban-3.png',
                alt: 'Leban Street Design 3',
            },
            {
                url: '/leban-4.png',
                alt: 'Leban Street Design 4',
            },
        ],
        metrics: [
            {
                value: '$30,000+',
                label: 'Revenue generated within the first 3 months of launch.',
                type: 'revenue',
            },
            {
                value: '700+',
                label: 'Customers onboarded within the first 14 days.',
                type: 'users',
            },
            {
                value: '3,000+',
                label: 'Orders fulfilled within the first 4 months of launch.',
                type: 'orders',
            },
        ],
        sectionImage: '/leban_title.png',
    },
]
