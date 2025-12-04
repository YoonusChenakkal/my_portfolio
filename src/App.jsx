// import React from "react";
// import Navbar from "./components/Navbar.jsx";
// import Hero from "./components/Hero.jsx";
// import About from "./components/About.jsx";
// import Tech from "./components/Tech.jsx";
// import Projects from "./components/Projects.jsx";
// import Experience from "./components/Experience.jsx";
// import Community from "./components/Community.jsx";
// import Contact from "./components/Contact.jsx";


// function App() {
//   return (
//     <div className="font-sans bg-gray-900 text-white overflow-x-hidden">
//       {/* <Navbar />
//       <Hero />
//       <About />
//       <Tech />
//       <Projects />
//       <Experience />
//       <Community />
//       <Contact /> */}
//       {/* Add a footer or copyright if desired */}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Play, Apple, Globe, MapPin, Briefcase, Code2, Users, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      name: 'KEYROUTE',
      desc: 'Tourist Bus Booking App',
      tags: ['Flutter', 'Google Maps', 'Payment Integration'],
      platforms: ['play'],
      status: 'Live',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'BeaconU',
      desc: 'Education Platform - 150+ Screens',
      tags: ['Flutter', 'Firebase', 'LMS'],
      platforms: ['web'],
      status: 'Live',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Voicy',
      desc: 'Social Voice Calling App',
      tags: ['Real-time', 'WebRTC', 'Flutter'],
      platforms: ['play'],
      status: 'Live',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Syopi',
      desc: 'Fashion E-commerce Platform',
      tags: ['Flutter', 'E-commerce', 'Payment'],
      platforms: ['play', 'apple'],
      status: 'Live',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'FastBag',
      desc: 'Multi-Category Delivery App',
      tags: ['MVVM', 'GetX', 'Flutter'],
      platforms: ['web'],
      status: 'In Development',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Coffee Labs',
      desc: 'Bulk Coffee Ordering Platform',
      tags: ['Flutter', 'Animations', 'GetX'],
      platforms: ['web'],
      status: 'In Development',
      color: 'from-amber-600 to-yellow-600'
    }
  ];

  const techStack = {
    'Mobile Development': ['Flutter', 'Dart', 'Android', 'iOS'],
    'State Management': ['Provider', 'GetX'],
    'Backend & APIs': ['RESTful APIs', 'Firebase', 'JWT'],
    'Databases': ['Hive', 'Shared Preferences', 'GetStorage'],
    'Tools & Services': ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Postman'],
    'Integrations': ['Google Maps', 'Razorpay', 'Geolocator'],
    'Design Patterns': ['MVVM', 'MVC']
  };

  const stats = [
    { label: 'Experience', value: '1+', sublabel: 'Year', icon: Briefcase },
    { label: 'Projects Completed', value: '15+', sublabel: 'Apps Built', icon: Code2 },
    { label: 'Developers Mentored', value: '10+', sublabel: 'Juniors Trained', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl shadow-emerald-500/10' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              &lt;Yoonus /&gt;
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Tech', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group text-gray-300 hover:text-emerald-400 transition-all duration-300"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Let's Chat
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 px-4 py-2 rounded-full text-sm font-medium text-emerald-400 backdrop-blur-sm">
                Software Engineer
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gray-400">Yoonus</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Chenakkal
              </span>
            </h1>
            <div className="flex items-center gap-3 text-xl text-gray-400">
              <ChevronRight className="text-emerald-400" />
              <span className="font-mono">Flutter Developer</span>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Crafting beautiful, high-performance cross-platform mobile applications
              with a focus on user experience and clean architecture.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <MapPin className="text-emerald-400" size={20} />
              <span className="text-gray-400">Malappuram, Kerala, India</span>
            </div>
            <div className="flex gap-4 pt-6">
              {[
                { Icon: Github, link: 'https://github.com/YoonusChenakkal' },
                { Icon: Linkedin, link: 'https://linkedin.com/in/yoonuschenakkal' },
                { Icon: Mail, link: 'mailto:yoonuschenakkal.07@gmail.com' }
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800/50 rounded-full border border-gray-700 hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon size={20} className="text-gray-400 hover:text-emerald-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative w-96 h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-emerald-500/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 size={120} className="text-emerald-400 opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ label, value, sublabel, icon: Icon }, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <Icon className="mx-auto mb-4 text-emerald-400" size={32} />
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {value}
              </div>
              <div className="text-gray-400 font-semibold">{label}</div>
              <div className="text-gray-500 text-sm mt-1">{sublabel}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-700/50 space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I'm a passionate Flutter Developer with hands-on experience building high-quality,
              cross-platform mobile applications. I've worked on over 15 projects ranging from
              concept to deployment, including live products in tourism, education, e-commerce,
              and social networking.
            </p>
            <p>
              Currently at <span className="text-emerald-400 font-semibold">Codeedex Technologies</span>,
              I collaborate with cross-functional teams to design and implement scalable apps with
              intuitive UI, clean architecture, and optimal performance.
            </p>
            <p>
              I'm also committed to giving back to the developer community by mentoring junior
              developers, sharing best practices, and contributing to open-source projects.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-20 px-6 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="space-y-8">
            {Object.entries(techStack).map(([category, items], i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((tech, j) => (
                    <div
                      key={j}
                      className="px-5 py-2.5 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-full text-sm font-medium text-emerald-400 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105 cursor-default"
                      style={{ animationDelay: `${j * 50}ms` }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            A showcase of mobile applications I've built and deployed
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="p-6 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${project.status === 'Live'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400 border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4 border-t border-gray-700/50">
                    {project.platforms.includes('play') && (
                      <div className="flex items-center gap-1 text-xs text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700">
                        <Play size={14} className="text-emerald-400" />
                        <span>Play</span>
                      </div>
                    )}
                    {project.platforms.includes('apple') && (
                      <div className="flex items-center gap-1 text-xs text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700">
                        <Apple size={14} className="text-emerald-400" />
                        <span>App Store</span>
                      </div>
                    )}
                    {project.platforms.includes('web') && (
                      <div className="flex items-center gap-1 text-xs text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700">
                        <Globe size={14} className="text-emerald-400" />
                        <span>Web</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="space-y-8">
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-emerald-500 rounded-full border-4 border-gray-900"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Flutter Developer</h3>
                  <p className="text-emerald-400 font-semibold">Codeedex Technologies</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">Dec 2024 – Present</span>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Developed 7+ mobile apps including 3 live products</li>
                <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Collaborated with 5+ developers on architecture and deployment</li>
                <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Mentored 10+ junior developers on Flutter best practices</li>
                <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Reduced bug reports by 40% through code reviews</li>
              </ul>
            </div>
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500">
              <div className="absolute -left-3 top-8 w-6 h-6 bg-gray-600 rounded-full border-4 border-gray-900"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Flutter Developer Intern</h3>
                  <p className="text-emerald-400 font-semibold">Futura Labs Technologies</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">Apr 2024 – Nov 2024</span>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Developed 6+ mini projects using Flutter</li>
                <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Implemented 10+ APIs and Firebase integration</li>
                <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Enhanced proficiency in RESTful APIs and cloud services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:yoonuschenakkal.07@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/yoonuschenakkal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-full font-semibold hover:border-emerald-500 hover:bg-emerald-500/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2024 Yoonus Chenakkal. Built with React & Tailwind CSS</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}