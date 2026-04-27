import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    client: 'Tier-1 FMCG Leader',
    title: 'Global Supply Chain AI Transformation',
    metric: '+22%',
    metricLabel: 'OpEx Efficiency',
    tags: ['Supply Chain', '6-Month Program'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80&auto=format&fit=crop',
    desc: '340 operational managers across 12 countries upskilled on AI-assisted demand planning and inventory optimization. Post-cohort adoption at 91% by Day 60.',
  },
  {
    client: 'European Automotive Group',
    title: 'Predictive Maintenance at Scale',
    metric: '−40%',
    metricLabel: 'Unscheduled Downtime',
    tags: ['Manufacturing', 'Predictive AI'],
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=900&q=80&auto=format&fit=crop',
    desc: 'Plant managers trained to interpret acoustic sensing AI and act on predictive maintenance signals. Stoppages cut 40% within 90 days of completion.',
  },
  {
    client: 'Maritime Logistics Giant',
    title: 'Autonomous Fleet Management Program',
    metric: '15%',
    metricLabel: 'Fuel Cost Savings',
    tags: ['Logistics', 'Route Optimization'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop',
    desc: 'Logistics VPs and fleet managers deployed AI-assisted route optimization. 15% fuel reduction and 22% on-time delivery improvement across 60 vessels.',
  },
];

export default function CaseStudies() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} id="cases" className="bg-cream py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
        >
          <h2 className="font-display font-semibold text-black leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Proven Impact Across<br />the World's Operations
          </h2>
          <button className="hidden md:flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors">
            All Case Studies <ArrowUpRight size={12} />
          </button>
        </motion.div>

        <div className="flex flex-col gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group bg-white rounded-[16px] overflow-hidden card-shadow hover:-translate-y-0.5 transition-transform cursor-pointer grid md:grid-cols-[300px_1fr]"
            >
              {/* Image */}
              <div className="h-52 md:h-auto overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">{c.client}</span>
                    {c.tags.map((t, j) => (
                      <span key={j} className="text-[10px] bg-cream text-black/50 border border-black/8 px-2.5 py-0.5 rounded-[1000px] font-semibold">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-black mb-3 leading-snug group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-black/50 text-sm leading-relaxed">{c.desc}</p>
                </div>

                <div className="flex items-end justify-between mt-6 pt-5 border-t border-black/8">
                  <div>
                    <div className="font-display font-semibold text-4xl text-primary leading-none">{c.metric}</div>
                    <div className="text-[11px] uppercase tracking-wide text-black/40 mt-1">{c.metricLabel}</div>
                  </div>
                  <button className="flex items-center gap-1.5 text-sm font-semibold text-black/40 group-hover:text-primary transition-colors">
                    Read Case Study <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
