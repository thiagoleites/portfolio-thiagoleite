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
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Instagram Integration'],
    links: {
      github: '#',
      demo: 'https://todadiva.store'
    },
    metrics: [
      { label: 'Latency', value: '< 50ms' },
      { label: 'Users', value: '10k+' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
  {
    id: '2',
    title: 'Moto ERP',
    category: 'Enterprise Software / Automotive',
    date: '2026',
    description: 'A comprehensive ERP system tailored for motorcycle dealerships, integrating inventory management, sales tracking, customer relationship management, and financial reporting.',
    fullDescription: 'Moto ERP is a robust enterprise resource planning solution designed to streamline operations for motorcycle dealerships. It features modules for inventory management, sales tracking, customer relationship management (CRM), and financial reporting. The system provides real-time insights into dealership performance, helping managers make informed decisions and optimize business processes.',
    image: 'https://motoerp.com.br/assets/logo-v3.png',
    stack: ['Next.js', 'Nestjs', 'Postgres', 'TypeScript', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/thiagoleites/motoerp.git',
      demo: 'https://motoerp.com.br'
    }
  },
  {
    id: '3',
    title: 'Free Pay',
    category: 'SaaS / Business Management',
    date: '2025',
    description: 'A business management platform designed for freelancers and MEIs, helping professionals organize projects, track finances, and generate business reports.',
    fullDescription: 'Free Pay is a SaaS platform created to simplify business management for freelancers and small entrepreneurs (MEIs). The system provides tools for project management, client tracking, financial control, service monitoring, and detailed business reporting. Users can manage their workflow, monitor revenue and expenses, organize contracts and deliveries, and generate reports to support financial planning and business growth. The platform focuses on productivity, organization, and providing clear insights into business performance through an intuitive and modern interface.',
    image: 'https://freepay.testeprovisorio.com.br',
    stack: [
      'Laravel',
      'PHP',
      'Filament',
      'MySQL',
      'JavaScript',
      'jQuery',
      'Bootstrap'
    ],
    links: {
      github: '#',
      demo: 'https://freepay.testeprovisorio.com.br'
    }
  },
  {
    id: '4',
    title: 'Devt Portfolio',
    category: 'Personal Portfolio / Developer Showcase',
    date: '2024',
    description: 'A personal portfolio website to showcase my projects, skills, and experience as a software engineer.',
    fullDescription: 'This portfolio website is designed to highlight my work as a software engineer, featuring sections for projects, skills, experience, and contact information. The site is built with a modern design aesthetic, utilizing smooth animations and responsive layouts to provide an engaging user experience. It serves as a platform to demonstrate my technical expertise, creativity, and professional journey in the tech industry.',
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=1200',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/thiagoleites/portfolio-thiago.git',
      demo: 'https://thiagoleite.eu/'
    }
  },
  {
    id: '5',
    title: 'Kaká Multimarcas',
    category: 'Ecommerce',
    date: '2026',
    description: 'A modern and elegant online storefront for showcasing women’s fashion products with a direct WhatsApp sales flow.',
    fullDescription: 'Kaká Multimarcas is a stylish and lightweight fashion e-commerce interface designed to present clothing collections, categories, featured products, and promotional highlights. The project focuses on a smooth shopping experience, allowing customers to browse products and quickly contact the seller through WhatsApp to complete their purchase.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&q=80&w=1200',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    links: {
      github: '#',
      demo: 'https://kakamultimarcas.com.br'
    },
    metrics: [
      { label: 'Latency', value: '< 50ms' },
      { label: 'Users', value: '10k+' },
      { label: 'Uptime', value: '99.9%' }
    ]
  },
  {
    id: '6',
    title: 'Devt Website',
    category: 'Developer Site / Business Showcase / Show products and services',
    date: '2025',
    description: 'A business website to showcase my company, Devt, and the products and services we offer.',
    fullDescription: 'The Devt website is designed to present our company, services, and products in a professional and engaging manner. It features sections for company information, service offerings, product showcases, client testimonials, and contact details. The site is built with a modern design aesthetic, utilizing smooth animations and responsive layouts to provide an engaging user experience. It serves as a platform to demonstrate our expertise, creativity, and commitment to delivering high-quality software solutions.',
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&q=80&w=1200',
    stack: ['Nuxt.js', 'TypeScript', 'Tailwind CSS'],
    links: {
      github: '#',
      demo: 'https://devt.com.br'
    },
    metrics: [
      { label: 'Latency', value: '< 50ms' },
      { label: 'Users', value: '10k+' },
      { label: 'Uptime', value: '99.9%' }
    ]
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
