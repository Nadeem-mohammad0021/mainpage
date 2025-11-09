'use client';

import { useState, useEffect } from 'react';

export default function TermsOfService() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Terms of Service</h1>
        <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Introduction</h2>
          <p className="mb-4">
            Welcome to Kynex.dev. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website 
            and services. By accessing or using our website and services, you agree to be bound by these Terms and 
            our Privacy Policy.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Services</h2>
          <p className="mb-4">
            Kynex.dev provides software development, artificial intelligence solutions, and technology consulting 
            services. Our services are subject to these Terms and any additional terms that may apply to specific services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">User Responsibilities</h2>
          <p className="mb-4">
            As a user of our services, you agree to:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Provide accurate and complete information when requested</li>
            <li>Maintain the security of your account credentials</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not interfere with or disrupt the integrity or performance of our services</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at{' '}
            <a href="mailto:contact@kynex.dev" className="text-blue-600 dark:text-blue-400 hover:underline">
              contact@kynex.dev
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
