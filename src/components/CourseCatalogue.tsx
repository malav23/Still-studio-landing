import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Clock, Users, ArrowUpRight } from 'lucide-react';

const courses = [
  { cat: 'Foundation',    title: 'The Art of Prompting',         desc: 'Master the language of LLMs to generate high-quality analysis, reports, and strategy docs in seconds.',                         dur: '1 Week',  fmt: 'Virtual',    lvl: 'All Roles' },
  { cat: 'Supply Chain',  title: 'Claude 360: Project Master',   desc: 'End-to-end supply chain oversight with Claude — from complex data cleaning to automated risk reporting.',                       dur: '6 Weeks', fmt: 'Cohort',     lvl: 'Applied AI' },
  { cat: 'Manufacturing', title: 'Factory Eyes: Vision AI',      desc: 'Harness computer vision to monitor assembly lines and automate quality logging at production scale.',                            dur: '4 Weeks', fmt: 'Hybrid',     lvl: 'Shop Floor' },
  { cat: 'Leadership',    title: 'The AI Copilot Executive',     desc: 'Build an autonomous AI \'mini-me\' that handles routine reporting while you focus on strategic decisions.',                     dur: '2 Days',  fmt: 'Intensive',  lvl: 'Executive'  },
  { cat: 'FMCG',          title: 'Shelf-Hero Intelligence',      desc: 'Analyze thousands of shelf photos to optimize inventory placement and competitive positioning automatically.',                   dur: '4 Weeks', fmt: 'Cohort',     lvl: 'Retail Ops' },
  { cat: 'Supply Chain',  title: 'Warehouse Whisperer',          desc: 'AI-led slotting, route balancing, and labor scheduling that adapts to real-time warehouse data.',                               dur: '4 Weeks', fmt: 'Virtual',    lvl: 'Logistics'  },
];

const catColors: Record<string, string> = {
  Foundation:    'bg-violet-50  text-violet-700',
  'Supply Chain':'bg-indigo-50  text-indigo-700',
  Manufacturing: 'bg-sky-50     text-sky-700',
  Leadership:    'bg-amber-50   text-amber-700',
  FMCG:         'bg-emerald-50 text-emerald-700',
};

export default function CourseCatalogue() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} id="courses" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
        >
          <div>
            <h2 className="font-display font-semibold text-black mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
              Applied AI Learning
            </h2>
            <p className="text-black/50 text-base max-w-md leading-relaxed">
              24 modules across 5 operational verticals. Each course built around
              the specific decisions your role owns — not generic AI theory.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors whitespace-nowrap">
            All 24 Modules <ArrowUpRight size={12} />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-cream rounded-[16px] p-6 card-shadow hover:-translate-y-0.5 transition-transform group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-[1000px] ${catColors[c.cat] || 'bg-gray-100 text-gray-600'}`}>
                  {c.cat}
                </span>
                <ArrowUpRight size={14} className="text-black/25 group-hover:text-primary transition-colors" />
              </div>

              <h3 className="font-display font-semibold text-xl text-black mb-2 leading-snug group-hover:text-primary transition-colors">
                {c.title}
              </h3>
              <p className="text-black/50 text-sm leading-relaxed mb-6">{c.desc}</p>

              <div className="flex items-center gap-4 pt-4 border-t border-black/8">
                <span className="flex items-center gap-1.5 text-[11px] text-black/40">
                  <Clock size={11} /> {c.dur}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-black/40">
                  <Users size={11} /> {c.fmt}
                </span>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-black/25">{c.lvl}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <button className="inline-flex items-center gap-2 border border-black/12 hover:border-primary text-black/50 hover:text-primary px-7 py-3 rounded-[10px] text-sm font-semibold transition-colors">
            Browse All 24 Modules <ArrowUpRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
