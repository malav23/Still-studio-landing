import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { fadeUp, slideLeft, slideRight } from './animations';

const steps = [
  {
    title: "Skills Readiness Assessment",
    timing: "Week 0",
    period: "Before cohort starts",
    body: "We run a diagnostic across your team — by role, seniority, and function. You get a clear map of exactly where the AI skills gaps are before we train a single person. No guesswork, no generic benchmarks."
  },
  {
    title: "Program Design",
    timing: "Week 0–1",
    period: "Pre-cohort",
    body: "We configure the curriculum for your industry and team structure. Supply chain managers get supply chain AI scenarios. Plant heads get manufacturing use cases. Every scenario is built around decisions your team actually makes every week."
  },
  {
    title: "Live Cohort Training",
    timing: "Weeks 1–6",
    period: "Core program",
    body: "Six weeks, three to four hours per week. Live sessions with async modules in between. Every session uses real tools and real operational scenarios — demand forecasting, vendor scoring, production scheduling, category planning. Participants leave each session with something they can apply the next morning."
  },
  {
    title: "Workflow Integration",
    timing: "Week 5–6",
    period: "End of cohort",
    body: "Each participant builds a personal AI playbook during the program — a 30-day plan for embedding AI into their specific role. Not a document they'll file away. A structured set of commitments tied to the decisions they own."
  },
  {
    title: "Adoption Measurement",
    timing: "Day 30 & 60",
    period: "Post-cohort",
    body: "We check back at day 30 and day 60. We track workflow changes, tool usage, and manager-reported output improvements. Your leadership receives an ROI-ready summary — formatted for a CHRO or COO — showing exactly what changed and what it means."
  }
];

interface Step {
  title: string;
  timing: string;
  period: string;
  body: string;
}

function StepCard({ step, index }: { step: Step, index: number, key?: React.Key }) {
  const isEven = index % 2 === 1;
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 mb-32 md:mb-48 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Node */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center z-20 hidden md:flex bg-white"
      >
        <span className="text-slate-900 font-bold text-xs">{index + 1}</span>
      </motion.div>

      {/* Content */}
      <div className={`w-full md:w-[42%] ${isEven ? 'md:pl-0' : 'md:pr-0'} relative z-10`}>
        <motion.div
          ref={ref}
          variants={isEven ? slideRight : slideLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">
              {step.timing}
            </span>
            <div className="h-px w-8 bg-slate-100"></div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              {step.period}
            </span>
          </div>
          <h3 className="text-slate-900 font-serif text-3xl md:text-4xl tracking-tight">{step.title}</h3>
          <p className="text-slate-500 leading-relaxed text-lg font-light font-serif italic">{step.body}</p>
        </motion.div>
      </div>

      {/* Spacer side */}
      <div className="hidden md:block w-[42%]"></div>
    </div>
  );
}

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-white py-40 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-32 text-center flex flex-col items-center">
          <motion.span 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8"
          >
            03 — THE PROTOCOL
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif font-medium text-5xl md:text-8xl text-slate-900 mb-8 leading-[1.0] tracking-tight max-w-4xl"
          >
            From diagnostic to <span className="italic font-normal text-blue-600">active output</span>.
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl md:text-2xl max-w-2xl leading-relaxed font-light mx-auto font-serif italic"
          >
            A five-step protocol that turns AI skeptics into confident operators — and gives leadership the data to prove it happened.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative py-20">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-blue-600 hidden md:block z-10" 
          />

          {steps.map((step, i) => (
            <StepCard key={i} step={step} index={i} />
          ))}
        </div>

        {/* Metrics Strip */}
        <div className="mt-32 p-16 rounded-[40px] bg-slate-50 border border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          {[
            { value: "6 weeks", label: "Average time to active AI use in daily workflows" },
            { value: "3.2×", label: "Faster decision cycles by managers 45 days post-training" },
            { value: "40%", label: "Reduction in manual reporting overhead across teams" },
            { value: "Day 30", label: "When 82% of managers ship their first automated workflow" }
          ].map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-6"
            >
              <h4 className="font-serif font-medium text-5xl text-slate-900 leading-none">{m.value}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light font-serif italic">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
