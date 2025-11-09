import { Linkedin, Mail, Users, Sparkles, Star, Zap } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Nadeem Mohammad',
      role: 'Founder',
      bio: 'Visionary behind Kynex.dev. Specializes in AI architecture, neural systems, and full-stack development.',
      gradient: 'from-blue-500 to-cyan-500',
      linkedin: 'https://www.linkedin.com/in/nadeem-mohammad0211/',
      email: 'nadeem@kynex.dev',
      image: '/images/nadeem.jpg'
    },
    {
      name: 'Lokesh Kukudala',
      role: 'Co-Founder',
      bio: 'Passionate about building innovative products and mentoring the next generation of engineers.',
      gradient: 'from-green-500 to-emerald-500',
      linkedin: 'https://www.linkedin.com/in/lokesh-kukudala-553638295/',
      email: 'lokesh@kynex.dev',
      image: '/images/lokesh.jpg'
    },
    {
      name: 'Ayesha Khan',
      role: 'Product Designer',
      bio: 'Crafts human-centered interfaces that blend creativity with usability.',
      gradient: 'from-purple-500 to-pink-500',
      linkedin: 'https://www.linkedin.com/in/',
      email: 'ayesha@kynex.dev',
    },
    {
      name: 'Meera Sharma',
      role: 'Frontend Developer',
      bio: 'Focused on React and interactive design, ensuring seamless user experiences.',
      gradient: 'from-green-500 to-emerald-500',
      linkedin: 'https://www.linkedin.com/in/',
      email: 'meera@kynex.dev',
    },
    {
      name: 'Rahul Mehta',
      role: 'Research Analyst',
      bio: 'Explores new frontiers in data-driven AI and model optimization.',
      gradient: 'from-indigo-500 to-blue-500',
      linkedin: 'https://www.linkedin.com/in/',
      email: 'rahul@kynex.dev'
    },
  ];

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(15,76,117,0.1)_0%,rgba(0,0,0,0)_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(15,76,117,0.2)_0%,rgba(0,0,0,0)_70%)]"></div>
        
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
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4 backdrop-blur-sm pulse-animation">
            <Users className="w-4 h-4 animate-pulse" />
            <span>The People Behind Innovation</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent animate-fadeIn">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            A team of passionate developers, designers, and innovators who believe in shaping the intelligent future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}></div>

              <div className="relative">
                <div className={`w-32 h-32 rounded-2xl mb-6 mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg overflow-hidden ${member.image ? '' : 'bg-gradient-to-br ' + member.gradient + ' flex items-center justify-center'}`}>
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>

                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className={`text-m font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3 pulse-animation`}>
                    {member.role}
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 group/icon"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover/icon:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 group/icon"
                  >
                    <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover/icon:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white relative overflow-hidden animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          <div className="relative text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Philosophy
            </h3>
            <p className="text-lg sm:text-xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
              We believe in collective intelligence — not just artificial or human, but both working together. That's what drives our team, our products, and our purpose.
            </p>
            
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
    </section>
  );
};

export default Team;