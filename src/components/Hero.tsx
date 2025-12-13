'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

// Declare the spline-viewer element type
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { url?: string },
        HTMLElement
      >;
    }
  }
}

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Dynamically load the Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.16/build/spline-viewer.js';
    script.async = true;
    document.head.appendChild(script);
    
    // Add a slight delay to ensure the viewer is loaded before trying to hide branding
    const timer = setTimeout(() => {
      // Try to hide the "Built with Spline" branding with multiple approaches
      const style = document.createElement('style');
      style.innerHTML = `
        /* Hide Spline branding elements */
        .spline-branding, 
        .spline-watermark, 
        .spline-logo,
        [data-powered-by],
        svg[fill="none"][viewBox="0 0 89 13"] {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          height: 0 !important;
          width: 0 !important;
          position: absolute !important;
          left: -9999px !important;
        }
        
        /* Hide any SVG that might contain the branding */
        .spline-container svg,
        spline-viewer ~ svg,
        spline-viewer + svg {
          display: none !important;
        }
        
        /* Hide any div that might contain branding */
        .spline-branding-container,
        .powered-by-spline {
          display: none !important;
        }
      `;
      document.head.appendChild(style);
      
      // Also try to remove the element directly after a delay
      setTimeout(() => {
        const brandingElements = document.querySelectorAll(
          '.spline-branding, .spline-watermark, .spline-logo, [data-powered-by], svg[fill="none"][viewBox="0 0 89 13"]'
        );
        brandingElements.forEach(el => {
          if (el) {
            el.remove();
          }
        });
      }, 1000);
    }, 500);
    
    return () => {
      // Clean up the script when component unmounts
      document.head.removeChild(script);
      clearTimeout(timer);
    };
  }, []);

  // Don't render interactive elements until we're on the client to prevent hydration mismatches
  if (!isClient) {
    return (
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 animate-fadeIn backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>Next-Generation AI Software Company</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
              Building the Future of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Intelligent Software
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            At Kynex.dev, we harness artificial intelligence to power next-generation digital experiences. From smart automation to adaptive systems, we're redefining what software can do.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2">
              Explore Our Work
              <ArrowRight className="w-5 h-5" />
            </div>
            <div className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-lg font-semibold transition-all duration-300">
              Contact Us
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { label: 'AI Projects', value: '50+' },
              { label: 'Clients Served', value: '100+' },
              { label: 'Team Members', value: '15+' },
              { label: 'Countries', value: '10+' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 animate-fadeIn backdrop-blur-sm">
          <Sparkles className="w-4 h-4" />
          <span>Next-Generation AI Software Company</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
          <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent">
            Building the Future of
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Intelligent Software
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          At Kynex.dev, we harness artificial intelligence to power next-generation digital experiences. From smart automation to adaptive systems, we're redefining what software can do.
        </p>

        {/* Spline Viewer Integration */}
        <div className="my-8 flex justify-center">
          <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className="spline-container"
              style={{ 
                width: '100%', 
                height: '650px',
                borderRadius: '1rem'
              }}
            >
              <spline-viewer 
                url="https://prod.spline.design/GEB2A5FnkuFENybH/scene.splinecode"
                style={{ 
                  width: '100%', 
                  height: '100%',
                  borderRadius: '1rem'
                }}
              ></spline-viewer>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .spline-container {
              height: 550px !important;
            }
          }
          
          @media (max-width: 480px) {
            .spline-container {
              height: 450px !important;
            }
          }
          
          /* Extra small devices (phones, less than 375px) */
          @media (max-width: 375px) {
            .spline-container {
              height: 400px !important;
            }
          }
          
          /* Small devices (landscape phones, 576px and up) */
          @media (min-width: 576px) and (max-width: 768px) {
            .spline-container {
              height: 580px !important;
            }
          }
          
          /* Medium devices (tablets, 768px and up) */
          @media (min-width: 768px) and (max-width: 1024px) {
            .spline-container {
              height: 620px !important;
            }
          }
          
          /* Large phones (480px - 576px) */
          @media (min-width: 480px) and (max-width: 576px) {
            .spline-container {
              height: 520px !important;
            }
          }
          
          /* Hide Spline branding elements including the SVG logo */
          .spline-container :global(.spline-branding),
          .spline-container :global(.spline-watermark),
          .spline-container :global(.spline-logo),
          .spline-container :global([data-powered-by]),
          .spline-container :global(svg[fill="none"][viewBox="0 0 89 13"]) {
            display: none !important;
          }
          
          /* Additional targeting for any SVG elements within the spline viewer */
          .spline-container :global(iframe) ~ svg,
          .spline-container :global(iframe) + svg,
          .spline-container :global(div > svg:last-child) {
            display: none !important;
          }
        `}</style>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://www.instagram.com/kynex.dev/" 
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 flex items-center gap-2"
          >
            Explore Our Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a href="/contact" className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block">
            Contact Us
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'AI Projects', value: '50+' },
            { label: 'Clients Served', value: '100+' },
            { label: 'Team Members', value: '15+' },
            { label: 'Countries', value: '10+' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;