'use client';

import Link from 'next/link';
import { CheckCircle, ArrowLeft, Heart, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThankYouClient() {
  const [isVisible, setIsVisible] = useState(true);
  const [sparkles, setSparkles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  useEffect(() => {
    // Check if this is a fresh load (not from navigation)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry && navigationEntry.type === 'reload') {
      // If page was refreshed, redirect to home page
      window.location.href = '/';
    }

    // Generate sparkles for animation
    const generateSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 15; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 10 + 5
        });
      }
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-950 px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Sparkles animation */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-yellow-400 animate-ping"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            fontSize: `${sparkle.size}px`,
            animationDuration: '2s',
            animationDelay: `${Math.random() * 2}s`
          }}
        >
          <Sparkles />
        </div>
      ))}

      <div className="max-w-md w-full space-y-8 text-center relative z-10">
        <div className="flex justify-center">
          <div className="relative">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto" />
            <div className="absolute inset-0 h-24 w-24 animate-ping rounded-full bg-green-400 opacity-20"></div>
            
            {/* Floating hearts animation */}
            <div className="absolute -top-2 -right-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <Heart className="h-6 w-6 text-pink-500" fill="currentColor" />
            </div>
            <div className="absolute -bottom-2 -left-2 animate-bounce" style={{ animationDelay: '1s' }}>
              <Heart className="h-6 w-6 text-pink-500" fill="currentColor" />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white animate-fadeIn">
            Thank You! <span className="text-green-500">❤️</span>
          </h1>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg animate-fadeInUp">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We've received your message and appreciate you reaching out to us.
            </p>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Our team will review your message and get back to you as soon as possible.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 font-medium">
              Have a great day!
            </p>
          </div>
          
          <div className="mt-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
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