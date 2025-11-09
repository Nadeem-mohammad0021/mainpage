import Hero from '@/components/Hero';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Star, Zap, Atom, Cpu, Brain, ArrowRight, Bot, TrendingUp, Target, MessageCircle, User, Settings } from 'lucide-react';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Our Products | KYNEX.dev';
  const description = 'Explore KYNEX.dev\'s innovative AI products and solutions designed to transform industries and empower businesses with intelligent automation.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://kynex.dev/product',
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

export default function ProductPage() {
  // Core products (moved from submenu)
  const coreProducts = [
    {
      icon: Bot,
      title: 'AI-Agent Builder',
      description: 'Create and deploy custom AI agents with our no-code platform. Build intelligent assistants that automate complex tasks and interact naturally with users.',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/10 to-purple-500/10',
      link: 'https://agent.kynex.dev/',
      external: true,
    },
    {
      icon: MessageCircle,
      title: 'AI-Assistant',
      description: 'Personal AI workspace with long-term memory capabilities. Our intelligent assistant helps you organize information, automate tasks, and enhance productivity with contextual understanding and persistent memory across sessions.',
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-500/10 to-teal-500/10',
      link: 'https://assistant.kynex.dev/',
      external: true,
    },
    // {
    //   icon: TrendingUp,
    //   title: 'Pricing',
    //   description: 'Flexible pricing plans designed for businesses of all sizes. From startups to enterprises, find the perfect plan that fits your budget and requirements.',
    //   gradient: 'from-amber-500 to-orange-500',
    //   bgGradient: 'from-amber-500/10 to-orange-500/10',
    //   link: '/#pricing',
    //   external: false,
    // },
  ];

  // Empty submenu products array
  const submenuProducts: any[] = [];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(15,76,117,0.1)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(15,76,117,0.2)_0%,rgba(0,0,0,0)_70%)]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/6 floating animate-float" style={{ animationDelay: '0s' }}>
          <Star className="h-8 w-8 text-blue-400/30 dark:text-blue-400/20" fill="currentColor" />
        </div>
        <div className="absolute top-1/3 right-1/4 floating animate-float" style={{ animationDelay: '2s' }}>
          <Sparkles className="h-6 w-6 text-purple-400/30 dark:text-purple-400/20" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 floating animate-float" style={{ animationDelay: '4s' }}>
          <Zap className="h-7 w-7 text-cyan-400/30 dark:text-cyan-400/20" />
        </div>
      </div>
      
      {/* Hero Section for Product Page */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 animate-fadeIn backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>AI Innovation Suite</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
              Our
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Products
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Cutting-edge AI solutions designed to transform industries and empower businesses with intelligent automation.
          </p>
        </div>
      </section>
      
      {/* Core Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm pulse-animation">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Our Innovation Portfolio</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent animate-fadeIn">
              Core AI Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              Transform your business with our suite of intelligent products designed for the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreProducts.map((product, index) => (
              <div
                key={product.title}
                className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${product.gradient} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <a 
                    href={product.link}
                    target={product.external ? "_blank" : "_self"}
                    rel={product.external ? "noopener noreferrer" : ""}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 group mt-4"
                  >
                    Explore Product
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
                
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mt-10 text-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              <div className="relative">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                  Join forward-thinking organizations leveraging our AI solutions to drive innovation and growth.
                </p>
                <Link href="/contact" className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block">
                  Schedule a Demo
                </Link>
              </div>
              
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
