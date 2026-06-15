/**
 * About Section — Clean two-column layout with stats
 */

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="reveal mb-16">
          <div className="section-divider" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            Crafting digital experiences that merge cutting-edge technology with intuitive design.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Avatar & Quick Info */}
          <div className="reveal-left">
            <div className="glass-card p-8 text-center">
              <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-7xl mb-6 shadow-lg shadow-indigo-500/20">
                👨‍💻
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Aon Abbas</h3>
              <p className="text-indigo-400 font-mono text-sm mb-6">Full-Stack Developer & AI Engineer</p>

              <div className="space-y-3 text-left">
                {[
                  { label: 'Status', value: 'Available for internship', color: 'text-emerald-400' },
                  { label: 'Location', value: 'Pakistan', color: 'text-slate-300' },
                  { label: 'Education', value: 'BS CS (6th Semester)', color: 'text-slate-300' },
                  { label: 'Speciality', value: 'React, Flutter, FastAPI, Gemini AI', color: 'text-slate-300' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-slate-500 text-sm">{label}</span>
                    <span className={`text-sm font-medium ${color}`}>{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-8">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-outline flex-1 text-sm py-2.5">
                  Connect
                </a>
              </div>
            </div>
          </div>

          {/* Right — Story */}
          <div className="reveal-right space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">My Story</h3>
              <p className="text-slate-400 leading-relaxed">
                I'm a passionate computer science student with a strong foundation in full-stack development and AI integration. Through personal projects and hands-on learning, I've built end-to-end applications that solve real-world problems using modern technologies like React, Flutter, FastAPI, and Gemini AI.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">What I Do</h3>
              <p className="text-slate-400 leading-relaxed">
                I specialize in building intelligent, scalable applications that integrate AI capabilities with intuitive user interfaces. My expertise spans frontend, backend, mobile development, and AI orchestration — with a focus on delivering practical solutions through agentic AI systems and modern frameworks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">Core Values</h3>
              <ul className="space-y-2">
                {[
                  'Build scalable, maintainable systems',
                  'Learn from every project and failure',
                  'Create user-centric solutions',
                  'Write clean, well-documented code',
                  'Stay updated with emerging technologies',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { value: '5+', label: 'Projects Built' },
            { value: '10+', label: 'Technologies' },
            { value: '4+', label: 'Languages' },
            { value: '100%', label: 'Passion' },
          ].map(({ value, label }, i) => (
            <div key={label} className={`reveal glass-card p-6 text-center`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="stat-number gradient-text">{value}</div>
              <div className="text-slate-500 text-sm mt-2">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
