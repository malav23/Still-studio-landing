import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Target, TrendingUp, Check, X } from 'lucide-react';

const values = [
  {
    Icon: Lightbulb,
    title: 'Expert Practitioners',
    body: 'Our facilitators have run actual supply chains and production floors. Not academics — operators who now teach AI.',
  },
  {
    Icon: Target,
    title: 'Role-Specific Scenarios',
    body: 'Every module is built around real decisions in your industry. Category managers get category scenarios. Plant heads get plant scenarios.',
  },
  {
    Icon: TrendingUp,
    title: 'Measurable ROI',
    body: 'Day 30 & 60 adoption tracking with before/after KPI benchmarks. Board-ready reporting for your CHRO and COO.',
  },
];

const comparison = [
  { benefit: 'Role-specific scenarios',   generic: false, still: true },
  { benefit: 'Operations industry focus', generic: false, still: true },
  { benefit: 'Post-cohort ROI tracking',  generic: false, still: true },
  { benefit: 'Day 30 & 60 measurement',   generic: false, still: true },
  { benefit: 'Board-ready reporting',     generic: false, still: true },
  { benefit: 'Beginner AI awareness',     generic: true,  still: true },
];

const bottomStats = [
  { v: '1,400+', l: 'Leaders Trained' },
  { v: '6',      l: 'Industry Verticals' },
  { v: '82%',    l: 'Day-30 Adoption' },
  { v: '3.2×',   l: 'Faster Decisions' },
];

export default function PlatformSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section ref={ref} className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-semibold text-black mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Why Even Us?
          </h2>
          <p className="text-black/50 text-base max-w-xl mx-auto leading-relaxed">
            We go beyond surface-level AI courses — our approach is built on
            operational experience, role-specific content, and measurable outcomes.
          </p>
        </motion.div>

        {/* 3 value cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {values.map(({ Icon, title, body }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-cream rounded-[16px] p-7 card-shadow"
            >
              <div className="w-11 h-11 bg-white rounded-[8px] flex items-center justify-center mb-5">
                <Icon size={18} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-xl text-black mb-2">{title}</h3>
              <p className="text-black/50 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-cream rounded-[16px] overflow-hidden card-shadow mb-10"
        >
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-black/8 px-6 py-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">Benefits</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 text-center">Generic AI Training</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary text-center">Still Studio</span>
          </div>
          {comparison.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 px-6 py-4 items-center ${i < comparison.length - 1 ? 'border-b border-black/6' : ''}`}
            >
              <span className="text-sm text-black/70">{row.benefit}</span>
              <div className="flex justify-center">
                {row.generic
                  ? <Check size={16} className="text-black/30" />
                  : <X     size={16} className="text-black/20" />}
              </div>
              <div className="flex justify-center">
                <Check size={16} className="text-primary" />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {bottomStats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display font-semibold text-4xl text-primary mb-1">{s.v}</div>
              <div className="text-xs text-black/45 uppercase tracking-wide">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
