import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Code, Database, Globe, Server, 
  Shield, Sparkles, Download, ExternalLink, 
  Mail, MapPin, Phone, Facebook, Twitter, 
  Linkedin, Github 
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Importing Rubi Preethi's image
import rubiImage from './images/rubipreethi.jpg';
import balajiImage from './images/Balaji.jpg';


const EducationalPlatform = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const navigate = useNavigate();

  
  const floatingIcons = [
    { icon: <Code className="w-6 h-6" />, delay: 0 },
    { icon: <Database className="w-6 h-6" />, delay: 0 },
    { icon: <Globe className="w-6 h-6" />, delay: 0},
    { icon: <Server className="w-6 h-6" />, delay: 0 },
    { icon: <Shield className="w-6 h-6" />, delay: 0 }
  ];

  const trainers = [
    { 
      url: '/rubypreethi',
      img: rubiImage,  // Using the imported image
      name: 'RUBI PREETHI P',
      role: 'Senior Full Stack Developer',
      expertise: ['React', 'Node.js', 'MongoDB'],
      experience: '8+ years'
    },
    {
      url: '/balaji',
      img: balajiImage,
      name: 'BALAJI',
      role: 'Frontend Architect',
      expertise: ['Vue.js', 'React Native', 'UI/UX'],
      experience: '7+ years'
    },
    {
      url:'/shekkina',
      img: "education/src/images/WhatsApp_Image_2025-02-04_at_13.43.35_1877ef89.jpg",
      name: 'SHEKKINA PAULIN J',
      role: 'Backend Expert',
      expertise: ['Python', 'Java', 'AWS'],
      experience: '6+ years'
    },
    {
      url:'/ahalya',
      img: "education/src/images/WhatsApp_Image_2025-02-04_at_13.43.35_1877ef89.jpg",
      name: 'AHALYA R',
      role: 'DevOps Specialist',
      expertise: ['Docker', 'Kubernetes', 'CI/CD'],
      experience: '5+ years'
    },
    {
      url:'/vinoth',
      img: "education/src/images/WhatsApp_Image_2025-02-04_at_13.43.35_1877ef89.jpg",
      name: 'VINOTH KUMAR K B',
      role: 'Database Architect',
      expertise: ['PostgreSQL', 'Redis', 'GraphQL'],
      experience: '7+ years'
    },
    {
      url:'/naveenkumaran',
      img: "education/src/images/WhatsApp_Image_2025-02-04_at_13.43.35_1877ef89.jpg",
      name: 'NAVIN KUMARAN O H',
      role: 'Security Expert',
      expertise: ['Cybersecurity', 'OAuth', 'JWT'],
      experience: '6+ years'
    },
    {
         url:'/varshini',
        img: "education/src/images/WhatsApp_Image_2025-02-04_at_13.43.35_1877ef89.jpg",
        name: 'VARSHINI P',
        role: 'Security Expert',
        expertise: ['Cybersecurity', 'OAuth', 'JWT'],
        experience: '6+ years'
      },
      { 
        url:'/shapna',
        img: "education/src/images/WhatsApp_Image_2025-02-04_at_13.43.35_1877ef89.jpg",
        name: 'SHAPNA M S',
        role: 'Security Expert',
        expertise: ['Cybersecurity', 'OAuth', 'JWT'],
        experience: '6+ years'
      },
      {
        url:'/minojini',
        img: "education/src/images/WhatsApp_Image_2025-02-04_at_13.43.35_1877ef89.jpg",
        name: 'MINOJINI G',
        role: 'Security Expert',
        expertise: ['Cybersecurity', 'OAuth', 'JWT'],
        experience: '6+ years'
      },
  ];


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900 via-gray-900 to-gray-900">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-full h-24 mb-8">
              {floatingIcons.map((item, index) => (
                <div
                  key={index}
                  className="absolute transition-all duration-1000 hover:-translate-y-2"
                  style={{ 
                    left: `${(index + 1) * 20}%`,
                    transitionDelay: `${item.delay}s`
                  }}
                >
                  <div className="text-blue-400">{item.icon}</div>
                </div>
              ))}
            </div>

            <div className="relative transform transition-all duration-500 hover:scale-105">
              <Sparkles className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-8 h-8 text-blue-400" />
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Full Stack
              </h1>
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                  Developer Training
                </h2>
                <div className="absolute -inset-1 bg-blue-500/20 blur-xl"></div>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-2xl">
              Master the complete web development stack with our Trainers
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <button className="px-8 py-4 bg-blue-600 rounded-full font-semibold text-white hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">
              <a href="https://drive.google.com/drive/folders/16EITLlq-pERT7SvGO5T26Kj1kew-8d9P" target="_blank" rel="noopener noreferrer">
              Start Your Journey
              </a>
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-blue-400 rounded-full font-semibold text-blue-400 hover:bg-blue-400/10 transition-all hover:scale-105 active:scale-95">
                View Curriculum
              </button>
            </div>
          </div>
        </div>

       
      </header>

      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-16 text-blue-400">
          Meet Your Expert Trainers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">

          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full h-96 overflow-hidden"> {/* Box-like container */}
              <img
               src={trainer.img}
               alt={trainer.name}
               className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
              // Add onClick to trigger navigation
                style={{ cursor: 'pointer' }}  // Optional: to show the image is clickable
              />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ cursor: 'pointer' }}   onClick={() => navigate(trainer.url)} >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{trainer.name}</h3>
                    <p className="text-blue-400">{trainer.role}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {trainer.expertise.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-blue-300">{trainer.experience}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-800 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8 text-blue-400">Course Materials</h2>
            <p className="text-xl text-gray-300 mb-12">Access comprehensive learning resources curated by industry experts</p>
            
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
            >
              <Download className="w-5 h-5" />
              Access Course Materials
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">About VCET</h3>
              <p className="text-gray-400">Empowering future developers with cutting-edge full stack development training and industry-ready skills.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Courses', 'Trainers', 'Materials'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">123 Main Street, Madurai, TN</li>
                <li>
                  <a href="mailto:info@vcet.edu" className="text-gray-400 hover:text-blue-400 transition">
                    info@vcet.edu
                  </a>
                </li>
                <li className="text-gray-400">+91 123 456 7890</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Follow Us</h3>
              <div className="flex gap-6">
                <a href="#" className="text-blue-400 hover:text-blue-500 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500 transition">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-500 transition">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>
      );
    };
    


export default EducationalPlatform;
