import About from '@/components/About';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'About Us | KYNEX.dev';
  const description = 'Learn more about KYNEX.dev — our mission, vision, and the AI innovation powering the intelligent future.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://kynex.dev/about',
      siteName: 'KYNEX.dev',
      images: [
        {
          url: '/logo.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/logo.png'],
      creator: '@kynexdev',
    },
  };
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <About />
    </div>
  );
}