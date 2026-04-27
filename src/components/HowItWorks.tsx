import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    n: '01',
    title: 'Hassle-Free Assessment',
    body: 'Book a discovery call in minutes. We conduct a role-specific AI readiness diagnostic across your team — identifying gaps before a single training hour is spent.',
  },
  {
    n: '02',
    title: 'Personalised Program',
    body: 'Every business is unique. We build a curriculum tailored to your industry and team structure. Supply chain managers get supply chain scenarios. FMCG leaders get FMCG decisions.',
  },
  {
    n: '03',
    title: 'Ongoing Partnership',
    body: 'After your live cohort we track Day 30 and Day 60 adoption. We monitor workflow changes, measure KPI shifts, and deliver board-ready ROI reports — not just certificates.',
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section ref={ref} id="how" className="bg-cream py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-semibold text-black mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Proven Process for Your Goals
          </h2>
          <p className="text-black/50 text-base max-w-xl mx-auto leading-relaxed">
            Our step-by-step approach simplifies AI adoption, delivers role-specific
            training, and drives measurable results your leadership can act on.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="bg-white rounded-[16px] p-8 card-shadow"
            >
              {/* Step number */}
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-sm mb-6">
                {i + 1}
              </div>
              <h3 className="font-display font-semibold text-2xl text-black mb-3 leading-snug">
                {step.title}
              </h3>
              <p className="text-black/50 text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
