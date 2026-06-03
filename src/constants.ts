import { Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Toda Diva Store',
    category: 'E-commerce / Fashion Store',
    date: '2025 - Present',
    description: 'A modern and elegant online storefront for showcasing women’s fashion products with a direct WhatsApp sales flow.',
    fullDescription: 'Toda Diva Store is a stylish and lightweight fashion e-commerce interface designed to present clothing collections, categories, featured products, and promotional highlights. The project focuses on a smooth shopping experience, allowing customers to browse products and quickly contact the seller through WhatsApp to complete their purchase.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=1200',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Instagram Integration'],
    links: {
      github: '#',
      demo: '#'
    },
    metrics: [
      { label: 'Latency', value: '< 50ms' },
      { label: 'Users', value: '10k+' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
  {
    id: '2',
    title: 'Nebula Commerce',
    category: 'E-commerce / UX',
    date: '2023',
    description: 'Elevating the shopping experience with cinematic transitions and AI-powered recommendations.',
    fullDescription: 'Nebula is a direct-to-consumer platform that redefines how users interact with premium products. Every interaction is designed to feel fluid and immersive.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200',
    stack: ['Next.js', 'Framer Motion', 'Stripe', 'Node.js'],
    links: {
      github: '#',
      demo: '#'
    }
  },
  {
    id: '3',
    title: 'Aether Engine',
    category: 'Open Source / Core',
    date: '2022',
    description: 'A lightweight rendering engine for 3D web experiences.',
    fullDescription: 'Aether is a specialized tool for developers who want to create high-end visual experiences without the overhead of heavy frameworks.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
    stack: ['WebGPU', 'Rust', 'WASM', 'WGSL'],
    links: {
      github: '#'
    }
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    company: 'Timmy - id5',
    role: 'Frontend Developer',
    period: '2024 - Present',
    description: 'Specialized in crafting modern and responsive landing pages, converting Figma and Photoshop designs into fully functional WordPress websites. Developing custom themes from scratch, extending Elementor functionality, and delivering optimized user experiences focused on performance and conversion.',
    tech: ['Wordpress', 'Elementor', 'PHP', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap', 'Figma', 'Photoshop']
  },
  {
    id: 'e2',
    company: 'FullService',
    role: 'Full Stack Developer',
    period: '2024 - Present',
    description: 'Responsible for the development, maintenance, and enhancement of enterprise applications for the energy sector. Managing and optimizing SQL Server and MariaDB databases, administering GLPI environments, extracting and analyzing operational data, implementing new features, fixing issues, and supporting IT infrastructure and business processes.',
    tech: ['PHP', 'Laravel','Python', 'Bootstrap', 'SQL Server', 'MariaDB', 'GLPI', 'JavaScript', 'jQuery', 'REST APIs', 'Git']
  },
  {
    id: 'e3',
    company: 'Lets Evolve',
    role: 'Full Stack Developer',
    period: '2022 - 2023',
    description: 'Designing and building custom web solutions for clients across various industries.',
    tech: ['PHP', 'Bootstrap', 'Laravel', 'jQuery']
  },
  {
    id: 'e4',
    company: 'Devt',
    role: 'Founder & Software Engineer',
    period: '2022 - Present',
    description: 'Leading the development of custom software solutions, SaaS platforms, enterprise systems, e-commerce applications, and digital transformation projects. Delivering end-to-end solutions involving frontend and backend development, database engineering, cloud infrastructure, API integrations, process automation, business intelligence, and data extraction. Supporting clients throughout the entire software lifecycle, from architecture and implementation to deployment and maintenance.',
      tech: [
        'PHP',
        'Laravel',
        'Filament',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Next.js',
        'NestJS',
        'Vue.js',
        'Inertia.js',
        'React',
        'WordPress',
        'Elementor',
        'MySQL',
        'MariaDB',
        'PostgreSQL',
        'SQL Server',
        'Python',
        'Tailwind CSS',
        'Bootstrap',
        'Docker',
        'Linux',
        'Nginx',
        'Apache',
        'Git'
      ]
  }
];
