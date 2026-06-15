import { useState } from 'react';
import emailjs from '@emailjs/browser';

/**
 * Contact Section — Clean form + contact info cards with EmailJS
 */

const contactCards = [
  {
    icon: '📧',
    label: 'Email',
    value: 'devx.aon@gmail.com',
    href: 'https://mail.google.com/mail/u/0/?fs=1&to=devx.aon@gmail.com&tf=cm',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'aon-abbass',
    href: 'https://www.linkedin.com/in/aon-abbass/',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'aonabbasraza',
    href: 'https://github.com/aonabbasraza',
    gradient: 'from-slate-500 to-gray-600',
  },
];

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Email validation regex
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation checks
    if (!formData.name.trim()) {
      setError('Name is required');
      return;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }
    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (!formData.subject.trim()) {
      setError('Subject is required');
      return;
    }
    if (!formData.message.trim()) {
      setError('Message is required');
      return;
    }
    if (formData.message.trim().length < 10) {
      setError('Message must be at least 10 characters');
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          to_email: 'devx.aon@gmail.com',
          from_email: formData.email,
          from_name: formData.name,
          subject: formData.subject,
          message: formData.message,
        }
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Email sending error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="reveal mb-16 text-center">
          <div className="section-divider mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Have a project in mind? I'd love to hear about it. Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info — 2 cols */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal glass-card p-5 flex items-center gap-4 group"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-xl flex-shrink-0`}>
                  {card.icon}
                </div>
                <div>
                  <p className="text-slate-500 text-xs">{card.label}</p>
                  <p className="text-white text-sm font-medium group-hover:text-indigo-400 transition-colors">{card.value}</p>
                </div>
                <svg className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}

            {/* Availability Banner */}
            <div className="reveal glass-card p-5 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium">Open for opportunities</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Interested in collaborations, internships, and freelance projects. Typical response time: within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form — 3 cols */}
          <div className="lg:col-span-3">
            <div className="reveal glass-card p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-slate-400 mb-1.5">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder=" Your Name"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-slate-400 mb-1.5">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="youremail@example.com"
                        className="form-input"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="Project inquiry..."
                      className="form-input"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="form-input resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  {error && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <button 
                    id="contact-submit" 
                    type="submit" 
                    className="btn-primary w-full py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="reveal mt-20 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-600 text-sm">
            Designed & built with ❤️ using React, Three.js, GSAP & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
