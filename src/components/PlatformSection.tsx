import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Layers, TrendingUp, Check } from 'lucide-react';
import { fadeUp, staggerContainer } from './animations';

const pillars = [
  {
    id: 'assess',
    label: 'Assess',
    icon: <Search className="text-brand-dark" size={48} />,
    title: 'Assess',
    body: 'Understand exactly where your teams stand before any training begins.',
    features: [
      'AI readiness diagnostic by role and function',
      'Benchmark against industry standards',
      'Identify highest-ROI upskilling priorities',
      'Delivered as a diagnostic report, not just a score'
    ]
  },
  {
    id: 'build',
    label: 'Build',
    icon: <Layers className="text-brand-dark" size={48} />,
    title: 'Build',
    body: 'Role-specific AI training built around how your industry actually works.',
    features: [
      'Courses built for operations, FMCG, supply chain, and manufacturing',
      'Live cohorts and async modules for flexible delivery',
      'On-site, virtual, or hybrid — we match your calendar',
      'Real tools, real scenarios, immediate application'
    ]
  },
  {
    id: 'prove',
    label: 'Prove',
    icon: <TrendingUp className="text-brand-dark" size={48} />,
    title: 'Prove',
    body: 'Measure what changes in workflows — not just who attended.',
    features: [
      'Post-cohort adoption tracking at day 30 and 60',
      'Manager-reported workflow and output changes',
      'KPI benchmarks set before, measured after',
      'ROI-ready reporting for L&D and leadership'
    ]
  }
];

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState('assess');

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
            02 — The Methodology
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl text-slate-900 mb-8 leading-[1.0] tracking-tight"
          >
            Systems of <span className="italic font-normal text-blue-600">advancement</span>.
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl max-w-xl leading-relaxed font-light mx-auto font-serif italic"
          >
            A cohesive architecture managing the full operational learning lifecycle. From diagnostic assessment to outcome verification.
          </motion.p>
        </div>

        {/* Tabs Interface */}
        <div className="flex flex-col gap-16">
          {/* Nav */}
          <div className="flex justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            <div className="p-1.5 rounded-full flex gap-1 bg-slate-50 border border-slate-100">
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`whitespace-nowrap px-8 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeTab === pillar.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                      : 'text-slate-400 hover:text-blue-600'
                  }`}
                >
                  {pillar.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Panel */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {pillars.map((pillar) => pillar.id === activeTab && (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-16"
                >
                  <div className="space-y-10">
                    <div className="inline-flex items-center gap-3 px-4 py-2 border border-blue-600/10 bg-blue-600/5 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></div>
                      <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest leading-none">
                        PHASE_{pillar.id.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="font-serif text-4xl lg:text-7xl text-slate-900 tracking-tight leading-[1.0]">
                      {pillar.title}
                    </h3>
                    <p className="text-xl text-slate-500 leading-relaxed font-light max-w-md font-serif italic">
                      {pillar.body}
                    </p>
                  </div>
                  <div className="flex flex-col gap-8 md:pl-12">
                    <motion.ul 
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="space-y-8"
                    >
                      {pillar.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          variants={fadeUp}
                          className="group flex gap-6"
                        >
                          <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em] pt-2">
                            0{i+1}
                          </span>
                          <span className="text-xl text-slate-700 font-light group-hover:text-blue-600 transition-colors leading-relaxed">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
