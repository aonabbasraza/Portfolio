/**
 * Education Section — Academic information
 */

const educationItems = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Pakistan',
    period: 'Ongoing — 6th Semester',
    grade: 'Excellent',
    description: 'Focused on software engineering, data structures, algorithms, web development, and AI systems. Actively building portfolio projects with modern technologies.',
    highlights: ['Data Structures & Algorithms', 'Web Development', 'AI Integration', 'Databases', 'Software Architecture'],
    icon: '🎓',
    gradient: 'from-indigo-500 to-purple-500',
    current: true,
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <div className="section-divider mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Building strong foundational knowledge through computer science education and continuous hands-on learning.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, i) => (
            <div key={i} className="reveal glass-card p-8 border border-slate-700/50">
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h4 className="text-xl font-bold text-white">{item.degree}</h4>
                    {item.current && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        In Progress
                      </span>
                    )}
                  </div>
                  <p className="text-indigo-400 text-sm mb-2">{item.institution}</p>
                  <div className="flex gap-4 text-slate-500 text-sm font-mono mb-4">
                    <span>{item.period}</span>
                    <span>•</span>
                    <span className="text-amber-400">{item.grade}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-5">{item.description}</p>

                  {/* Highlights */}
                  <div>
                    <p className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">Focus Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((h) => (
                        <span key={h} className="tech-tag text-xs">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning */}
        <div className="mt-16 max-w-3xl mx-auto reveal">
          <div className="glass-card p-8 border border-emerald-500/20 bg-emerald-500/5">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-2xl">📚</span>
              Continuous Learning
            </h3>
            <p className="text-slate-400 mb-4">
              Beyond formal education, I'm committed to continuous learning through project-based development, exploring emerging technologies in AI, full-stack development, and cloud infrastructure.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Machine Learning', 'Cloud Architecture', 'System Design', 'DevOps', 'Advanced Databases'].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
