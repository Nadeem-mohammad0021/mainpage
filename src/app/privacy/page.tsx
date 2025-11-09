'use client';

import { useState, useEffect } from 'react';

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Privacy Policy</h1>
        <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Introduction</h2>
          <p className="mb-4">
            At Kynex.dev, we are committed to protecting your personal information and your right to privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
            you visit our website and use our services.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Information We Collect</h2>
          <p className="mb-4">
            We may collect personal information that you voluntarily provide to us when you express an interest 
            in obtaining information about us or our products and services. This information may include:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Contact preferences</li>
            <li>Billing and shipping addresses</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">How We Use Your Information</h2>
          <p className="mb-4">
            We use personal information collected via our website for a variety of business purposes described below:
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>To facilitate account creation and logon process</li>
            <li>To send administrative information</li>
            <li>To protect our Services</li>
            <li>To enforce our terms, conditions and policies</li>
            <li>To respond to legal requests and prevent harm</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Us</h2>
          <p className="mb-4">
            If you have questions or comments about this policy, you may email us at{' '}
            <a href="mailto:contact@kynex.dev" className="text-blue-600 dark:text-blue-400 hover:underline">
              contact@kynex.dev
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
