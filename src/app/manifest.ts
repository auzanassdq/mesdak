import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MSME World - Digital Solutions for Small Businesses',
    short_name: 'MSME World',
    description: 'Leading digitization, decentralization, and decarbonization towards sustainable development for MSMEs worldwide.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo/msme-world-white.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo/msme-world-white.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'finance', 'productivity'],
    lang: 'en',
    dir: 'ltr',
  }
}