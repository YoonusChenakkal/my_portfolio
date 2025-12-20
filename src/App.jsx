
import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Play, Apple, Globe, MapPin, Briefcase, Code2, Users, ChevronRight, Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Custom Cursor Logic
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [cursorBgPos, setCursorBgPos] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Calculate background position for zoom effect if image container exists
      if (imageContainerRef.current) {
        const rect = imageContainerRef.current.getBoundingClientRect();
        // Check if mouse is near/inside the container to avoid unnecessary state updates
        if (
          e.clientX >= rect.left - 100 &&
          e.clientX <= rect.right + 100 &&
          e.clientY >= rect.top - 100 &&
          e.clientY <= rect.bottom + 100
        ) {
          // Account for the scale-110 (1.1x) scaling of the underlying image
          // Center (50%) remains 50%. Edges move inwards on the texture.
          const x = 50 + (((e.clientX - rect.left) / rect.width) * 100 - 50) / 1.1;
          const y = 50 + (((e.clientY - rect.top) / rect.height) * 100 - 50) / 1.1;
          setCursorBgPos({ x, y });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // --- 1. Dynamic Roles Logic ---
  const roles = ['Flutter Developer', 'Android Developer', 'iOS Developer'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['home', 'about', 'tech', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Improve detection logic: check if top is near viewport top or if it covers most of viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Set up the interval to change the role every 3000ms (3 seconds)
    const intervalId = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(intervalId); // Clean up the interval
    };
  }, []);

  const projects = [
    {
      name: 'KEYROUTE',
      desc: 'Tourist Bus Booking App',
      tags: ['Flutter', 'Google Maps', 'Payment Integration'],
      platforms: ['play'],
      status: 'Live',
      color: 'from-cyan-500 to-blue-500',
      links: {
        play: 'https://play.google.com/store/apps/details?id=com.keyroute.user&pcampaignid=web_share'
      }
    },
    {
      name: 'Syopi',
      desc: 'Fashion E-commerce Platform',
      tags: ['Flutter', 'E-commerce', 'Payment'],
      platforms: ['play', 'apple'],
      status: 'Live',
      color: 'from-green-500 to-emerald-500',
      links: {
        play: 'https://play.google.com/store/apps/details?id=com.syopi.usernew&pcampaignid=web_share',
        apple: 'https://apps.apple.com/in/app/syopi/id6747420245'
      }
    },
    {
      name: 'Voicy',
      desc: 'Social Voice Calling App',
      tags: ['Real-time', 'WebRTC', 'Flutter'],
      platforms: ['play'],
      status: 'Live',
      color: 'from-orange-500 to-red-500',
      links: {
        play: 'https://play.google.com/store/apps/details?id=com.bestie.user&pcampaignid=web_share'
      }
    },
    {
      name: 'BeaconU',
      desc: 'Education Platform - 150+ Screens',
      tags: ['Flutter', 'Firebase', 'LMS'],
      platforms: [''],
      status: 'In Development',
      color: 'from-purple-500 to-pink-500',
      links: {}
    },
    {
      name: 'FastBag',
      desc: 'Multi-Category Delivery App',
      tags: ['MVVM', 'GetX', 'Flutter'],
      platforms: [''],
      status: 'In Development',
      color: 'from-yellow-500 to-orange-500',
      links: {}
    },
    {
      name: 'Coffee Labs',
      desc: 'Bulk Coffee Ordering Platform',
      tags: ['Flutter', 'Animations', 'GetX'],
      platforms: [''],
      status: 'In Development',
      color: 'from-amber-600 to-yellow-600',
      links: {}
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white selection:bg-emerald-500/30 selection:text-emerald-400">

      {/* Custom Cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[100] hidden md:block transition-all duration-300 ${showCustomCursor ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) translate(-50%, -50%)`,
          transition: 'transform 0.05s linear, opacity 0.3s, scale 0.3s'
        }}
      >
        <div
          className="w-32 h-32 rounded-full border-2 border-white/30 shadow-[0_0_30px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(255,255,255,0.2)] bg-gray-900/20 overflow-hidden relative input-glass"
        >
          {/* Magnified Image Layer */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url('/assets/yoonus_bg_removed.png')",
              backgroundSize: '550%', // Adjusted for 1.8x Zoom relative to container (300% * 1.8)
              backgroundPosition: `calc(50% + ${(cursorBgPos.x - 50) * (5.5 / 4.5)}%) calc(50% + ${(cursorBgPos.y - 50) * (5.5 / 4.5)}%)`,
              filter: 'grayscale(100%)'
            }}
          ></div>

          {/* Glass Specular Highlights */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-10 bg-gradient-to-b from-white/50 to-transparent rounded-full opacity-40 blur-sm"></div>
        </div>
      </div>

      {/* Navigation */}
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || isMenuOpen ? 'bg-gray-900/95 backdrop-blur-lg shadow-2xl shadow-emerald-500/10' : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo made clickable to go to #home */}
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-pulse cursor-pointer">
              &lt;Yoonus /&gt;
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Tech', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative group transition-all duration-300 font-medium ${activeSection === item.toLowerCase()
                    ? 'text-emerald-400'
                    : 'text-gray-300 hover:text-emerald-400'
                    }`}
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-400 transition-all duration-300 ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden md:block bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300"
            >
              Let's Chat
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-emerald-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="px-6 py-4 space-y-4">
            {['About', 'Tech', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block transition-colors font-medium text-lg ${activeSection === item.toLowerCase()
                  ? 'text-emerald-400'
                  : 'text-gray-300 hover:text-emerald-400'
                  }`}
                onClick={() => {
                  setIsMenuOpen(false);
                  setActiveSection(item.toLowerCase());
                }}
              >
                {item}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center bg-gradient-to-r from-emerald-500 to-cyan-500 px-6 py-3 rounded-full font-semibold mt-4"
              onClick={() => setIsMenuOpen(false)}
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
                App Developer
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-gray-400">Yoonus</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Chenakkal
              </span>
            </h1>
            <div className="flex items-center gap-3 text-xl text-gray-400 h-8">
              <ChevronRight className="text-emerald-400" />
              {/* DYNAMIC ROLE TEXT */}
              <span className="font-mono transition-opacity duration-500">
                {roles[roleIndex]}
              </span>
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
              <div
                ref={imageContainerRef}
                className="absolute inset-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-emerald-500/30 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30 hover:border-emerald-400/50 group cursor-none"
                onMouseEnter={() => setShowCustomCursor(true)}
                onMouseLeave={() => setShowCustomCursor(false)}
              >
                <img
                  src="/assets/yoonus_bg_removed.png"
                  alt="Yoonus Chenakkal"
                  className="w-full h-full object-cover object-top grayscale scale-110"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown className="text-gray-400 opacity-50" size={32} />
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
                    {project.platforms.includes('play') && project.links.play && (
                      <a
                        href={project.links.play}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
                      >
                        <Play size={14} className="text-emerald-400" />
                        <span>Play Store</span> {/* Label changed to 'Play Store' */}
                      </a>
                    )}
                    {project.platforms.includes('apple') && project.links.apple && (
                      <a
                        href={project.links.apple}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-700 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
                      >
                        <Apple size={14} className="text-emerald-400" />
                        <span>App Store</span>
                      </a>
                    )}
                    {/* For web platforms or those without specific links, keep the old style as a label */}
                    {project.platforms.includes('web') && !project.links.play && !project.links.apple && (
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
          <div className="space-y-12 border-l border-gray-800 ml-4 md:ml-8 pl-8 md:pl-12 relative">
            {/* Experience 1 */}
            <div className="relative group">
              <span className="absolute -left-[45px] md:-left-[61.5px] top-8 w-6 h-6 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-[0_0_15px_rgba(16,185,129,0.4)] group-hover:scale-125 transition-transform duration-500 box-content"></span>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 relative overflow-hidden group-hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-emerald-500/10"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Flutter Developer</h3>
                    <p className="text-emerald-400 font-semibold">Codeedex Technologies</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50">Dec 2024 – Present</span>
                </div>
                <ul className="space-y-2 text-gray-400 relative z-10">
                  <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Developed 7+ mobile apps including 3 live products</li>
                  <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Collaborated with 5+ developers on architecture and deployment</li>
                  <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Mentored 10+ junior developers on Flutter best practices</li>
                  <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Reduced bug reports by 40% through code reviews</li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="relative group">
              <span className="absolute -left-[45px] md:-left-[61.5px] top-8 w-6 h-6 bg-gray-600 rounded-full border-4 border-gray-900 shadow-[0_0_15px_rgba(75,85,99,0.4)] group-hover:scale-125 transition-transform duration-500 group-hover:bg-emerald-500 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] box-content"></span>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 relative overflow-hidden group-hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-600/5 rounded-full blur-2xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-emerald-500/10"></div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Flutter Developer Intern</h3>
                    <p className="text-emerald-400 font-semibold">Futura Labs Technologies</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700/50">Apr 2024 – Nov 2024</span>
                </div>
                <ul className="space-y-2 text-gray-400 relative z-10">
                  <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Developed 6+ mini projects using Flutter</li>
                  <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Implemented 10+ APIs and Firebase integration</li>
                  <li className="flex gap-2"><ChevronRight className="text-emerald-400 flex-shrink-0" size={20} />Enhanced proficiency in RESTful APIs and cloud services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            {/* Email Button */}
            <a
              href="mailto:yoonuschenakkal.07@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-white"
            >
              <Mail size={20} />
              Send Email
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com/in/yoonuschenakkal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-full font-semibold hover:border-emerald-500 hover:bg-emerald-500/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-white"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>

            {/* New WhatsApp / Mobile Button */}
            <a
              href="https://wa.me/918113871675"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-full font-semibold hover:border-emerald-500 hover:bg-emerald-500/10 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-white"
            >
              <Phone size={20} />
              +91 8113 871 486
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #111827;
        }
        ::-webkit-scrollbar-thumb {
          background: #10B981;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #059669;
        }
      `}</style>
    </div>
  );
}