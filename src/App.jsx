// App.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Smartphone,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Python', level: 90, icon: '🐍', category: 'backend' },
    { name: 'React.js', level: 95, icon: '⚛️', category: 'frontend' },
    { name: 'Next.js', level: 85, icon: '▲', category: 'frontend' },
    { name: 'Tailwind CSS', level: 92, icon: '🎨', category: 'frontend' },
    { name: 'JavaScript', level: 94, icon: '📜', category: 'frontend' },
    { name: 'Node.js', level: 88, icon: '🟢', category: 'backend' },
    { name: 'Express.js', level: 86, icon: '🚀', category: 'backend' },
    { name: 'Spring Boot', level: 82, icon: '🌱', category: 'backend' },
    { name: 'MongoDB', level: 84, icon: '🍃', category: 'database' },
    { name: 'PostgreSQL', level: 80, icon: '🐘', category: 'database' }
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      github: '#',
      live: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Task Management App',
      description: 'Productivity app with real-time collaboration features',
      tech: ['Next.js', 'Spring Boot', 'PostgreSQL'],
      github: '#',
      live: '#',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Data visualization platform with machine learning insights',
      tech: ['Python', 'React', 'FastAPI', 'MongoDB'],
      github: '#',
      live: '#',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800'
    }`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        darkMode ? 'bg-gray-900/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Nasteha
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === item
                      ? 'text-blue-500 font-semibold'
                      : 'hover:text-blue-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-colors ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {darkMode ? '🌙' : '☀️'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full"
              >
                {darkMode ? '🌙' : '☀️'}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 space-y-4 pb-4"
              >
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left capitalize py-2 ${
                      activeSection === item ? 'text-blue-500 font-semibold' : ''
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Nasteha Nur
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Full-Stack Developer & Software Engineer
            </motion.p>
            
            <motion.p 
              className="text-lg mb-12 max-w-2xl mx-auto text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I create exceptional digital experiences using modern technologies like 
              React, Python, Node.js, and more. Passionate about building scalable 
              solutions that make a difference.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300"
              >
                Get In Touch
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {['⚛️', '🐍', '▲', '🚀', '📜', '🍃'].map((icon, index) => (
            <motion.div
              key={index}
              className="absolute text-2xl"
              initial={{ y: 0, x: Math.random() * 100 }}
              animate={{ 
                y: [0, -30, 0],
                x: [Math.random() * 100, Math.random() * 100 + 50, Math.random() * 100]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              With a strong foundation in both frontend and backend development, I specialize 
              in creating robust, scalable applications that deliver exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: <Code size={48} />, title: 'Frontend', desc: 'React, Next.js, Tailwind CSS' },
              { icon: <Server size={48} />, title: 'Backend', desc: 'Node.js, Python, Spring Boot' },
              { icon: <Database size={48} />, title: 'Database', desc: 'MongoDB, PostgreSQL' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className={`p-8 rounded-2xl text-center ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/50'
                } backdrop-blur-sm border border-gray-700/50`}
              >
                <div className="text-blue-500 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/50'
                } backdrop-blur-sm border border-gray-700/50`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <span className="text-blue-500 font-semibold">{skill.level}%</span>
                </div>
                <div className={`w-full h-2 rounded-full ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>
                <div className="mt-2 text-sm text-gray-400 capitalize">
                  {skill.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className={`rounded-2xl overflow-hidden ${
                  darkMode ? 'bg-gray-800/50' : 'bg-white/50'
                } backdrop-blur-sm border border-gray-700/50`}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <Github size={20} />
                      <span>Code</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <div className="space-y-4">
                {[
                  { icon: <Mail size={24} />, text: 'Nastehs@example.com' },
                  { icon: <Github size={24} />, text: 'github.com/Nasteha' },
                  { icon: <Linkedin size={24} />, text: 'linkedin.com/in/Nasteha' },
                  { icon: <Twitter size={24} />, text: '@Nasteha' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors">
                    <div className="text-blue-500">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-800'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <input
                    type="email"

                    placeholder="Nasteha@example.com"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white' 
                        : 'bg-white border-gray-300 text-gray-800'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-800'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 text-white' 
                      : 'bg-white border-gray-300 text-gray-800'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${
        darkMode ? 'border-gray-700' : 'border-gray-300'
      }`}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Nasteha Nur. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;