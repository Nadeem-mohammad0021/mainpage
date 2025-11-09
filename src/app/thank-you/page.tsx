import type { Metadata } from 'next';
import ThankYouClient from '@/app/thank-you/ThankYouClient';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Thank You | KYNEX.dev';
  const description = 'Thank you for reaching out to us. We appreciate your message and will get back to you soon.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://kynex.dev/thank-you',
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

export default function ThankYouPage() {
  return <ThankYouClient />;
}