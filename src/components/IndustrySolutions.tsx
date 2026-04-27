import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { BrainCircuit, Truck, Factory, Users } from 'lucide-react';

const services = [
  {
    Icon: BrainCircuit,
    title: 'AI Workforce Training',
    body: 'Role-specific cohorts built for operations leaders. Real scenarios, real tools, immediate application — not generic AI theory.',
    imgs: [
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=320&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=320&q=80&auto=format&fit=crop',
    ],
  },
  {
    Icon: Truck,
    title: 'Supply Chain & FMCG',
    body: 'Automate demand sensing, route optimization, and trade promotion ROI. Built for category managers, logistics VPs, and demand planners.',
    imgs: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=320&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542838132-92c53300491e?w=320&q=80&auto=format&fit=crop',
    ],
  },
  {
    Icon: Factory,
    title: 'Advanced Manufacturing',
    body: 'Deploy computer vision for quality control, acoustic sensing for predictive maintenance, and AI-led labor scheduling.',
    imgs: [
      'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=320&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=320&q=80&auto=format&fit=crop',
    ],
  },
  {
    Icon: Users,
    title: 'Multi-Agent Systems',
    body: 'Build autonomous AI pipelines that handle routine reporting, vendor scoring, and demand analysis — freeing your team for high-leverage decisions.',
    imgs: [
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=320&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=320&q=80&auto=format&fit=crop',
    ],
  },
];

export default function IndustrySolutions() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section ref={ref} id="services" className="bg-cream py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-semibold text-black leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            What We Even Build
          </h2>
          <p className="text-black/50 text-base max-w-xl mx-auto leading-relaxed">
            Explore our training programs and AI systems designed to deliver measurable
            outcomes for every operational function.
          </p>
        </motion.div>

        {/* 2×2 card grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map(({ Icon, title, body, imgs }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="bg-white rounded-[16px] p-7 card-shadow hover:-translate-y-0.5 transition-transform cursor-pointer group"
            >
              {/* Icon container */}
              <div className="w-12 h-12 bg-cream rounded-[8px] flex items-center justify-center mb-5">
                <Icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <h3 className="font-display font-semibold text-2xl text-black mb-2 leading-snug group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-black/50 text-sm leading-relaxed mb-6">{body}</p>

              {/* Two embedded images */}
              <div className="grid grid-cols-2 gap-2">
                {imgs.map((src, j) => (
                  <div key={j} className="rounded-[10px] overflow-hidden h-36">
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
