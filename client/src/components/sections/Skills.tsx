/**
 * Skills Section — Category cards with tech tags
 */

const skillCategories = [
  {
    name: 'Frontend Development',
    icon: '🌐',
    gradient: 'from-indigo-500 to-blue-500',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  },
  {
    name: 'Mobile Development',
    icon: '📱',
    gradient: 'from-purple-500 to-pink-500',
    skills: ['Flutter', 'Dart', 'React Native', 'Firebase'],
  },
  {
    name: 'Backend & AI',
    icon: '⚙️',
    gradient: 'from-blue-500 to-cyan-500',
    skills: ['FastAPI', 'Python', 'Node.js', 'Express', 'Google ADK', 'Gemini API'],
  },
  {
    name: 'Databases & Tools',
    icon: '💾',
    gradient: 'from-emerald-500 to-teal-500',
    skills: ['PostgreSQL', 'SQLite', 'MongoDB', 'Firebase', 'Supabase'],
  },
  {
    name: 'AI & Machine Learning',
    icon: '🤖',
    gradient: 'from-amber-500 to-orange-500',
    skills: ['Gemini AI', 'Google Maps API', 'Agentic AI', 'LLM Integration', 'Prompt Engineering'],
  },
  {
    name: 'Full-Stack & DevOps',
    icon: '🚀',
    gradient: 'from-red-500 to-pink-500',
    skills: ['Docker', 'Git', 'REST APIs', 'Authentication', 'System Design'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <div className="section-divider mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies I've mastered across the full stack — from pixel-perfect UIs to scalable cloud infrastructure.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <div
              key={category.name}
              className="reveal glass-card p-6 group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-lg shadow-lg`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              </div>

              {/* Divider */}
              <div className={`h-0.5 w-full bg-gradient-to-r ${category.gradient} opacity-20 rounded mb-5`} />

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
