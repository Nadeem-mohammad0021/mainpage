import Hero from '../components/Hero';
import Link from 'next/link';
import { Bot, Cog, TrendingUp, Target, Heart, Users as UsersIcon, Sparkles, Zap, Star } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'KYNEX.dev - AI Innovation for the Intelligent Future';
  const description = 'KYNEX.dev is an AI software company pioneering intelligent and autonomous technology — creating adaptive, human-centered AI systems that simplify complexity and empower innovation.';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://kynex.dev',
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

export default function Home() {
  const features = [
    {
      icon: Bot,
      title: 'AI Innovation',
      description: 'Creating dynamic systems that think, learn, and evolve with intelligence at the core.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Cog,
      title: 'Automation',
      description: 'Simplifying complex workflows with intelligent process automation that scales.',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Design',
      description: 'Building modular, future-ready solutions optimized for performance and growth.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
    },
  ];

  const values = [
    { icon: Target, title: 'Innovation', description: 'We challenge conventions to build what\'s next' },
    { icon: Heart, title: 'Integrity', description: 'Transparency and trust form the foundation of our technology' },
    { icon: UsersIcon, title: 'Collaboration', description: 'Great ideas thrive in shared creativity' },
    { icon: TrendingUp, title: 'Excellence', description: 'We deliver more than what\'s expected, every time' },
  ];

  return (
    <>
      <Hero />
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 floating animate-float" style={{ animationDelay: '0s' }}>
            <Sparkles className="h-6 w-6 text-blue-400/30 dark:text-blue-400/20" />
          </div>
          <div className="absolute top-1/3 right-1/3 floating animate-float" style={{ animationDelay: '1s' }}>
            <Star className="h-8 w-8 text-purple-400/30 dark:text-purple-400/20" fill="currentColor" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 floating animate-float" style={{ animationDelay: '2s' }}>
            <Zap className="h-6 w-6 text-cyan-400/30 dark:text-cyan-400/20" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 animate-fadeIn backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Discover Our Story</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent animate-fadeIn">
              Who We Are
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              An innovation-driven AI software company focused on designing intelligent, adaptive, and scalable systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white relative overflow-hidden mb-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

            <div className="relative text-center">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Our Mission & Vision
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h4 className="text-2xl font-bold mb-3">Vision</h4>
                  <p className="text-lg opacity-90 leading-relaxed">
                    To create intelligent, autonomous systems that empower people, organizations, and industries worldwide.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <h4 className="text-2xl font-bold mb-3">Mission</h4>
                  <p className="text-lg opacity-90 leading-relaxed">
                    To design adaptive, data-driven software that bridges the gap between human intelligence and artificial intelligence.
                  </p>
                </div>
              </div>
              <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed opacity-90 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                Kynex.dev was founded with a single mission — to build a smarter digital future powered by intelligence and automation. We blend innovation with deep technical expertise to develop systems that adapt, analyze, and act autonomously.
              </p>
            </div>

            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                >
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{value.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/30 dark:via-transparent dark:to-purple-950/30"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-3xl mx-auto">
            <div className="space-y-4 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-4 backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span>Let's Build the Future</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-gray-900 dark:text-white font-quador">
                Ready to Build with AI?
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400 text-lg md:text-xl lg:text-2xl/relaxed">
                Join Kynex.dev in shaping the intelligent future — where AI and humans collaborate seamlessly.
              </p>
            </div>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 inline-flex items-center justify-center font-quador text-lg animate-fadeInUp"
              style={{ animationDelay: '0.2s' }}
            >
              Get in Touch
              <Zap className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}