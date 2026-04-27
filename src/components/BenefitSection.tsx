import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Priya Mehta',
    role: 'Demand Planning Manager',
    quote: 'I used to wait 72 hours for my analyst to run a scenario. After Still Studio I did it myself in 20 minutes before the call ended.',
    location: 'Mumbai, India',
    service: 'S&OP Training',
    initials: 'PM',
    color: 'bg-teal-500',
  },
  {
    name: 'Rahul Sharma',
    role: 'Plant Manager, Auto Ancillary',
    quote: "Before this program I was always explaining stoppages after they happened. Now I'm catching two or three signals a week before they become problems.",
    location: 'Pune, India',
    service: 'Predictive Maintenance',
    initials: 'RS',
    color: 'bg-amber-500',
  },
  {
    name: 'Anita Nair',
    role: 'Category Manager, Retail FMCG',
    quote: 'My category review used to take two weeks of back-and-forth with analytics. I ran the last one myself with AI in an afternoon.',
    location: 'Bengaluru, India',
    service: 'Trade Performance',
    initials: 'AN',
    color: 'bg-rose-500',
  },
  {
    name: 'Vikram Joshi',
    role: 'Supply Chain Head, D2C Brand',
    quote: "I had six people who thought AI was a threat. By week four, three of them were showing the others new things they'd figured out.",
    location: 'Delhi, India',
    service: 'AI Adoption',
    initials: 'VJ',
    color: 'bg-indigo-500',
  },
  {
    name: 'Sunita Kapoor',
    role: 'Head of L&D, Manufacturing',
    quote: "Still Studio gave me a 12-page report showing exactly what changed, with numbers. I shared it with the board. That's never happened before.",
    location: 'Chennai, India',
    service: 'L&D ROI',
    initials: 'SK',
    color: 'bg-violet-500',
  },
  {
    name: 'Arjun Patel',
    role: 'VP Operations, FMCG',
    quote: "Three months after the cohort ended, a new AI feature dropped. My team figured it out themselves in a week. They didn't need us to organise training.",
    location: 'Ahmedabad, India',
    service: 'Continuous Adoption',
    initials: 'AP',
    color: 'bg-emerald-500',
  },
];

export default function BenefitSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section ref={ref} id="testimonials" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display font-semibold text-black mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            What Our Operational Leaders Say
          </h2>
          <p className="text-black/50 text-base max-w-xl mx-auto leading-relaxed">
            We've helped enterprises of all sizes unlock AI adoption, upskill their
            operations teams, and deliver lasting ROI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="bg-cream rounded-[16px] p-6 flex flex-col gap-4 card-shadow"
            >
              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-black leading-tight">{t.name}</div>
                  <div className="text-xs text-black/45 leading-tight">{t.role}</div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="font-display text-black/80 text-[1.05rem] leading-snug flex-1">
                "{t.quote}"
              </blockquote>

              {/* Tags */}
              <div className="flex items-center gap-2 pt-2 border-t border-black/8">
                <span className="text-[10px] bg-white text-black/50 px-2.5 py-1 rounded-[1000px] font-semibold">
                  {t.location}
                </span>
                <span className="text-[10px] bg-primary/10 text-primary px-2.5 py-1 rounded-[1000px] font-semibold">
                  {t.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
