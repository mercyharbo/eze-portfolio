export interface ProjectSection {
    id: string
    title?: string
    subTitle?: string
    type: 'overview' | 'problem' | 'research' | 'goals' | 'ui-designs' | 'outcome' | 'scope' | 'insights' | 'workflow'
    content?: string | string[]
    images?: { url: string; alt: string; caption?: string }[]
    items?: { title: string; body?: string | string[]; value?: string; label?: string; type?: string }[]
    customTitle?: string
    listType?: 'bullets' | 'numbered'
    itemTitleWeight?: 'normal' | 'medium' | 'bold'
    imagePosition?: 'top' | 'bottom'
    postContent?: string | string[]
    highlight?: string
}

export interface Project {
    id: string
    title: string
    subTitle?: string
    category: string
    year: string
    tools?: string[]
    skills?: string[]
    layout: 'classic' | 'modern'
    overview: string
    heroImage: string
    visitUrl?: string
    metrics?: {
        value: string
        label: string
        type?: 'revenue' | 'users' | 'orders'
    }[]
    sectionImage?: string // For section titles that use images
    status?: 'live' | 'development'
    sections: ProjectSection[]
}

export const PROJECTS: Project[] = [
    {
        id: 'leban-street',
        title: 'Leban Street',
        subTitle: 'Restaurant Mobile Web App Design',
        category: 'Product Design',
        year: '2024',
        layout: 'classic',
        tools: ['FIGMA', 'LOTTIEFILES', 'NOTION'],
        skills: ['WEB DESIGN', 'UX DESIGNER', 'UX RESEARCHER'],
        overview:
            'Leban Street is a modern restaurant offering a fusion of Mediterranean and African flavours, popular for its quick delivery and signature street-style meals. The goal of this project was to design a mobile-first web experience that captures the restaurant’s vibrant identity while delivering a seamless and delightful food ordering flow.',
        heroImage: '/leban_cover.jpg',
        sectionImage: '/leban_title.png',
        status: 'live',
        visitUrl: 'https://www.lebanstreet.com/',
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
        sections: [
            {
                id: 'overview',
                type: 'overview',
                title: 'Project Overview',
                content: [
                    'Leban Street is a modern restaurant offering a fusion of Mediterranean and African flavours, popular for its quick delivery and signature street-style meals. The goal of this project was to design a mobile-first web experience that captures the restaurant’s vibrant identity while delivering a seamless and delightful food ordering flow.',
                    'The challenge was to translate the in-person Leban Street experience into an engaging digital interface that allows users to browse, customise, and order meals effortlessly.',
                ],
            },
            {
                id: 'scope',
                type: 'scope',
                title: 'Project Scope',
                content: [
                    'Dish Detail & Cart Interaction',
                    'Restaurant Menu & Listing Interface',
                    'Mobile User Flow and UX Enhancements',
                ],
            },
            {
                id: 'problem',
                type: 'problem',
                title: 'Problem Statement',
                content: [
                    'The existing ordering process for Leban Street relied heavily on third-party platforms, which limited brand expression and user experience control. Customers faced inconsistent menu layouts, slow navigation, and limited flexibility for custom orders.',
                    'The objective was to design a dedicated mobile web app where users could browse the menu intuitively, customise their meals, and check out with minimal friction.',
                ],
            },
            {
                id: 'research',
                type: 'research',
                title: 'Research & Insights',
                content:
                    'To design an experience tailored to user behaviour, I reviewed several food delivery apps such as Chowdeck, Uber Eats, and DoorDash, focusing on interaction patterns, visual hierarchy, and micro-interactions.',
                items: [
                    { title: '1', body: 'Users prefer horizontal category navigation on mobile over dropdowns.' },
                    {
                        title: '2',
                        body: 'Quick “Add to Cart” actions increase conversions compared to forcing users through multiple steps.',
                    },
                    {
                        title: '3',
                        body: 'Bottom sheet modals for item details and cart management provide a smoother flow than full-page transitions.',
                    },
                    { title: '4', body: 'High-quality imagery significantly influences purchase decisions.' },
                ],
            },
            {
                id: 'goals',
                type: 'goals',
                title: 'Design Goals',
                content: 'The design aimed to achieve three key objectives:',
                items: [
                    {
                        title: '1',
                        body: 'Visual Delight – Create a fresh and appetising interface that reflects the brand’s personality.',
                    },
                    {
                        title: '2',
                        body: 'Ease of Use – Ensure users can browse, customise, and order in under three taps.',
                    },
                    {
                        title: '3',
                        body: 'Consistency – Maintain a cohesive look and feel across all interactions and screens.',
                    },
                ],
            },
            {
                id: 'ui-designs',
                type: 'ui-designs',
                images: [
                    { url: '/leban-1.png', alt: 'Leban Street Design 1' },
                    { url: '/leban-2.png', alt: 'Leban Street Design 2' },
                    { url: '/leban-3.png', alt: 'Leban Street Design 3' },
                    { url: '/leban-4.png', alt: 'Leban Street Design 4' },
                ],
            },
            {
                id: 'outcomes',
                type: 'outcome',
                title: 'Outcome',
                content: [
                    'The final design successfully combines clarity, speed, and visual appeal, giving users a frictionless ordering experience that feels familiar yet distinctly Leban Street. The mobile-first approach ensures performance across various devices while maintaining strong visual consistency.',
                    'User testing results showed that most participants were able to browse and add items to their cart within 20 seconds, and all users described the interface as “clean,” “inviting,” and “intuitive.”',
                ],
            },
        ],
    },
    {
        id: 'facity',
        title: 'Facity',
        subTitle: 'A Student-Centric Fintech Solution',
        category: 'Product Design',
        year: '2024',
        layout: 'classic',
        tools: ['FIGMA', 'JIRA', 'LOTTIEFILES'],
        skills: ['PRODUCT DESIGNER', 'UX DESIGNER', 'UI DESIGNER'],
        overview:
            'Facity is built to streamline the everyday financial chaos of campus life. It focuses on the small but constant transactions students make daily all from one clean, digital wallet.',
        heroImage: '/facity_cover.jpg',
        sectionImage: '/facity-title.png',
        status: 'live',
        visitUrl: 'https://apps.apple.com/ng/app/facity/id6505069222',
        metrics: [
            {
                value: '₦4,217,000+',
                label: 'Total transaction volume within the first 3 months of launch.',
                type: 'revenue',
            },
            {
                value: '5,500+',
                label: 'Total transaction count within the first 3 months of launch.',
                type: 'orders',
            },
            {
                value: '1,900+',
                label: 'Activated users within the first 3 months of launch.',
                type: 'users',
            },
            {
                value: '4,400+',
                label: 'Total users within the first 3 months of launch.',
                type: 'users',
            },
        ],
        sections: [
            {
                id: 'overview',
                type: 'overview',
                title: 'Project Overview',
                content: [
                    'Facity is a student-centric fintech product built to streamline the everyday financial chaos of campus life. It focuses on the small but constant transactions students make daily all from one clean, digital wallet.',
                    '“Campus life is more than just payments...”',
                    'Facity also includes a shuttle feature that lets students book or schedule campus rides directly in-app. On top of that, students can discover and pay for campus events without chasing physical tickets or middlemen.',
                ],
                images: [
                    { url: '/image-1.png', alt: 'Facity Experience 1' },
                    { url: '/image-2.png', alt: 'Facity Experience 2' },
                ],
            },
            {
                id: 'workflow',
                type: 'workflow',
                title: 'Workflow',
                itemTitleWeight: 'bold',
                items: [
                    {
                        title: 'Empathize',
                        body: 'I started by talking to students and paying attention to how they manage life on campus. That gave me clear insight into the frustrations around daily payments, unreliable shuttle transportation, and messy event ticketing.',
                    },
                    {
                        title: 'Conceptualize',
                        body: 'With those insights, I explored different ideas and shaped a direction that felt realistic and useful. I focused on the features that would create the most impact, planned out how everything should flow, and made sure each idea solved a real student problem.',
                    },
                    {
                        title: 'Design',
                        body: 'Once the direction was solid, I brought everything to life through screens and interactions. I created a centralized dashboard, simple wallet actions, smooth shuttle booking, and secure event tickets. Every design choice aimed to reduce friction, add clarity, and make campus tasks feel easier, faster, and more connected.',
                    },
                ],
            },
            {
                id: 'takeaways',
                type: 'insights',
                title: 'User Interview Takeaways',
                items: [
                    {
                        title: 'Unreliable Campus Transportation',
                        body: 'This showed the need for a reliable booking system that reduces wait time and unpredictability.',
                    },
                    {
                        title: 'Scattered Daily Transactions',
                        body: 'This emphasized the demand for a centralized platform that organizes day-to-day campus spending.',
                    },
                    {
                        title: 'Event Ticketing Chaos',
                        body: 'This exposed the need for an accessible, verified event marketplace without middlemen.',
                    },
                    {
                        title: 'Transparency & Trust Issues',
                        body: 'This reinforced the importance of secure ticket verification and digital records.',
                    },
                ],
            },
            {
                id: 'strategy',
                type: 'overview',
                title: 'Strategy & Product Direction',
                content: [
                    'To design a product that genuinely fits into campus life, I focused on simplifying the scattered everyday interactions students already go through.',
                    'The core strategy was to reduce friction by centralizing the most common student activities. Each feature needed to feel accessible within a few taps. I prioritized clear navigation, fast actions, and transparent transaction records to build trust among students who frequently deal with unreliable processes.',
                    'By aligning the product with real student behaviour, the direction became about cutting time wastage, removing middlemen, and making campus interactions feel effortless. Instead of forcing students to switch apps or chase information physically, Facity brings everything into a single, reliable interface built around their daily rhythm.',
                ],
            },
            {
                id: 'ui-designs',
                type: 'ui-designs',
                images: [
                    { url: '/image-3.png', alt: 'Facity UI Design 1' },
                    { url: '/image-4.png', alt: 'Facity UI Design 2' },
                    { url: '/image-5.png', alt: 'Facity UI Design 3' },
                    { url: '/image-6.png', alt: 'Facity UI Design 4' },
                    { url: '/image-7.png', alt: 'Facity UI Design 5' },
                    { url: '/image-8.png', alt: 'Facity UI Design 6' },
                    { url: '/image-9.png', alt: 'Facity UI Design 7' },
                ],
            },
        ],
    },
    {
        id: 'innovation-hub',
        title: 'Innovation Hub',
        subTitle: 'Responsive Web App Design',
        category: 'Product Design',
        year: '2024',
        layout: 'classic',
        tools: ['FIGMA', 'NOTION', 'LOTTIEFILES'],
        skills: ['PRODUCT DESIGNER', 'UX DESIGNER', 'UX RESEARCHER'],
        overview:
            'Innovation Hub is a digital platform built to spotlight groundbreaking ideas, products, and technologies. It’s a space where innovation takes center stage – documented, celebrated, and followed as it evolves from concept to reality.',
        heroImage: '/innovation-cover.png',
        status: 'live',
        visitUrl: '#',
        sections: [
            {
                id: 'overview',
                type: 'overview',
                title: 'Project Overview',
                highlight: '"Innovations should be visible, accessible and inspiring for the next wave of creators."',
                content: [
                    'Innovation Hub is a digital platform built to spotlight groundbreaking ideas, products, and technologies. It\'s a space where innovation takes center stage – documented, celebrated, and followed as it evolves from concept to reality.',
                    'Innovation often happens in silos. Brilliant ideas are born, built, and buried before the world even hears about them. Existing platforms focus on people, not the progress of their innovations, leaving no dedicated space for the life cycle of an idea.',
                    'We set out to change that!',
                ],
                images: [
                    { url: '/innovation-1.png', alt: 'Feature 1' },
                    { url: '/innovation-2.png', alt: 'Feature 2' },
                    { url: '/innovation-3.png', alt: 'Feature 3' },
                    { url: '/innovation-4.png', alt: 'Feature 4' },
                ],
            },
            {
                id: 'research',
                type: 'research',
                title: 'User Research Summary',
                listType: 'bullets',
                content: [
                    'To understand how people currently share, discover, and engage with innovation, I conducted a research focused on innovators, product builders, and enthusiasts.',
                    'The goal was to uncover their pain points, motivations, and needs especially around visibility, feedback, and community.',
                ],
                items: [
                    { title: 'Interviews' },
                    { title: 'Desk research' },
                    { title: 'Competitive analysis' },
                ],
            },
            {
                id: 'empathy-map',
                type: 'workflow',
                title: 'Empathy Map',
                items: [
                    {
                        title: 'Says',
                        body: [
                            '"I have great ideas but no space to document or share my progress or journey regularly."',
                            '"It\'s hard to get feedback consistently from builders and the same set of people."',
                            '"Social platforms are too noisy and distracting. My projects get lost."',
                        ],
                    },
                    {
                        title: 'Thinks',
                        body: [
                            '"There should be a more structured way to showcase innovation."',
                            '"If people could see how ideas evolve, they\'d connect more deeply."',
                            '"Visibility can help my project grow or attract collaborators."',
                        ],
                    },
                    {
                        title: 'Does',
                        body: [
                            'Shares updates on LinkedIn, X (Twitter), or Discord groups.',
                            'Creates Notion pages or personal portfolios to store progress.',
                            'Engages with other innovators in online spaces.',
                        ],
                    },
                    {
                        title: 'Feels',
                        body: [
                            'Inspired but often unseen.',
                            'Frustrated by the lack of meaningful visibility.',
                            'Motivated to build but needs structure and recognition.',
                        ],
                    },
                ],
            },
            {
                id: 'insights',
                type: 'insights',
                title: 'Key Insights',
                listType: 'bullets',
                items: [
                    {
                        title: 'Innovation Visibility Gap',
                        body: 'Most innovators struggle to maintain consistent visibility for their projects. Updates are scattered across different platforms, making it hard for people to follow their journey.',
                    },
                    {
                        title: 'Feedback Craving',
                        body: 'Innovators want constructive engagement, not empty likes. They value comments and reactions from people who understand their field.',
                    },
                    {
                        title: 'Journey Over Product',
                        body: 'People care about the story behind innovation. The process, pivots, and growth. This insight became the foundation for the "updates" feature.',
                    },
                    {
                        title: 'Community Matters',
                        body: 'A sense of belonging fuels motivation. Innovators are more likely to share when they feel part of a niche, respectful, and idea-driven community.',
                    },
                    {
                        title: 'Curation Builds Credibility',
                        body: 'Users trust platforms that are curated. Focused on innovation quality, not quantity. Hence, Innovation Hub was designed as a curated ecosystem, not an open social network.',
                    },
                ],
            },
            {
                id: 'strategy',
                type: 'overview',
                title: 'Strategy & Product Direction',
                content: [
                    'To design a product that genuinely fits into campus life, I focused on simplifying the scattered everyday interactions students already go through.',
                    'The core strategy was to reduce friction by centralizing the most common student activities. Each feature needed to feel accessible within a few taps. I prioritized clear navigation, fast actions, and transparent transaction records to build trust among students who frequently deal with unreliable processes.',
                    'By aligning the product with real student behaviour, the direction became about cutting time wastage, removing middlemen, and making campus interactions feel effortless. Instead of forcing students to switch apps or chase information physically, Facity brings everything into a single, reliable interface built around their daily rhythm.',
                ],
            },
            {
                id: 'philosophy',
                type: 'insights',
                title: 'Core Philosophy',
                content: 'At the heart of Innovation Hub is one simple belief:',
                highlight: 'Innovations deserve to be seen, not just when it is finished, but while it\'s being built.',
                listType: 'bullets',
                items: [
                    {
                        title: 'Visibility',
                        body: 'Every innovation should have a place where people can see its progress and story in real time.',
                    },
                    {
                        title: 'Engagement',
                        body: 'Real innovation grows through feedback, reactions, and shared curiosity.',
                    },
                    {
                        title: 'Community',
                        body: 'A curated ecosystem where genuine builders connect around ideas, not algorithms.',
                    },
                ],
            },
            {
                id: 'ui-designs',
                type: 'ui-designs',
                images: [
                    { url: '/innovation-5.png', alt: 'Innovation Hub UI 1' },
                    { url: '/innovation-6.png', alt: 'Innovation Hub UI 2' },
                    { url: '/innovation-7.png', alt: 'Innovation Hub UI 3' },
                    { url: '/innovation-8.png', alt: 'Innovation Hub UI 4' },
                    { url: '/innovation-9.png', alt: 'Innovation Hub UI 5' },
                    { url: '/innovation-10.png', alt: 'Innovation Hub UI 6' },
                    { url: '/innovation-11.png', alt: 'Innovation Hub UI 7' },
                    { url: '/innovation-12.png', alt: 'Innovation Hub UI 8' },
                ],
            },
        ],
    },
    {
        id: 'consonance-club',
        title: 'Consonance Club Website Redesign & Development',
        subTitle: 'UX Design & WordPress Development',
        category: 'Web Development',
        year: '2023',
        layout: 'classic',
        overview:
            'A comprehensive redesign and development of Consonance Club’s digital presence, focusing on creating a seamless user experience and a high-performance WordPress platform.',
        heroImage: '/consonance-cover.png',
        tools: ['FIGMA', 'WORDPRESS'],
        skills: ['UX DESIGNER', 'WORDPRESS DEVELOPER', 'WEB DESIGNER'],
        visitUrl: 'https://consonance.club/',
        status: 'live',
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
        sections: [
            {
                id: 'overview',
                type: 'workflow',
                title: 'Project Overview',
                itemTitleWeight: 'medium',
                imagePosition: 'top',
                images: [{ url: '/consonance-1.png', alt: 'Project Overview' }],
                items: [
                    {
                        title: 'Design a new UI',
                        body: "I redesigned Consonance Club's website with a focus on user experience, creating a clean, intuitive layout that reflects the club's vibrant spirit and ensures seamless navigation across all devices.",
                    },
                    {
                        title: 'Develop Website',
                        body: "I developed the website on WordPress, optimizing it for performance, security, and ease of content management, ensuring a smooth and scalable platform for Consonance Club's needs.",
                    },
                ],
            },
            {
                id: 'research',
                type: 'workflow',
                title: 'Understanding User Wants, Needs and Expectations',
                itemTitleWeight: 'normal',
                imagePosition: 'top',
                content:
                    'I embarked on an intensive 2-week research sprint by diving headfirst into gathering insights tailored specifically for our project. During this period, I focused on user interviews all customized to suit our goals and objectives efficiently.',
                images: [{ url: '/consonance-2.png', alt: 'Workflow' }],
                items: [
                    {
                        title: 'Current frustrations and pain points',
                        body: [
                            'Difficulty navigating the website.',
                            'Lack of clear information about services.',
                        ],
                    },
                    {
                        title: 'What did they really want?',
                        body: [
                            'A seamless and intuitive website browsing experience.',
                            'Detailed product/service descriptions and specifications.',
                        ],
                    },
                    {
                        title: 'What did they really need?',
                        body: [
                            'User-friendly website design and navigation.',
                            'Accurate and comprehensive product/service information.',
                        ],
                    },
                ],
            },
            {
                id: 'takeaways',
                type: 'workflow',
                title: 'User Interviews Takeaways',
                itemTitleWeight: 'normal',
                listType: 'bullets',
                items: [
                    {
                        title: 'Usability Insights',
                        body: 'I gained insights into the usability of the website, including navigation issues, clarity of information, and overall user-friendliness, to inform design and layout decisions.',
                    },
                    {
                        title: 'User Pain Points',
                        body: 'I pinpointed areas of frustration encountered by users during their interaction with the current website, helping to prioritize improvements.',
                    },
                    {
                        title: 'Brand Perception',
                        body: 'I assessed users\' perceptions of the brand represented by the website, including its tone, messaging, and visual identity, to ensure alignment with brand values and objectives.',
                    },
                    {
                        title: 'Content Gaps',
                        body: 'Determined areas where users feel that important content is missing from the website, enabling the prioritization of content updates or additions.',
                    },
                    {
                        title: 'Technical Issues',
                        body: 'Identified technical performance concerns encountered by users, such as slow page load times or broken links, to prioritize website optimization and maintenance efforts.',
                    },
                ],
            },
            {
                id: 'conceptualizing',
                type: 'workflow',
                title: 'Conceptualizing',
                itemTitleWeight: 'normal',
                listType: 'bullets',
                content:
                    'I began prioritizing insights to form a strategy to meet user needs.',
                items: [
                    { title: 'Created user journey maps.' },
                    { title: 'Created affinity maps.' },
                    {
                        title: 'Prioritized customer painpoints, wants and needs.',
                    },
                ],
            },
            {
                id: 'ui-designs',
                type: 'ui-designs',
                title: 'UI Designs',
                images: [
                    { url: '/consonance-3.png', alt: 'Showcase 1' },
                    { url: '/consonance-4.png', alt: 'Showcase 2' },
                    { url: '/consonance-5.png', alt: 'Showcase 3' },
                    { url: '/consonance-6.png', alt: 'Showcase 4' },
                    { url: '/consonance-7.png', alt: 'Showcase 5' },
                    { url: '/consonance-8.png', alt: 'Showcase 6' },
                    { url: '/consonance-9.png', alt: 'Showcase 7' },
                    { url: '/consonance-10.png', alt: 'Showcase 8' },
                ],
            },
            {
                id: 'development',
                type: 'workflow',
                title: 'Development',
                itemTitleWeight: 'medium',
                listType: 'numbered',
                content: [
                    'Translating my design concepts into functional web pages.',
                    'This involved converting my visual designs into code that web browsers can understand. This process ensures that the website looks and behaves as intended, combining design aesthetics with technical functionality.',
                ],
                items: [
                    {
                        title: 'Familiarization with Wordpress',
                        body: 'As a newcomer to WordPress, the initial step involved seeking out learning resources to gain familiarity with the platform. This included online tutorials, documentation, and community forums where I could learn about WordPress basics.',
                    },
                    {
                        title: 'Customizing the website design',
                        body: 'Following a thorough understanding of WordPress functionalities, I proceeded to customize the website design. This involved selecting a suitable theme and using WordPress customization tools to build the website.',
                    },
                    {
                        title: 'Expanding functionality with plugins',
                        body: 'To enhance the website\'s functionality beyond design customization, I explored and installed plugins that offered additional capabilities. I extended the website\'s functionality to include specific requirements.',
                    },
                ],
            },
            {
                id: 'outcome-image',
                type: 'ui-designs',
                title: '',
                images: [{ url: '/consonance-11.png', alt: 'Outcome Milestone' }],
            },
            {
                id: 'outcomes',
                type: 'outcome',
                title: 'Outcomes',
                content: [
                    'In summary, the culmination of this project represents a significant milestone for both Consonance Club and my personal development. By seamlessly translating design concepts into functional web pages, we have not only enhanced the company\'s online presence but also improved user experience and engagement.',
                    'This impactful endeavour has contributed to the company\'s growth by attracting more visitors, increasing user interactions, and fostering a stronger community fo innovators.',
                ],
            },
            {
                id: 'values',
                type: 'insights',
                title: 'Why Consonance Club?',
                itemTitleWeight: 'medium',
                listType: 'numbered',
                content: [
                    'In summary, the culmination of this project represents a significant milestone for both Consonance Club and my personal development. By seamlessly translating design concepts into functional web pages, we have not only enhanced the company\'s online presence but also improved user experience and engagement.',
                    'This impactful endeavour has contributed to the company\'s growth by attracting more visitors, increasing user interactions, and fostering a stronger community fo innovators.',
                ],
                items: [
                    { title: 'Communication' },
                    { title: 'Punctuality' },
                    {
                        title: 'Responsibility',
                        body: ['Teamwork', 'Accountability'],
                    },
                ],
                postContent:
                    'Communication is paramount in any collaborative environment, and I value open, transparent communication as a cornerstone of success. Punctuality demonstrates respect for others\' time and commitments, reflecting my own dedication to meeting deadlines and honouring agreements. Responsibility, encompassing both teamwork and accountability, aligns with my belief in the importance of working collaboratively towards shared goals while taking ownership of my actions and decisions. These values not only reflect my personal ethos but also create a supportive and empowering culture conducive to growth and achievement.',
            },
        ],
    },
    {
        id: 'ounje-oba',
        title: 'Ounje Oba - Digital Marketplace for Local Food Vendors',
        category: 'Product Design',
        year: '2024',
        layout: 'classic',
        tools: ['LOTTIEFILES', 'FIGMA', 'NOTION'],
        skills: ['PRODUCT DESIGN', 'UX DESIGNER', 'UX RESEARCHER', 'MOBILE FIRST DESIGN'],
        overview:
            'Ounje Oba was created to solve the everyday challenge of buying fresh food items from local markets in a fast, reliable, and transparent way. Many users rely on informal buying processes that lack price clarity, delivery tracking, and accountability.',
        heroImage: '/ounje-oba-1.png',
        status: 'live',
        sections: [
            {
                id: 'overview',
                type: 'overview',
                title: 'Project Overview',
                content: [
                    'Ounje Oba was created to solve the everyday challenge of buying fresh food items from local markets in a fast, reliable, and transparent way. Many users rely on informal buying processes that lack price clarity, delivery tracking, and accountability.',
                    'The goal of this project was to design a scalable, user-friendly digital platform that serves the customers while maintaining simplicity across mobile and web experiences.',
                ],
                images: [{ url: '/ounje-oba.png', alt: 'Ounje Oba Platform' }],
                imagePosition: 'bottom',
            },
            {
                id: 'goals',
                type: 'goals',
                title: 'Design Goals',
                content: 'The design focused on three core goals:',
                items: [
                    {
                        title: '1',
                        body: 'Accessibility – Ensure the app works seamlessly for users with varying levels of digital literacy.',
                    },
                    {
                        title: '2',
                        body: 'Efficiency – Reduce the steps needed to place and fulfill an order.',
                    },
                    {
                        title: '3',
                        body: 'Trust & Transparency – Make pricing, order status, and accountability clear at every stage.',
                    },
                ],
            },
            {
                id: 'ui-designs',
                type: 'ui-designs',
                images: [
                    { url: '/ounje-oba-8.png', alt: 'Ounje Oba UI Design 8' },
                    { url: '/ounje-oba-7.png', alt: 'Ounje Oba UI Design 7' },
                    { url: '/ounje-oba-6.png', alt: 'Ounje Oba UI Design 6' },
                    { url: '/ounje-oba-5.png', alt: 'Ounje Oba UI Design 5' },
                    { url: '/ounje-oba-4.png', alt: 'Ounje Oba UI Design 4' },
                    { url: '/ounje-oba-3.png', alt: 'Ounje Oba UI Design 3' },
                    { url: '/ounje-oba-2.png', alt: 'Ounje Oba UI Design 2' },
                ],
            },
            {
                id: 'outcome',
                type: 'outcome',
                title: 'Outcome',
                content:
                    'The final design delivers a practical, scalable marketplace experience tailored to local food commerce. The product design balances business goals with on-the-ground realities, making Ounje Oba both usable and impactful.',
            },
        ],
    },
    {
        id: 'crm-dashboard',
        title: 'CRM Dashboard – Lead to Cash Workflow',
        category: 'Product Design',
        year: '2024',
        layout: 'classic',
        tools: ['FIGMA', 'WORKFLOW MAPPING', 'NOTION'],
        skills: ['PRODUCT DESIGN', 'UX DESIGNERS', 'UX RESEARCHER', 'SYSTEM THINKING', 'DASHBOARD'],
        overview:
            'This CRM dashboard was designed to streamline the end-to-end sales and delivery process for hospitality, sponsorship, and corporate partnerships.',
        heroImage: '/cover.png',
        status: 'development',
        sections: [
            {
                id: 'overview',
                type: 'overview',
                title: 'Project Overview',
                content: [
                    'This CRM dashboard was designed to streamline the end-to-end sales and delivery process for hospitality, sponsorship, and corporate partnerships.',
                    'Many teams rely on fragmented tools, spreadsheets, and manual follow-ups, which leads to lost leads, poor visibility, and missed renewals.',
                    'The goal of this project was to design a clear, structured Lead-to-Cash system that captures leads, manages deals, automates key documents, and tracks delivery — all within a simple, easy-to-use CRM experience.',
                ],
                images: [{ url: '/crm-1.png', alt: 'CRM Dashboard Overview' }],
                imagePosition: 'bottom',
            },
            {
                id: 'goals',
                type: 'goals',
                title: 'Design Goals',
                content: 'The design focused on three core goals:',
                items: [
                    {
                        title: '1',
                        body: 'Simplicity – Remove unnecessary enterprise CRM complexity and focus only on what sales and operations teams actually need.',
                    },
                    {
                        title: '2',
                        body: 'Visibility – Ensure every deal, document, payment, and delivery status is visible at a glance.',
                    },
                    {
                        title: '3',
                        body: 'Continuity – Create a seamless flow from first contact to renewal, without breaking context or losing historical data.',
                    },
                ],
            },
            {
                id: 'ui-designs',
                type: 'ui-designs',
                images: [
                    { url: '/crm-2.jpg', alt: 'CRM Dashboard Design 2' },
                    { url: '/crm-3.jpg', alt: 'CRM Dashboard Design 3' },
                    { url: '/crm-4.jpg', alt: 'CRM Dashboard Design 4' },
                    { url: '/crm-5.jpg', alt: 'CRM Dashboard Design 5' },
                    { url: '/crm-6.jpg', alt: 'CRM Dashboard Design 6' },
                    { url: '/crm-7.jpg', alt: 'CRM Dashboard Design 7' },
                    { url: '/crm-8.jpg', alt: 'CRM Dashboard Design 8' },
                    { url: '/crm-9.jpg', alt: 'CRM Dashboard Design 9' },
                ],
            },
            {
                id: 'outcome',
                type: 'outcome',
                title: 'Outcome',
                content: [
                    'The final CRM dashboard delivers a structured yet flexible Lead-to-Cash system that supports sales, finance, marketing, and operations teams without unnecessary complexity.',
                    'The design balances business visibility with usability, making it suitable for organizations that need enterprise discipline without enterprise friction.',
                ],
            },
        ],
    },
    {
        id: 'fund-cycle',
        title: 'Fund Cycle — Digital Thrift & Savings Management App',
        category: 'Product Design',
        year: '2024',
        layout: 'classic',
        tools: ['FIGMA', 'WORKFLOW MAPPING', 'NOTION'],
        skills: ['PRODUCT DESIGN', 'UX DESIGNERS', 'UX RESEARCHER', 'SYSTEM THINKING', 'DASHBOARD'],
        overview:
            'A mobile-first platform that helps individuals and groups save money collaboratively, manage thrift cycles, and automate contributions with transparency and trust.',
        heroImage: '/thift-cover.png',
        status: 'development',
        sections: [
            {
                id: 'overview',
                type: 'workflow',
                title: 'Project Overview',
                itemTitleWeight: 'medium',
                items: [
                    {
                        title: 'Problem',
                        body: 'Traditional thrift savings (ajo/esusu/adashe) rely heavily on manual tracking, trust, and offline coordination. This often leads to missed contributions, disputes, lack of transparency, and difficulty scaling savings groups beyond close-knit circles.',
                    },
                    {
                        title: 'Solution',
                        body: 'Fund Cycle was designed to digitize the thrift savings experience—allowing users to create or join savings groups, automate contributions, track payouts, and manage cycles securely through a mobile app.',
                    },
                    {
                        title: 'Product Goal',
                        body: 'To create a secure, transparent, and easy-to-use platform that enables individuals and groups to save collaboratively while reducing friction, errors, and trust issues.',
                    },
                ],
                images: [{ url: '/thrift-10.jpg', alt: 'Fund Cycle Product Goal' }],
                imagePosition: 'bottom',
            },
            {
                id: 'goals',
                type: 'goals',
                title: 'Design Goals',
                content: 'The design focused on three core goals:',
                items: [
                    {
                        title: '1',
                        body: 'Accessibility – Design an experience that works for users with varying levels of financial and digital literacy.',
                    },
                    {
                        title: '2',
                        body: 'Transparency & Trust – Ensure every contribution, payout, and cycle status is visible and traceable.',
                    },
                    {
                        title: '3',
                        body: 'Efficiency – Reduce the effort required to create groups, contribute funds, and receive payouts.',
                    },
                ],
            },
            {
                id: 'ui-designs',
                type: 'ui-designs',
                images: [
                    { url: '/thirft-1.jpg', alt: 'Fund Cycle UI Design 1' },
                    { url: '/thirft-2.jpg', alt: 'Fund Cycle UI Design 2' },
                    { url: '/thirft-3.jpg', alt: 'Fund Cycle UI Design 3' },
                    { url: '/thirft-4.jpg', alt: 'Fund Cycle UI Design 4' },
                    { url: '/thirft-5.jpg', alt: 'Fund Cycle UI Design 5' },
                    { url: '/thirft-6.jpg', alt: 'Fund Cycle UI Design 6' },
                    { url: '/thirft-7.jpg', alt: 'Fund Cycle UI Design 7' },
                    { url: '/thrift-8.jpg', alt: 'Fund Cycle UI Design 8' },
                ],
            },
            {
                id: 'outcome',
                type: 'workflow',
                title: 'Outcome',
                itemTitleWeight: 'medium',
                items: [
                    {
                        title: 'Final Outcome',
                        body: 'The final design delivers a scalable and user-centered digital savings platform that simplifies thrift management while preserving the trust and accountability central to traditional savings groups.',
                    },
                    {
                        title: 'Impact Highlights',
                        body: [
                            'Reduced contribution friction',
                            'Improved transparency for group savings',
                            'Clear admin control and accountability',
                            'Ready for future expansion (web + admin dashboard)',
                        ],
                    },
                ],
            },
        ],
    },
]
