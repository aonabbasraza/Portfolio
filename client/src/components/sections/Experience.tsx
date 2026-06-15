import { useState, useEffect } from 'react';

/**
 * Experience Section — Auto-sliding achievements carousel
 */

const achievements = [
  {
    title: 'AI Service Orchestrator',
    type: 'Project',
    tech: 'Flutter, FastAPI, Google ADK, Gemini AI',
  },
  {
    title: 'NeuralCanvas',
    type: 'Full-Stack',
    tech: 'React 19, FastAPI, Gemini AI, PostgreSQL',
  },
  {
    title: 'ConstructTrack',
    type: 'Database',
    tech: 'PostgreSQL, Advanced SQL, Triggers',
  },
  {
    title: 'MZE Solar Platform',
    type: 'Full-Stack',
    tech: 'Blazor, .NET C#, SQLite, Google Auth',
  },
  {
    title: 'SlideForge',
    type: 'AI/SaaS',
    tech: 'Next.js, Supabase, Groq API',
  },
];

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleManualSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleAchievements = () => {
    return [
      achievements[currentIndex],
      achievements[(currentIndex + 1) % achievements.length],
    ];
  };

  const visibleAchievements = getVisibleAchievements();

  return (
    <section id="experience" className="section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="reveal mb-16">
          <div className="section-divider" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Hands-on projects and practical learning across full-stack development and AI integration.
          </p>
        </div>

        {/* Auto-Sliding Achievements Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {visibleAchievements.map((achievement, idx) => (
            <div
              key={`${achievement.title}-${idx}`}
              className="glass-card p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all opacity-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 text-lg">
                  ⭐
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                  <div className="flex flex-wrap gap-2 items-center mb-3">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {achievement.type}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{achievement.tech}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {achievements.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleManualSlide(idx)}
              className={`h-1 rounded-full transition-all ${
                idx === currentIndex ? 'bg-indigo-500 w-8' : 'bg-slate-700 w-2 hover:bg-slate-600'
              }`}
              aria-label={`Go to achievement ${idx + 1}`}
            />
          ))}
        </div>

        {/* See Projects Section Button */}
        <div className="reveal mt-12 text-center">
          <p className="text-slate-400 mb-4">View detailed project descriptions in the Projects section above</p>
          <a href="#projects" className="btn-outline inline-flex items-center gap-2 group">
            Explore Projects
            <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
