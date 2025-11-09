import Link from 'next/link';
import { ArrowLeft, Frown, Search, Zap, Star } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Page Not Found | KYNEX.dev';
  const description = 'Oops! The page you\'re looking for doesn\'t exist.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://kynex.dev/404',
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

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 animate-bounce" style={{ animationDelay: '0s' }}>
        <Star className="h-8 w-8 text-yellow-400" fill="currentColor" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-bounce" style={{ animationDelay: '1s' }}>
        <Star className="h-6 w-6 text-blue-400" fill="currentColor" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 animate-bounce" style={{ animationDelay: '2s' }}>
        <Star className="h-10 w-10 text-purple-400" fill="currentColor" />
      </div>

      <div className="max-w-md w-full space-y-8 text-center relative z-10">
        <div className="flex justify-center">
          <div className="relative">
            <Frown className="h-32 w-32 text-blue-600 dark:text-blue-400 mx-auto" />
            <div className="absolute -top-2 -right-2 animate-spin">
              <Zap className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-7xl font-extrabold text-gray-900 dark:text-white animate-fadeIn">
              4
              <span className="inline-block animate-spin" style={{ animationDuration: '3s' }}>0</span>
              4
            </h1>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white animate-fadeInUp">
              Page Not Found
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-3">
              <Search className="h-5 w-5 mr-2" />
              <span>Here are some helpful links:</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link 
                href="/" 
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300 text-sm font-medium"
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-300 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          
          <div className="mt-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}