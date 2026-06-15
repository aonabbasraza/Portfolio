import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

/**
 * All Projects Page — Gallery with slider and carousel
 */

const allProjects = [
  {
    id: 1,
    title: 'AI Service Orchestrator for Informal Economy',
    description: 'Agentic AI system automating the end-to-end lifecycle of informal economy service requests. Features 5 specialized agents (Intent Understanding, Provider Discovery, Matching, Booking, Follow-Up) orchestrated through Google ADK.',
    fullDescription: `
      An enterprise-grade agentic AI system that automates end-to-end service request workflows. The system integrates:
      - Flutter mobile frontend for user interactions
      - FastAPI backend for agent orchestration
      - 5 specialized AI agents powered by Gemini 2.0 Flash
      - Google Maps Places API for provider discovery
      - Firebase for real-time data synchronization
      - Natural language processing for intent understanding in Urdu/Roman Urdu/English
    `,
    technologies: ['Flutter', 'FastAPI', 'Google ADK', 'Gemini 2.0 Flash', 'Google Maps API', 'Firebase', 'Python', 'Dart'],
    gradient: 'from-indigo-500 to-blue-600',
    category: 'AI/Agents',
    link: 'https://github.com/Mgoharali/Hackathon_Flutter_App',
    image: '🤖',
  },
  {
    id: 2,
    title: 'NeuralCanvas — AI Image Studio',
    description: 'Production-grade AI image generation platform with intelligent prompt enhancement, OAuth authentication, and responsive masonry gallery.',
    fullDescription: `
      A full-stack AI image generation studio built with modern, high-performance technologies:
      - React 19 + Vite 6 for ultra-fast frontend
      - FastAPI with async SQLAlchemy 2.0
      - Gemini AI for intelligent prompt enhancement
      - OAuth 2.0 with Google and GitHub providers
      - Neon serverless PostgreSQL database
      - Cloudinary for production-grade asset storage
      - Features: real-time generation, masonry gallery, usage analytics, automatic account merging
    `,
    technologies: ['React 19', 'Vite 6', 'FastAPI', 'SQLAlchemy 2.0', 'Neon PostgreSQL', 'Gemini AI', 'Cloudinary', 'Framer Motion'],
    gradient: 'from-purple-500 to-pink-600',
    category: 'Full-Stack',
    link: 'https://neural-canvass.vercel.app/',
    image: '🎨',
  },
  {
    id: 3,
    title: 'ConstructTrack — Construction Resource Allocation',
    description: 'Advanced PostgreSQL database system for construction project management with stored procedures, triggers, and materialized views.',
    fullDescription: `
      Enterprise database system showcasing advanced PostgreSQL features:
      - Project lifecycle management from planning to closure
      - Resource allocation engine for workers, equipment, and materials
      - Inventory management with low-stock alerts via triggers
      - Financial tracking with budget monitoring and cost overrun detection
      - Role-based access control (Admin, Project Manager, Site Supervisor)
      - Automated audit logging through database triggers
      - Materialized views for high-performance dashboards
      - Complex stored procedures for business logic encapsulation
    `,
    technologies: ['PostgreSQL', 'SQL', 'Stored Procedures', 'Triggers', 'Materialized Views', 'Advanced Indexing'],
    gradient: 'from-emerald-500 to-teal-500',
    category: 'Database',
    link: 'https://github.com/aonabbasraza/ConstructTrack',
    image: '🏗️',
  },
  {
    id: 4,
    title: 'MZE Solar and Electrical Solutions Platform',
    description: 'Scalable service provider platform with OAuth authentication, custom chatbot, end-to-end booking system, and role-based access.',
    fullDescription: `
      Full-featured service provider platform inspired by Fixr.com:
      - Blazor + .NET C# for robust backend and UI
      - Google OAuth 2.0 for secure multi-user access
      - Role-based views: Admin, User, Visitor
      - Custom AI chatbot for user guidance and FAQs
      - End-to-end service booking workflow
      - User reviews and feedback system
      - Modern responsive UI with video hero section
      - SQLite database with ADO.NET ORM
      - Modular component architecture
    `,
    technologies: ['Blazor', '.NET C#', 'SQLite', 'ADO.NET', 'Google Auth', 'Entity Framework', 'UI/UX Design'],
    gradient: 'from-amber-500 to-orange-500',
    category: 'Full-Stack',
    link: 'https://github.com/Ali-Xhah-232966/FYP',
    image: '⚡',
  },
  {
    id: 5,
    title: 'SlideForge — AI PowerPoint Generator',
    description: 'Full-stack SaaS application for generating AI-powered PowerPoint presentations with Groq API and multi-source image integration.',
    fullDescription: `
      Production-ready SaaS for AI-powered presentation generation:
      - Next.js 14 with App Router for modern frontend
      - NextAuth.js for secure user authentication
      - Supabase PostgreSQL for user and generation history storage
      - Groq Llama 3.3 70B for intelligent slide content generation
      - Multi-source image integration (Unsplash, Pexels, Pixabay)
      - PptxGenJS for dynamic PPTX file generation
      - User dashboard with generation history
      - Download and sharing capabilities
      - Deployed on Vercel with automatic scaling
    `,
    technologies: ['Next.js 14', 'NextAuth.js', 'Supabase', 'PostgreSQL', 'Groq API', 'PptxGenJS', 'Image APIs'],
    gradient: 'from-rose-500 to-orange-500',
    category: 'AI/SaaS',
    link: 'https://github.com/aonabbasraza/SlideForge',
    image: '📊',
  },
];

export default function AllProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(
        slideRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allProjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length);
  };

  const currentProject = allProjects[currentIndex];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Header */}
      <div className="relative pt-20 pb-12 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-mono">
            🚀 Project Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore my diverse portfolio of full-stack projects, AI systems, and database solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        {/* Slider */}
        <div ref={containerRef} className="relative mb-16">
          {/* Main Project Card */}
          <div
            ref={slideRef}
            className="glass-card overflow-hidden h-full mb-12 reveal"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left — Image & Category */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className={`relative h-64 md:h-80 bg-gradient-to-br ${currentProject.gradient} rounded-xl flex items-center justify-center overflow-hidden mb-6`}>
                    {/* Animated Background */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                      }} />
                    </div>

                    <span className="text-9xl relative z-10">{currentProject.image}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {currentProject.category}
                    </span>
                    <span className="text-slate-500 text-sm font-mono">Project {currentIndex + 1} of {allProjects.length}</span>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Project
                  </a>
                </div>
              </div>

              {/* Right — Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{currentProject.title}</h2>
                  <p className="text-slate-400 leading-relaxed mb-6">{currentProject.description}</p>

                  {expandedId === currentProject.id && (
                    <div className="mb-6 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
                      <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                        {currentProject.fullDescription.trim()}
                      </p>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-300 mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:border-indigo-500/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Toggle Details Button */}
                <button
                  onClick={() => setExpandedId(expandedId === currentProject.id ? null : currentProject.id)}
                  className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-2 transition-colors"
                >
                  {expandedId === currentProject.id ? '- Hide Details' : '+ Show Full Details'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={expandedId === currentProject.id ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between md:justify-center gap-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl border border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-400 transition-all"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {allProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'bg-indigo-500 w-8'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-xl border border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-400 transition-all"
              aria-label="Next project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Grid View of All Projects */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">
            All Projects <span className="gradient-text">Grid View</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, i) => (
              <div
                key={project.id}
                className="reveal group glass-card overflow-hidden hover:border-indigo-500/50 transition-all duration-300 cursor-pointer"
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => setCurrentIndex(i)}
              >
                <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <span className="text-6xl">{project.image}</span>
                  <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300`} />
                </div>

                <div className="p-5">
                  <h3 className="text-base font-semibold text-white mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-700/50">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-1 transition-colors"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-600/5 blur-3xl pointer-events-none" />
    </main>
  );
}
