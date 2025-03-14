export interface Post {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export const posts = [
  {
    id: 'alongside-1',
    title: 'Robin',
    description: 'Your Personal Robot Companion',
    image: '/images/alo-logo.webp',
    category: 'Startup',
    date: '2023'
  },
  {
    id: 'alongside-2',
    title: 'Pal',
    description: 'An interactive character AI Companion',
    image: '/images/alo-logo.webp',
    category: 'Startup',
    date: '2023'
  },
  {
    id: 'alongside-3',
    title: 'Creator',
    description: 'Agentic AI Workspace',
    image: '/images/alo-logo.webp',
    category: 'Startup',
    date: '2024'
  },
  {
    id: 'ontheprowl-1',
    title: 'OnTheProwl',
    description: 'Explorers guide to Indias National Parks',
    image: '/images/otp_artboard.webp',
    category: 'Startup',
    date: '2020'
  },
  {
    id: 'ontheprowl-2',
    title: 'OnTheProwl v2',
    description: 'Travel with your tribe',
    image: '/images/otp_cover.webp',
    category: 'Startup',
    date: '2021'
  },
  {
    id: 'safet',
    title: 'Safe.t',
    description: 'End-to-End Covid Tracing and Triage',
    image: '/images/creator0.webp',
    category: 'Health',
    date: '2020'
  },
  {
    id: 'hyperloop',
    title: 'Hyperloop India',
    description: 'Indias first Hyperloop Pod',
    image: '/images/creator0.webp',
    category: 'Health',
    date: '2017'
  },
];