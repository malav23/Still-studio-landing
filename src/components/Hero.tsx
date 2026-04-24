import { motion } from 'motion/react';
import { fadeUp, fadeIn, staggerContainer, scaleUp } from './animations';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-32 pb-20">
      {/* Editorial Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <div className="h-full w-full" style={{ backgroundImage: 'linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      </div>
      
      {/* Decorative media element */}
      <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-[0.03] pointer-events-none hidden lg:block">
         <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1548" alt="tech-pattern" className="w-full h-full object-cover grayscale" />
      </div>

      <div className="container relative z-10 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center gap-12">
        {/* Eyebrow Tag */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="px-4 py-1.5 border border-slate-200 rounded-full bg-white shadow-sm"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
             Architecting Operational Intelligence
          </span>
        </motion.div>

        <div className="max-w-5xl">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
            className="text-slate-900 font-serif font-medium text-6xl md:text-8xl lg:text-9xl leading-[1.0] tracking-tight mb-8"
          >
            Empower teams<br/>
            with <span className="italic font-normal text-blue-600">Applied AI</span>
          </motion.h1>
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="text-slate-500 text-xl md:text-2xl max-w-3xl font-light leading-relaxed font-serif italic"
        >
          Direct, role-specific upskilling for global logistics & manufacturing leaders. Moving beyond theory into high-performance execution.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-5 mt-4"
        >
          <motion.button
            variants={fadeUp}
            className="bg-blue-600 text-white px-12 h-16 rounded-full text-[15px] font-bold hover:bg-blue-700 hover:scale-[1.05] transition-all shadow-xl shadow-blue-600/20"
          >
            The Curriculum
          </motion.button>
          <motion.button
            variants={fadeUp}
            className="bg-white border border-slate-200 px-12 h-16 rounded-full text-[15px] font-bold text-slate-700 hover:bg-slate-50 transition-all"
          >
            Request Demo
          </motion.button>
        </motion.div>

        {/* Trust Partners */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 w-full flex flex-col items-center gap-10"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">Operational Excellence @</span>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 grayscale opacity-40 hover:opacity-80 transition-opacity duration-700">
            <span className="font-serif font-bold text-2xl tracking-tighter text-slate-900">UNILEVER</span>
            <span className="font-serif font-bold text-2xl tracking-tighter text-slate-900">NESTLE</span>
            <span className="font-serif font-bold text-2xl tracking-tighter text-slate-900">P&G</span>
            <span className="font-serif font-bold text-2xl tracking-tighter text-slate-900">PEPSICO</span>
            <span className="font-serif font-bold text-2xl tracking-tighter text-slate-900">MAERSK</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-slate-200"
        />
      </motion.div>
    </section>
  );
}
