import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { slideLeft, slideRight, fadeUp, scaleUp } from './animations';

const benefits = [
  {
    problem: "When I'm sitting on a weekly S&OP call, I need to make a call on demand variance right now — not wait three days for a report.",
    get: "The ability to run an AI-assisted demand variance analysis in the room, on the spot, using tools they already have access to.",
    labels: ["Faster decisions", "No more waiting on data teams"],
    testimonial: "I used to wait 72 hours for my analyst to run a scenario. After Still Studio I did it myself in 20 minutes before the call ended. That's not a small thing — that's how I run my week now.",
    attribution: "Demand Planning Manager, FMCG Company, India"
  },
  {
    problem: "When my plant has an unplanned stoppage, I need to understand what caused it and whether it'll happen again — before my MD asks me.",
    get: "A working understanding of how to use AI tools to surface maintenance signals, cross-reference historical downtime data, and build a simple predictive flag before the next shift starts.",
    labels: ["Fewer surprises", "Proactive, not reactive"],
    testimonial: "Before this program I was always explaining stoppages after they happened. Now I'm catching two or three signals a week before they become problems. My team thinks I've got a sixth sense. It's just AI.",
    attribution: "Plant Manager, Auto Ancillary Manufacturer, India"
  },
  {
    problem: "When leadership asks me how our trade spend is performing, I need a real answer — not a version that's already three weeks old.",
    get: "The skills to pull, interpret, and present AI-assisted trade performance analysis themselves — without needing the analytics team to run it for them first.",
    labels: ["Real answers", "Real time · No middleman"],
    testimonial: "My category review used to take two weeks of back-and-forth with analytics. I ran the last one myself with AI in an afternoon. My director asked what changed. I told her I got trained properly for once.",
    attribution: "Category Manager, Retail FMCG Company, India"
  },
  {
    problem: "When my team resists using AI tools, I need to know how to lead that change — not just mandate it and hope it sticks.",
    get: "A practical framework for rolling out AI adoption within their function — how to introduce it, how to build habits, how to handle the skeptics, and how to show the results that earn buy-in from above.",
    labels: ["Change that sticks", "Buy-in from the bottom up"],
    testimonial: "I had six people on my team who thought AI was a threat to their jobs. By week four of the program, three of them were showing the others new things they'd figured out. I didn't have to push — they pulled each other.",
    attribution: "Supply Chain Head, D2C Brand, India"
  },
  {
    problem: "When the CHRO asks me what we got from the training budget, I need to show something real — not just a completion certificate and attendance numbers.",
    get: "A post-program adoption report with before/after workflow data, manager-reported output changes, and KPI comparisons — ready to present to leadership without any extra work.",
    labels: ["ROI you can actually present", "No more guessing"],
    testimonial: "Every training program I've run before this one ended with a spreadsheet of who attended. Still Studio gave me a 12-page report showing exactly what changed, with numbers. I shared it with the board. That's never happened before.",
    attribution: "Head of L&D, Enterprise Manufacturing Company, India"
  },
  {
    problem: "When a new AI tool lands in my stack, I need my managers to actually use it — not stare at it and go back to Excel.",
    get: "A repeatable habit of evaluating, testing, and adopting new AI tools independently — so each new rollout doesn't require another round of expensive external training.",
    labels: ["Self-sufficient teams", "Built to keep learning"],
    testimonial: "Three months after the cohort ended, a new AI feature dropped in our planning tool. My team figured it out themselves in a week. They didn't need us to organise another training. That's the real ROI.",
    attribution: "VP Operations, Mid-market FMCG, India"
  }
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0], index: number }) {
  const isEven = index % 2 === 1;
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div 
      ref={ref}
      className={`py-32 flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-7xl mx-auto px-6 md:px-12 ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Content Column */}
      <motion.div 
        variants={isEven ? slideRight : slideLeft}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full md:w-[55%] flex flex-col gap-8"
      >
        <blockquote className="font-serif font-medium text-3xl md:text-5xl text-slate-900 italic tracking-tight leading-tight">
          &ldquo;{benefit.problem}&rdquo;
        </blockquote>
        <div className="flex flex-col gap-4">
          <span className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Capability Unlock</span>
          <p className="text-xl text-slate-500 leading-relaxed font-light font-serif italic">
            {benefit.get}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 pt-4">
          {benefit.labels.map((label, i) => (
            <motion.span
              key={label}
              variants={scaleUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="px-4 py-1 border border-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest rounded-full bg-slate-50"
            >
              {label}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Testimonial Card Column */}
      <motion.div 
        variants={isEven ? slideLeft : slideRight}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.15 }}
        className="w-full md:w-[40%]"
      >
        <div className="bg-slate-50 border border-slate-100 p-10 rounded-3xl relative overflow-hidden transition-all duration-500 hover:bg-white group">
          <span className="absolute -top-6 -left-2 font-bold text-[140px] text-blue-600/[0.03] select-none italic serif">
            &ldquo;
          </span>
          <div className="relative z-10">
            <p className="italic text-lg text-slate-600 leading-relaxed mb-8 font-light">
              {benefit.testimonial}
            </p>
            <div className="pt-8 border-t border-slate-100">
              <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                {benefit.attribution}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function BenefitSection() {
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="bg-white border-t border-slate-100">
      <div ref={headerRef} className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 flex flex-col items-center text-center gap-8">
        <motion.span 
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400"
        >
          02 — The Transformation
        </motion.span>
        <motion.h2 
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          transition={{ delay: 0.1 }}
          className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl text-slate-900 max-w-5xl leading-[1.0] tracking-tight"
        >
          Workflow <span className="italic font-normal text-blue-600">evolution</span> observed.
        </motion.h2>
        <motion.p 
          variants={fadeUp}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-xl md:text-2xl max-w-2xl font-light leading-relaxed font-serif italic"
        >
          Six weeks to active AI integration. Real tools. Real operational outcomes.
        </motion.p>
      </div>

      <div className="border-t border-slate-100">
        {benefits.map((benefit, i) => (
          <div key={i} className="border-b border-slate-100 last:border-b-0 py-10 md:py-0">
            <BenefitCard benefit={benefit} index={i} />
          </div>
        ))}
      </div>

      {/* Section Footer */}
      <div className="bg-white text-slate-900 py-40 text-center px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto flex flex-col gap-10 items-center">
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-serif font-medium text-4xl md:text-7xl text-slate-900 tracking-tight leading-tight"
          >
            "This isn't what they learned. <br className="hidden md:block" />
             This is what they <span className="italic font-normal text-blue-600">can do now</span>."
          </motion.p>
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed font-serif italic"
          >
            Every benefit above came from a real manager, in a real operational role, working through a real problem. That's the only kind of training we build.
          </motion.p>
          <motion.button 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-blue-600 text-white px-12 h-16 rounded-full text-base font-bold hover:bg-blue-700 hover:scale-[1.05] transition-all shadow-xl shadow-blue-600/20 mt-6"
          >
            View Full Program Details
          </motion.button>
        </div>
      </div>
    </section>
  );
}
