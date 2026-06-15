import { useState } from 'react';

/**
 * Projects Section — 3-project carousel with manual navigation
 */

const projects = [
  {
    id: 1,
    title: 'AI Service Orchestrator',
    description: 'Agentic AI system automating service requests with 5 specialized agents, Gemini AI, and Google Maps integration.',
    technologies: ['Flutter', 'FastAPI', 'Google ADK', 'Gemini 2.0', 'Firebase'],
    gradient: 'from-indigo-500 to-blue-600',
    category: 'AI/Agents',
    // Live: https://your-live-link.com
    // GitHub: https://github.com/your-username/project-name
  },
  {
    id: 2,
    title: 'NeuralCanvas',
    description: 'Production AI image studio with intelligent prompt enhancement, OAuth, and responsive masonry gallery.',
    technologies: ['React 19', 'FastAPI', 'Gemini AI', 'PostgreSQL', 'Cloudinary'],
    gradient: 'from-purple-500 to-pink-600',
    category: 'Full-Stack',
    // Live: https://neural-canvass.vercel.app/
    // GitHub: https://github.com/aonabbasraza/NeuralCanvas
  },
  {
    id: 3,
    title: 'ConstructTrack',
    description: 'Advanced PostgreSQL system for construction management with stored procedures, triggers, and materialized views.',
    technologies: ['PostgreSQL', 'SQL', 'Stored Procedures', 'Triggers', 'Materialized Views'],
    gradient: 'from-blue-500 to-cyan-500',
    category: 'Database',
    // Live: https://your-live-link.com
    // GitHub: https://github.com/aonabbasraza/ConstructTrack
  },
  {
    id: 4,
    title: 'MZE Solar Platform',
    description: 'Scalable service provider platform with OAuth, custom chatbot, booking system, and role-based access.',
    technologies: ['Blazor', '.NET C#', 'SQLite', 'Google Auth', 'ADO.NET'],
    gradient: 'from-emerald-500 to-teal-500',
    category: 'Full-Stack',
    // Live: https://your-live-link.com
    // GitHub: https://github.com/Ali-Xhah-232966/FYP
  },
  {
    id: 5,
    title: 'SlideForge',
    description: 'AI PowerPoint generator with NextAuth, Supabase, Groq API, and multi-source image integration.',
    technologies: ['Next.js 14', 'NextAuth.js', 'Supabase', 'Groq API', 'PptxGenJS'],
    gradient: 'from-rose-500 to-orange-500',
    category: 'AI/SaaS',
    // Live: https://slideforge-demo.vercel.app
    // GitHub: https://github.com/aonabbasraza/SlideForge
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Get 3 projects to display in order
  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  const visibleProjects = getVisibleProjects();

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <div className="section-divider mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my technical skills and problem-solving approach.
          </p>
        </div>

        {/* Projects Carousel - Shows 3 projects */}
        <div className="reveal">
          {/* Navigation Controls */}
          <div className="flex items-center justify-between mb-6 gap-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-lg border border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-400 transition-all flex-shrink-0"
              aria-label="Previous projects"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Projects Grid - 3 columns */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[350px]">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="group transition-all duration-300"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="glass-card overflow-hidden h-full flex flex-col transition-all">
                    {/* Preview Area */}
                    <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-medium bg-black/30 backdrop-blur-sm text-white border border-white/10">
                        {project.category}
                      </span>

                      <span className="text-3xl font-bold tracking-tight text-center px-4 relative z-10 text-white/90">
                        {project.title.split(' ')[0]}
                      </span>

                      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2 transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                        {/* Uncomment below and add your links when ready */}
                        {/* <a href={PROJECT_LIVE_LINK} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg bg-white text-black text-xs font-semibold hover:bg-white/90 transition-colors">
                          Live
                        </a>
                        <a href={PROJECT_GITHUB_LINK} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-lg border border-white/30 text-white text-xs font-semibold hover:bg-white/10 transition-colors">
                          Code
                        </a> */}
                        <span className="text-white text-xs font-medium text-center px-3">
                          Add links in code
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-base font-semibold text-white mb-1">{project.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-3 flex-1 line-clamp-2">{project.description}</p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 2).map((tech) => (
                          <span key={tech} className="tech-tag text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="text-xs px-2 py-0.5 rounded bg-slate-700/50 text-slate-300">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-lg border border-slate-700 hover:border-indigo-500/50 hover:bg-indigo-500/10 text-slate-400 hover:text-indigo-400 transition-all flex-shrink-0"
              aria-label="Next projects"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-indigo-500 w-8' : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to project group ${idx + 1}`}
              />
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="reveal mt-12 text-center">
            <a
              href="/all-projects"
              className="btn-primary inline-flex items-center gap-2 group py-3 px-6"
            >
              View All Projects
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

