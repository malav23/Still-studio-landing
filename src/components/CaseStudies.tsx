import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from './animations';

const cases = [
  {
    title: "Global Supply Chain Optimization",
    client: "Tier-1 FMCG Leader",
    impact: "+22% OpEx Efficiency",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000",
    tags: ["Logistics", "Machine Learning"]
  },
  {
    title: "Predictive Maintenance at Scale",
    client: "European Automotive Group",
    impact: "-40% Unscheduled Downtime",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
    tags: ["Manufacturing", "IoT"]
  },
  {
    title: "Autonomous Fleet Management",
    client: "Maritime Logistics Giant",
    impact: "15% Fuel Reduction",
    image: "https://images.unsplash.com/photo-1494412574743-019475b77673?auto=format&fit=crop&q=80&w=2000",
    tags: ["Maritime", "AI Integration"]
  }
];

export default function CaseStudies() {
  return (
    <section className="bg-dark py-32 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/30 mb-8 block"
            >
              04 — Proven Impact
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif font-medium text-5xl md:text-7xl text-black leading-tight"
            >
              Observed <span className="italic font-normal text-blue-600">transformations</span> in the field.
            </motion.h2>
          </div>
          <motion.button 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[12px] font-bold uppercase tracking-widest border-b border-black/20 pb-2 hover:border-black transition-all"
          >
            Archive (14)
          </motion.button>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cases.map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-8">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                   {item.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-md text-[9px] font-bold uppercase tracking-tight rounded-full">
                       {tag}
                     </span>
                   ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest">{item.client}</span>
                  <span className="text-blue-600 font-bold text-lg">{item.impact}</span>
                </div>
                <h3 className="text-black font-serif text-2xl group-hover:text-blue-600 transition-colors">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
