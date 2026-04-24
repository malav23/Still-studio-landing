import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60 || location.pathname !== '/');
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const industryLinks = [
    { name: 'FMCG', href: '/industry/fmcg' },
    { name: 'Supply Chain', href: '/industry/supply-chain' },
    { name: 'Manufacturing', href: '/industry/manufacturing' },
  ];

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-50 transition-all duration-500 rounded-full h-16 flex items-center px-8 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-lg shadow-blue-900/5' 
          : 'bg-white/5 border border-slate-200/40'
      } shadow-none`}
    >
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shrink-0">
               <div className="w-3 h-3 bg-white/20 blur-[2px] rounded-full"></div>
            </div>
            <span className="text-slate-900 font-bold text-lg tracking-tighter uppercase transition-colors">
              Still<span className="text-slate-400">studio</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 hover:text-blue-600 transition-colors">Home</Link>
          <div className="relative group" onMouseEnter={() => setIsSolutionsOpen(true)} onMouseLeave={() => setIsSolutionsOpen(false)}>
            <button className="flex items-center gap-1 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 hover:text-blue-600 transition-colors">
              Industries <ChevronDown size={10} className={`transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 pt-4 w-48"
                >
                  <div className="bg-white border border-slate-100 rounded-2xl shadow-xl shadow-blue-900/5 p-4 flex flex-col gap-3">
                    {industryLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        to={link.href}
                        className="text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#" className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 hover:text-blue-600 transition-colors">Curriculum</a>
          <a href="#" className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500 hover:text-blue-600 transition-colors">Resources</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 text-white px-6 py-2 h-10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20"
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col pt-24 px-8 md:hidden h-screen overflow-y-auto"
          >
            <button 
              className="absolute top-8 right-8 text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <div className="flex flex-col gap-10">
              <Link to="/" className="text-4xl font-serif italic text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <div className="flex flex-col gap-6">
                <span className="text-[10px] font-bold tracking-[0.3em] text-slate-300 uppercase">Industries</span>
                <div className="flex flex-col gap-4 pl-4">
                  {industryLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.href}
                      className="text-2xl font-serif italic text-slate-600 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <a href="#" className="text-4xl font-serif italic text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>Curriculum</a>
              <div className="mt-4 pt-8 border-t border-slate-100 flex flex-col gap-4">
                <button className="text-slate-900 text-xl font-serif italic text-left">Sign In</button>
                <button className="bg-blue-600 text-white py-5 rounded-full text-lg font-bold shadow-xl shadow-blue-600/20">
                  Request a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
