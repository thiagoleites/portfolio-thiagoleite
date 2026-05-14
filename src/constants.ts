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
    company: 'Vercel',
    role: 'Senior Frontend Engineer',
    period: '2023 - Present',
    description: 'Leading the development of modern web frameworks and developer interfaces.',
    tech: ['React', 'Next.js', 'Rust']
  },
  {
    id: 'e2',
    company: 'Stripe',
    role: 'Product Designer / Developer',
    period: '2021 - 2023',
    description: 'Crafting premium payment experiences and interactive dashboards.',
    tech: ['Figma', 'React', 'Motion']
  }
];
