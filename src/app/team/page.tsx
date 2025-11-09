import Team from '@/components/Team';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Our Team | KYNEX.dev';
  const description = 'Meet the experts, engineers, and innovators shaping KYNEX.dev\'s next-generation AI systems.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://kynex.dev/team',
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

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Team />
    </div>
  );
}