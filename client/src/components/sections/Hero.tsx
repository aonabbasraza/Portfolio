import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * Hero Section — Cinematic first impression
 * Large name, animated subtitle, social links, scroll indicator
 */

const roles = [
  'Full-Stack Developer',
  'AI & ML Engineer',
  'Mobile App Developer',
  'Software Architect',
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const type = () => {
      if (!deleting) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentRole.length) {
          setIsTyping(false);
          timeout = setTimeout(() => {
            deleting = true;
            setIsTyping(true);
            type();
          }, 2000);
          return;
        }
        timeout = setTimeout(type, 80);
      } else {
        setDisplayText(currentRole.slice(0, charIndex));
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
        timeout = setTimeout(type, 40);
      }
    };

    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, [roleIndex]);

  // Entrance animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });
    if (nameRef.current) {
      tl.fromTo(nameRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    }
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');
    }
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4');
    }
    if (scrollRef.current) {
      tl.fromTo(scrollRef.current, { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.2');
    }
  }, []);

  return (
    <section id="hero" ref={heroRef} className="section relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        {/* Greeting */}
        <div ref={subtitleRef} className="mb-6 opacity-0">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-mono">
            👋 Welcome to my digital universe
          </span>
        </div>

        {/* Name */}
        <h1 ref={nameRef} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 leading-tight">
          <span className="block text-white">Hi, I'm</span>
          <span className="gradient-text">Aon Abbas</span>
        </h1>

        {/* Animated Role */}
        <div className="text-xl md:text-2xl text-slate-400 mb-10 h-10 font-mono flex items-center justify-center gap-1">
          <span className="text-indigo-400">&lt;</span>
          <span className="text-slate-300">{displayText}</span>
          <span
            className="inline-block w-0.5 h-6 bg-indigo-400 ml-0.5"
            style={{ animation: 'blink 1s step-end infinite' }}
          />
          <span className="text-indigo-400">/&gt;</span>
        </div>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center mb-16 opacity-0">
          <a href="#projects" className="btn-primary">
            View My Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 justify-center mb-20">
          {[
            { href: 'https://github.com/aonabbasraza', label: 'GitHub', icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> },
            { href: 'https://www.linkedin.com/in/aon-abbass/', label: 'LinkedIn', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
            { href: 'https://mail.google.com/mail/u/0/?fs=1&to=devx.aon@gmail.com&tf=cm', label: 'Email', icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></> },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-11 h-11 rounded-xl border border-slate-700 flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                {link.icon}
              </svg>
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div ref={scrollRef} className="opacity-0">
          <a href="#about" className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors">
            <span className="text-xs font-mono tracking-widest uppercase">Scroll Down</span>
            <svg className="w-5 h-5" style={{ animation: 'bounce-scroll 2s infinite' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl pointer-events-none" />
    </section>
  );
}
