import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, BookX, BarChart2, Users } from 'lucide-react';
import { fadeUp, scaleUp, staggerContainer } from './animations';

function CountUp({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.floor(latest))
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function ProblemSection() {
  const problemCards = [
    {
      icon: <AlertTriangle size={24} className="text-blue-600" />,
      title: "Tools deployed, nobody trained",
      body: "Licenses purchased, dashboards built, adoption near zero. The investment is already made — the skills aren't."
    },
    {
      icon: <BookX size={24} className="text-blue-600" />,
      title: "Generic training doesn't land",
      body: "Off-the-shelf AI courses teach ChatGPT basics. Your teams need scenarios built around their actual decisions."
    },
    {
      icon: <BarChart2 size={24} className="text-blue-600" />,
      title: "L&D can't prove ROI",
      body: "Completion certificates don't move leadership. You need workflow change data — not attendance logs."
    },
    {
      icon: <Users size={24} className="text-blue-600" />,
      title: "Mid-management is the bottleneck",
      body: "Executives get the vision. Frontline gets the tools. The managers in between get nothing."
    }
  ];

  return (
    <section className="bg-white py-32 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-5xl mb-24 flex flex-col items-start text-left">
          <motion.span 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8"
          >
            01 — The Workforce Friction
          </motion.span>
          <motion.h2 
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl text-slate-900 mb-10 leading-[1.0] tracking-tight"
          >
            Capabilities <span className="italic font-normal text-blue-600">stall</span> at adoption.
          </motion.h2>
          <motion.p 
            variants={fadeUp}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl font-light leading-relaxed max-w-xl font-serif italic"
          >
            Enterprises deploy tools, yet workforce readiness remains static. The friction in AI ROI isn't the technology—it's the capacity of teams to integrate it.
          </motion.p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-y border-slate-100 py-16">
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-serif text-7xl text-slate-900">
              <CountUp value={87} suffix="%" />
            </h3>
            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 bg-slate-50 rounded-full">
              ADOPTION FAILURE
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-serif text-7xl text-slate-900">
              <CountUp value={74} suffix="%" />
            </h3>
            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 bg-slate-50 rounded-full">
              UNTRAINED MANAGERS
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-serif text-7xl text-slate-900">
              <CountUp value={15} prefix="<" suffix="%" />
            </h3>
            <p className="text-slate-400 text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 bg-slate-50 rounded-full">
              USER CONFIDENCE
            </p>
          </div>
        </div>

        {/* Problem Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {problemCards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group"
            >
              <div className="text-blue-600 mb-8 opacity-30 group-hover:opacity-100 transition-opacity">
                {card.icon}
              </div>
              <h4 className="text-slate-900 font-serif text-2xl mb-4 tracking-tight">{card.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
