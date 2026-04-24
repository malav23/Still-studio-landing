import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeUp, staggerContainer } from './animations';

const categories = ["All Courses", "Supply Chain", "Manufacturing", "FMCG", "Leadership", "Foundation"];

const courses = [
  {
    title: "The Art of Prompting",
    category: "Foundation",
    description: "Move beyond simple questions. Learn the language of LLMs to generate high-quality analysis, reports, and strategy docs in seconds.",
    details: "1 Week · Virtual · Mastery",
    tagColor: "bg-blue-500/10 text-blue-600"
  },
  {
    title: "Claude 360: Project Master",
    category: "Supply Chain",
    description: "Deep dive into using Claude for end-to-end supply chain oversight. From complex data cleaning to automated risk reporting.",
    details: "6 Weeks · Cohort · Applied AI",
    tagColor: "bg-brand/10 text-brand-dark"
  },
  {
    title: "Factory Eyes: Vision AI",
    category: "Manufacturing",
    description: "Harness computer vision to monitor assembly lines. Catch errors that the naked eye misses and automate quality logging.",
    details: "4 Weeks · Hybrid · Shop Floor",
    tagColor: "bg-amber-500/10 text-amber-600"
  },
  {
    title: "The AI Copilot Executive",
    category: "Leadership",
    description: "Strategic delegation to AI. How to build an autonomous 'mini-me' that handles routine reporting while you focus on big decisions.",
    details: "2 Days · Intensive · Executive",
    tagColor: "bg-red-500/10 text-red-600"
  },
  {
    title: "Shelf-Hero Intelligence",
    category: "FMCG",
    description: "Using AI to win at retail. Analyzing thousands of shelf photos to optimize inventory and competitive placement automatically.",
    details: "4 Weeks · Cohort · Retail Ops",
    tagColor: "bg-purple-500/10 text-purple-600"
  },
  {
    title: "Warehouse Whisperer",
    category: "Supply Chain",
    description: "Automate the chaos. AI-led slotting, route balancing, and labor scheduling that adapts to real-time warehouse data.",
    details: "4 Weeks · Virtual · Logistics",
    tagColor: "bg-brand/10 text-brand-dark"
  }
];

export default function CourseCatalogue() {
  const [activeFilter, setActiveFilter] = useState("All Courses");

  const filteredCourses = activeFilter === "All Courses" 
    ? courses 
    : courses.filter(c => c.category === activeFilter);

  return (
    <section className="bg-white py-32 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 text-center flex flex-col items-center">
          <motion.span 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8"
          >
            03 — The Curriculum
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl text-slate-900 mb-8 leading-[1.0] tracking-tight"
          >
            Applied AI <span className="italic font-normal text-blue-600">Learning</span>.
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl max-w-xl leading-relaxed font-light mx-auto font-serif italic"
          >
            Autonomous intelligence modules built for core operational functions. Practical sessions designed for immediate implementation.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 overflow-x-auto pb-8 no-scrollbar mb-16">
          <div className="p-1.5 rounded-full flex gap-1 bg-slate-50 border border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                    : 'text-slate-400 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group flex flex-col h-full bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white transition-all duration-500"
              >
                <div className="text-[10px] font-bold text-slate-300 mb-6 tracking-widest flex items-center justify-between">
                  <span className="text-blue-600">MODULE_0{i+1}</span>
                  <span className="uppercase">{course.category}</span>
                </div>
                <h3 className="text-slate-900 font-serif text-2xl mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-light">
                  {course.description}
                </p>
                <div className="pt-8 border-t border-slate-100 flex flex-col gap-6">
                  <div className="text-[10px] font-bold tracking-widest text-slate-300 uppercase">
                    {course.details}
                  </div>
                  <a href="#" className="text-slate-900 font-bold text-[10px] uppercase tracking-widest inline-flex items-center gap-2 group/link">
                    Start Learning <span className="group-hover/link:translate-x-2 transition-transform duration-500 text-blue-600">→</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 px-10 h-16 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all"
          >
            View All 24 Modules
          </motion.button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
