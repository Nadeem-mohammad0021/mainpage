import { Users, Lightbulb, Code, HeartHandshake, Atom, Network, Sparkles, Star, Zap } from "lucide-react";
import Link from "next/link";

export default function About() {
  const team = [
    {
      name: "AI Engineers",
      description:
        "Crafting systems that learn, adapt, and redefine the boundaries of artificial intelligence.",
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      name: "Design Thinkers",
      description:
        "Blending aesthetics and usability to create seamless AI-driven experiences.",
      icon: Lightbulb,
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      name: "Collaborators",
      description:
        "Bringing together diverse minds to co-create future-ready solutions.",
      icon: HeartHandshake,
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-20 px-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      
      {/* Floating elements */}
      <div className="absolute top-1/6 left-1/5 floating animate-float" style={{ animationDelay: '0s' }}>
        <Star className="h-8 w-8 text-blue-400/30 dark:text-blue-400/20" fill="currentColor" />
      </div>
      <div className="absolute top-1/3 right-1/3 floating animate-float" style={{ animationDelay: '2s' }}>
        <Sparkles className="h-6 w-6 text-purple-400/30 dark:text-purple-400/20" />
      </div>
      <div className="absolute bottom-1/4 left-1/4 floating animate-float" style={{ animationDelay: '4s' }}>
        <Zap className="h-7 w-7 text-cyan-400/30 dark:text-cyan-400/20" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 animate-fadeIn backdrop-blur-sm pulse-animation">
            <Network className="w-4 h-4 animate-pulse" />
            <span>The Vision Behind Intelligence</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent animate-fadeIn">
            About Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            We're an AI innovation company building next-generation software that learns,
            adapts, and scales. Our mission is to design intelligent systems that
            empower people and organizations to think smarter and move faster.
          </p>
        </div>

        {/* Core Philosophy */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Philosophy Card */}
          <div className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                Our Philosophy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                At Kynex.dev, we believe AI isn't just about automation — it's about
                augmenting human potential. We're designing adaptive, intelligent
                software that continuously evolves through interaction, learning, and
                creativity.
              </p>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          </div>
          <div className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Atom className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                Driven by Intelligence
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed opacity-90">
                Our systems go beyond automation — they think, evolve, and collaborate.
                We integrate deep learning, real-time analytics, and neural optimization to design ecosystems that continuously refine themselves through interaction.
                </p>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
          </div>
        </div>

        {/* Team / Culture */}
        <div className="text-center mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent animate-fadeIn">
            The Minds Behind Kynex.dev
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            A passionate team of AI experts, engineers, and visionaries working
            collaboratively to bring intelligence into everyday innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-transparent hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${member.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}></div>
              <div className="relative z-10">
                <div className={`inline-flex p-4 mb-4 rounded-2xl bg-gradient-to-br ${member.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <member.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            
            <div className="relative">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Join the Future of AI Innovation
              </h3>
              <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                Be part of the journey that's shaping the next generation of intelligent
                technology. Collaborate with us to build adaptive systems for a smarter
                tomorrow.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 group"
              >
                Get in Touch
                <Zap className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              {/* Floating elements inside CTA */}
              <div className="absolute top-4 left-4 floating animate-float" style={{ animationDelay: '0s' }}>
                <Sparkles className="h-5 w-5 text-white/30" />
              </div>
              <div className="absolute top-8 right-8 floating animate-float" style={{ animationDelay: '1.5s' }}>
                <Star className="h-6 w-6 text-white/30" fill="currentColor" />
              </div>
              <div className="absolute bottom-6 left-10 floating animate-float" style={{ animationDelay: '3s' }}>
                <Zap className="h-5 w-5 text-white/30" />
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}