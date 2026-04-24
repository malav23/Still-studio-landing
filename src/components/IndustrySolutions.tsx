import { motion } from 'motion/react';
import { fadeUp, staggerContainer } from './animations';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: "FMCG & Consumer Goods",
    slug: "fmcg",
    body: "Agility in high-volume, thin-margin environments. Automate demand sensing and SKU-level optimization.",
    solve: [
      "Dynamic trade promotion ROI",
      "Automated stock-out prediction",
      "SKU complexity rationalization"
    ],
    roles: ["Category Manager", "Demand Planner", "Sales Ops"],
    accent: "#3b82f6",
    tag: "High Volume"
  },
  {
    title: "Supply Chain & Logistics",
    slug: "supply-chain",
    body: "From visibility to automated resilience. Deploy autonomous freight matching and predictive route healing.",
    solve: [
      "Dynamic route optimization",
      "Vendor risk orchestration",
      "Last-mile cost intelligence"
    ],
    roles: ["Logistics VP", "Warehouse Mgr", "Procurement"],
    accent: "#10b981",
    tag: "Network Efficiency"
  },
  {
    title: "Advanced Manufacturing",
    slug: "manufacturing",
    body: "The intelligent production floor. Reduce downtime through acoustic sensing and computer vision yield audits.",
    solve: [
      "Predictive shop-floor downtime",
      "Vision-based quality control",
      "Labor capacity orchestration"
    ],
    roles: ["Plant Head", "Quality Engineer", "Ops Director"],
    accent: "#f59e0b",
    tag: "Floor Yield"
  }
];

export default function IndustrySolutions() {
  return (
    <section className="bg-white py-32 overflow-hidden border-t border-slate-100">
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
            02 — SOLUTIONS
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl text-slate-900 mb-8 leading-[1.0] tracking-tight"
          >
            Built for the <span className="italic font-normal text-blue-600">people</span> who run operations.
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl max-w-3xl leading-relaxed font-light mx-auto font-serif italic"
          >
            Same AI, completely different use cases. Every curriculum is built around your industry's actual decisions — not a generic catalogue.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {solutions.map((solution, i) => (
            <Link 
              key={i} 
              to={`/industry/${solution.slug}`}
              className="group flex flex-col cursor-pointer"
            >
              <div 
                className="self-start text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border-b-2"
                style={{ borderColor: solution.accent, color: solution.accent }}
              >
                {solution.tag}
              </div>
              
              <h3 className="text-slate-900 font-serif text-3xl mb-6 tracking-tight group-hover:text-blue-600 transition-colors">
                {solution.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow font-light">
                {solution.body}
              </p>

              <div className="space-y-8 pt-8 border-t border-slate-100">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block mb-6">
                    Operational Impact:
                  </span>
                  <ul className="space-y-4">
                    {solution.solve.map((item, j) => (
                      <li key={j} className="flex items-center gap-4 text-[14px] text-slate-700 font-light italic font-serif">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: solution.accent }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <span className="text-[10px] uppercase tracking-widest text-slate-300 font-bold block mb-4">
                    Key Stakeholders:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {solution.roles.map((role, j) => (
                      <span 
                        key={j}
                        className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-wider"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
