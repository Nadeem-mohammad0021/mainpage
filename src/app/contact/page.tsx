import Contact from '@/components/Contact';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Contact Us | KYNEX.dev';
  const description = 'Get in touch with KYNEX.dev for AI collaborations, partnerships, and innovation inquiries.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://kynex.dev/contact',
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

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Contact />
    </div>
  );
}