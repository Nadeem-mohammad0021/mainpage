import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://kynex.dev'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/protected', '/api/secret'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}