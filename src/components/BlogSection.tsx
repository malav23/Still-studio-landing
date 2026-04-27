import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const posts = [
  {
    cat: 'Strategy',
    date: 'Mar 24, 2026',
    read: '8 min',
    title: 'The Managerial Gap in Industrial AI Rollouts',
    excerpt: 'Why 74% of mid-level managers never receive structured AI training after tool deployment — and what it costs enterprise operations.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80&auto=format&fit=crop',
  },
  {
    cat: 'Technical',
    date: 'Mar 18, 2026',
    read: '12 min',
    title: 'LLMs for Logistics: Moving Beyond Chatbots',
    excerpt: 'How operational leaders can deploy large language models for real supply chain decision support — not just internal Q&A.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=80&auto=format&fit=crop',
  },
  {
    cat: 'Operations',
    date: 'Mar 12, 2026',
    read: '6 min',
    title: 'Operational Trust: How to Certify AI Decisioning',
    excerpt: 'A practical framework for building verification processes that let operations teams trust and act on AI recommendations at scale.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80&auto=format&fit=crop',
  },
];

export default function BlogSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section ref={ref} id="blog" className="bg-cream py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14"
        >
          <h2 className="font-display font-semibold text-black"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            From Our Knowledge Base
          </h2>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 bg-sage text-primary font-semibold text-sm px-5 py-2.5 rounded-[10px] hover:opacity-80 transition-opacity"
          >
            See All Posts <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group bg-white rounded-[16px] overflow-hidden card-shadow hover:-translate-y-0.5 transition-transform cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-600"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{p.cat}</span>
                  <span className="text-[10px] text-black/35">{p.date} · {p.read} read</span>
                </div>

                <h3 className="font-display font-semibold text-xl text-black mb-2 leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-black/50 text-sm leading-relaxed mb-5">{p.excerpt}</p>

                <div className="flex items-center gap-1 text-sm font-semibold text-black/40 group-hover:text-primary transition-colors">
                  Learn More <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
