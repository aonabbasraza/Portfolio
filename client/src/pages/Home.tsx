import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import Navigation from '@/components/Navigation';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Animate all .reveal elements on scroll
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.reveal-left').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -50 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.reveal-right').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: 50 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative animated-gradient-bg">
      <Navigation />

      {/* 3D Starfield Background */}
      <div className="fixed inset-0 z-0" style={{ opacity: 0.25 }}>
        <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
          <Suspense fallback={null}>
            <Stars radius={300} depth={100} count={3000} factor={4} saturation={0.2} fade speed={0.5} />
            <ambientLight intensity={0.1} />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
