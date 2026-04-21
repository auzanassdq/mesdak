import { MetadataRoute } from 'next'
import { getRegionConfig } from '@/lib/config'

export default function manifest(): MetadataRoute.Manifest {
  const config = getRegionConfig();
  
  return {
    name: `${config.name} - Digital Solutions for Small Businesses`,
    short_name: config.name,
    description: config.heroTitle,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: config.colors.primary,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: config.logo,
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: config.logo,
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'finance', 'productivity'],
    lang: 'en',
    dir: 'ltr',
  }
}