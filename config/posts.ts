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
    id: 'alongside',
    title: 'Alongside',
    description: 'A collection of demos exploring the future of human-AI interaction',
    image: '/images/alo-logo.webp',
    category: 'Startup',
    date: '2024'
  },
  {
    id: 'ava',
    title: 'AVA / Autonomous Vehicular Assistant',
    description: 'A social robot designed to build trust in autonomous vehicles',
    image: '/images/ava0.webp',
    category: 'Robotics',
    date: '2018'
  },
  {
    id: 'creator',
    title: 'CREATOR / Structure Building Robot',
    description: 'A robotic system that autonomously replicates LEGO structures',
    image: '/images/creator0.webp',
    category: 'Robotics',
    date: '2018'
  },
  {
    id: 'leo',
    title: 'LEO / Local Environment Orbiter',
    description: 'A companion robot for environmental monitoring',
    image: '/images/leo4.webp',
    category: 'Robotics',
    date: '2019'
  },
  {
    id: 'focus',
    title: 'Focus / Unamusement Park',
    description: 'VR Sanctuary for the Mind',
    image: '/images/focus1.webp',
    category: 'Software',
    date: '2019'
  },
  {
    id: 'express',
    title: 'Express',
    description: 'A retail checkout counter turned into an in-store musical instrument',
    image: '/images/express1.webp',
    category: 'Hardware',
    date: '2019'
  },
  {
    id: 'hohohobot',
    title: 'The HoHoHoBot',
    description: 'A roving campus christmas tree with interactive baubles',
    image: '/images/hohoho1.webp',
    category: 'Robotics',
    date: '2019'
  },
  {
    id: 'accessible',
    title: 'Accessible Interfaces',
    description: 'A series of projects exploring accessibile hardware interfaces',
    image: '/images/accint3.webp',
    category: 'Hardware',
    date: '2018'
  },
  {
    id: 'samsung',
    title: 'Samsung Brio: Neonatal Fitbit',
    description: 'Designing a pregnancy companion app to go with a wearable for BEST Lab',
    image: '/images/samsung10.webp',
    category: 'Software',
    date: '2017'
  },
  {
    id: 'spare8',
    title: 'Spare8: Redesigning a Digital Gold Investment App',
    description: 'A fintech startup redesign case study focusing on digital gold investments',
    image: '/images/spare81.webp',
    category: 'Software',
    date: '2022'
  },
  {
    id: 'zeno',
    title: 'Zeno Health: App Review',
    description: 'UX review and redesign of a digital pharmacy app',
    image: '/images/zeno3.webp',
    category: 'Software',
    date: '2022'
  },
  {
    id: 'slacktion',
    title: 'Slacktion / Blockchain for Social Media Activism',
    description: 'A blockchain-based micropayment system for social media activism',
    image: '/images/slacktion0.webp',
    category: 'Software',
    date: '2017'
  },
  {
    id: 'flytime',
    title: 'Flytime',
    description: 'An travel companion app focused on airport navigation, retail and rewards',
    image: '/images/flytime1.webp',
    category: 'Software',
    date: '2023-08'
  },
];