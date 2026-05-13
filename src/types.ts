export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  fullDescription: string;
  image: string;
  stack: string[];
  links: {
    github?: string;
    demo?: string;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}
