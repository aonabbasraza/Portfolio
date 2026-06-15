import { useEffect, useState } from 'react';

/**
 * Navigation — Fixed side dots + top bar
 */

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Determine active section
      const sectionEls = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
      let current = 'hero';
      for (const el of sectionEls) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          current = el.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(10, 15, 28, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(30, 41, 59, 0.5)' : '1px solid transparent',
        }}
      >
        <div className="container mx-auto flex items-center justify-between h-16 px-6">
          <a href="#hero" className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            <span className="gradient-text">Dev</span>
            <span className="text-slate-400">.</span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === s.id ? 'text-indigo-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Side dot nav (desktop only) */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group relative flex items-center justify-end"
            aria-label={s.label}
          >
            {/* Tooltip */}
            <span className="absolute right-6 px-2 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {s.label}
            </span>
            {/* Dot */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                activeSection === s.id
                  ? 'w-3 h-3 bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.5)]'
                  : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
