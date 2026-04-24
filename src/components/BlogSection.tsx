import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from './animations';

const posts = [
  {
    date: "MAR 24, 2026",
    title: "The Managerial Gap in Industrial AI Rollouts",
    category: "Strategy",
    readTime: "8 MIN READ"
  },
  {
    date: "MAR 18, 2026",
    title: "LLMs for Logistics: Moving Beyond Chatbots",
    category: "Technical",
    readTime: "12 MIN READ"
  },
  {
    date: "MAR 12, 2026",
    title: "Operational Trust: How to Certify AI Decisioning",
    category: "Operations",
    readTime: "6 MIN READ"
  },
  {
    date: "MAR 05, 2026",
    title: "The Architecture of a Still-First Enterprise",
    category: "Culture",
    readTime: "10 MIN READ"
  }
];

export default function BlogSection() {
  return (
    <section className="bg-dark py-32 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <div className="max-w-xl">
            <motion.span 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 block"
            >
              05 — Intelligence Layer
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif font-medium text-5xl md:text-7xl text-slate-900 leading-tight"
            >
              The Knowledge Base for <span className="italic font-normal text-blue-600">Decision Makers</span>.
            </motion.h2>
          </div>
          <div className="md:pt-12">
            <p className="text-slate-500 text-lg max-w-xs font-light leading-relaxed font-serif italic">
              Exploring the intersection of autonomous systems and human leadership in mission-critical industries.
            </p>
          </div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col"
        >
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="#"
              variants={fadeUp}
              className="group flex flex-col md:flex-row md:items-center py-10 border-t border-slate-100 hover:bg-blue-50/30 transition-colors px-4 -mx-4"
            >
              <div className="flex-shrink-0 w-32 mb-4 md:mb-0">
                 <span className="text-[10px] font-bold text-slate-400 tracking-widest">{post.date}</span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-2">
                   <span className="text-[9px] font-bold uppercase text-blue-600 tracking-widest px-2 py-0.5 border border-blue-600/10 rounded-full">{post.category}</span>
                   <span className="text-[9px] font-bold uppercase text-slate-300 tracking-widest">{post.readTime}</span>
                </div>
                <h3 className="text-slate-900 font-serif text-2xl md:text-3xl group-hover:translate-x-2 transition-transform duration-500">
                  {post.title}
                </h3>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 transition-transform duration-500 text-blue-600">
                 <span className="text-2xl">→</span>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-slate-100"></div>
        </motion.div>

        <div className="mt-20 text-center">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             className="px-10 h-14 bg-blue-600 text-white rounded-full text-[13px] font-bold uppercase tracking-widest shadow-lg shadow-blue-600/20"
           >
             Read All Insights
           </motion.button>
        </div>
      </div>
    </section>
  );
}
