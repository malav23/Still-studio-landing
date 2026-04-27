import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Services',   href: '#services' },
  { label: 'Curriculum', href: '#courses' },
  { label: 'Blog',       href: '#blog' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ── Top header ── */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="font-display font-semibold text-xl text-black tracking-tight shrink-0">
            still<span className="text-primary">.</span>studio
          </Link>

          {/* Desktop nav — floating pill */}
          <nav className="hidden md:flex items-center gap-1 bg-white rounded-[100px] pill-shadow px-2 py-1.5">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-sm text-black/60 hover:text-black transition-colors rounded-[100px] hover:bg-cream font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: status badge + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-black/50">
              <span
                className="w-1.5 h-1.5 rounded-full bg-live"
                style={{ boxShadow: 'rgba(49,238,51,0.5) 0px 0px 8px 0px' }}
              />
              Accepting new clients
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-[10px] hover:opacity-90 transition-opacity group"
            >
              Get Started
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-black/60 hover:text-black p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white flex flex-col px-6 pt-6 pb-10"
          >
            <div className="flex items-center justify-between mb-10">
              <span className="font-display font-semibold text-xl">still<span className="text-primary">.</span>studio</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={22} className="text-black/60" />
              </button>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-4xl font-semibold text-black border-b border-black/8 py-5"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <a
              href="#contact"
              className="bg-primary text-white text-center py-4 rounded-[10px] font-semibold text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
