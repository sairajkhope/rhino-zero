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
    description: 'A collection of demos exploring the future of human-AI interaction',
    image: '/images/alo-logo.webp',
    category: 'Startup',
    date: '2023'
  },
  {
    id: 'alongside-2',
    title: 'Pal',
    description: 'A collection of demos exploring the future of human-AI interaction',
    image: '/images/alo-logo.webp',
    category: 'Startup',
    date: '2023'
  },
  {
    id: 'alongside-3',
    title: 'Creator',
    description: 'A collection of demos exploring the future of human-AI interaction',
    image: '/images/alo-logo.webp',
    category: 'Startup',
    date: '2024'
  },
  {
    id: 'ontheprowl-1',
    title: 'OnTheProwl',
    description: 'A social robot designed to build trust in autonomous vehicles',
    image: '/images/ava0.webp',
    category: 'Startup',
    date: '2020'
  },
  {
    id: 'ontheprowl-2',
    title: 'OnTheProwl v2',
    description: 'Next generation social robot that enhances human-vehicle trust through intuitive communication and adaptive interaction',
    image: '/images/ava0.webp',
    category: 'Startup',
    date: '2021'
  },
  {
    id: 'safet',
    title: 'Safe.t',
    description: 'A robotic system that autonomously replicates LEGO structures',
    image: '/images/creator0.webp',
    category: 'Health',
    date: '2020'
  },
];