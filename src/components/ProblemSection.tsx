import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const industryTags = [
  'FMCG & Consumer Goods', 'Supply Chain', 'Advanced Manufacturing',
  'Logistics', 'Procurement', 'Retail Operations', 'D2C Brands',
  'Auto Ancillary', 'Pharmaceuticals', 'Cold Chain',
];
const topicTags = [
  'Prompt Engineering', 'Claude AI', 'AI Workflows', 'Multi-Agent Systems',
  'Demand Forecasting', 'Predictive Maintenance', 'Computer Vision',
  'LLM for Operations', 'AI Copilot', 'Autonomous Reporting',
];

const stats = [
  { value: '87%', label: 'of enterprise AI rollouts fail due to workforce capability gaps, not the technology' },
  { value: '74%', label: 'of mid-level managers never receive structured AI training after tool deployment' },
  { value: '<15%', label: 'user confidence reported post-deployment without role-specific training' },
];

export default function ProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section ref={ref} className="bg-white pt-0 pb-24">

      {/* ── Scrolling tag marquee ── */}
      <div className="py-10 overflow-hidden border-y border-black/6">
        {/* Row 1 — scrolls left */}
        <div className="flex gap-3 mb-3 overflow-hidden">
          <div
            className="flex gap-3 shrink-0 whitespace-nowrap"
            style={{ animation: 'marquee-left 30s linear infinite' }}
          >
            {[...industryTags, ...industryTags].map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center bg-cream text-primary text-xs font-semibold px-4 py-2 rounded-[1000px] border border-primary/10 shrink-0"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex gap-3 overflow-hidden">
          <div
            className="flex gap-3 shrink-0 whitespace-nowrap"
            style={{ animation: 'marquee-right 28s linear infinite' }}
          >
            {[...topicTags, ...topicTags].map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center bg-black/5 text-black/65 text-xs font-semibold px-4 py-2 rounded-[1000px] shrink-0"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-center mb-14"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          The Enterprise AI Adoption Gap
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-cream rounded-[16px] p-8 card-shadow"
            >
              <div
                className="font-display font-semibold text-primary mb-3"
                style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1 }}
              >
                {s.value}
              </div>
              <p className="text-black/55 text-sm leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
