import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, BadgeCheck, TrendingUp, Zap, BarChart3, CheckCircle2 } from 'lucide-react';

/* ── Mini sparkline SVG ── */
function Sparkline({ color = '#0E3A27', points = '0,40 20,32 40,36 60,18 80,22 100,8' }) {
  return (
    <svg viewBox="0 0 100 48" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      <polygon
        fill={`url(#grad-${color.replace('#', '')})`}
        points={`0,48 ${points} 100,48`}
      />
    </svg>
  );
}

/* ── Donut ring SVG ── */
function DonutRing({ pct = 82, size = 64, stroke = 6, color = '#0E3A27' }) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#E6EECD" strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ── Bar chart mini ── */
function BarMini({ bars = [55, 72, 48, 88, 63, 94] }: { bars?: number[] }) {
  const max = Math.max(...bars);
  return (
    <div className="flex items-end gap-1 h-12 w-full">
      {bars.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-[2px]"
          style={{
            height: `${(v / max) * 100}%`,
            background: i === bars.length - 1 ? '#0E3A27' : '#E6EECD',
          }}
        />
      ))}
    </div>
  );
}

const avatarColors = ['bg-amber-400', 'bg-teal-400', 'bg-rose-400', 'bg-indigo-400'];

/* float animations via inline style keyframes trick — we use tailwind animate + CSS vars */
const floatVariants = [
  { y: [0, -10, 0], duration: 4.2 },
  { y: [0, -7, 0],  duration: 5.1 },
  { y: [0, -12, 0], duration: 3.8 },
  { y: [0, -8, 0],  duration: 4.7 },
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center pt-20 pb-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ── Left: Text ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-cream rounded-[1000px] px-4 py-2 mb-8"
          >
            <BadgeCheck size={14} className="text-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-[0.18em]">
              AI-Native Enterprise Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display font-semibold text-black leading-[1.08] tracking-[-0.01em] mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            Operations teams<br />
            that{' '}
            <em className="not-italic text-primary">run on AI.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-black/55 text-lg leading-relaxed mb-10 max-w-md"
          >
            Role-specific AI upskilling and autonomous multi-agent systems for
            operational leaders in FMCG, manufacturing, and supply chain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity group"
            >
              Get Started
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-sage text-primary font-semibold text-sm px-6 py-3 rounded-[10px] hover:opacity-80 transition-opacity"
            >
              Our Services
              <ArrowRight size={15} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <div className="flex items-center">
              {[1,2,3,4,5].map(i => (
                <span key={i} className="text-amber-400 text-lg leading-none">★</span>
              ))}
            </div>
            <span className="text-sm text-black/50">Trusted by 1,400+ operational leaders</span>
          </motion.div>
        </div>

        {/* ── Right: Animated dashboard collage ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative select-none"
          style={{ height: '540px' }}
        >

          {/* Background gradient blob */}
          <div
            className="absolute inset-0 rounded-[24px]"
            style={{
              background: 'radial-gradient(ellipse 80% 70% at 55% 50%, #E6EECD 0%, #F6F4ED 55%, transparent 100%)',
            }}
          />

          {/* ── Card 1: AI Adoption Rate (top-left, large) ── */}
          <motion.div
            className="absolute top-6 left-0 bg-white rounded-[16px] p-5 card-shadow"
            style={{ width: '200px' }}
            animate={{ y: floatVariants[0].y }}
            transition={{ duration: floatVariants[0].duration, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">AI Adoption</span>
              <TrendingUp size={12} className="text-primary" />
            </div>
            <div className="font-display font-semibold text-3xl text-black leading-tight">82%</div>
            <div className="text-[10px] text-black/40 mb-3">Day-30 retention rate</div>
            <div className="h-10">
              <Sparkline color="#0E3A27" points="0,40 15,30 30,33 50,14 70,18 85,6 100,8" />
            </div>
            <div className="mt-2 flex items-center gap-1">
              <span className="text-[10px] font-semibold text-primary">↑ +14% vs last cohort</span>
            </div>
          </motion.div>

          {/* ── Card 2: Active Agents (top-right) ── */}
          <motion.div
            className="absolute top-4 right-0 bg-primary text-white rounded-[16px] p-5 card-shadow"
            style={{ width: '178px' }}
            animate={{ y: floatVariants[1].y }}
            transition={{ duration: floatVariants[1].duration, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Live Agents</span>
              <Zap size={12} className="text-live" />
            </div>
            <div className="font-display font-semibold text-3xl leading-tight">247</div>
            <div className="text-[10px] text-white/50 mb-4">Autonomous agents deployed</div>
            <div className="flex flex-col gap-1.5">
              {['Demand Forecast', 'Shelf Audit', 'Route Opt.'].map((label, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-live" />
                  <span className="text-[10px] text-white/60">{label}</span>
                  <span className="ml-auto text-[10px] text-white/40">LIVE</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Card 3: Supply Chain Efficiency (center) ── */}
          <motion.div
            className="absolute top-[175px] left-[60px] bg-white rounded-[16px] p-5 card-shadow"
            style={{ width: '220px' }}
            animate={{ y: floatVariants[2].y }}
            transition={{ duration: floatVariants[2].duration, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <DonutRing pct={78} size={52} stroke={5} color="#0E3A27" />
              <div>
                <div className="font-display font-semibold text-xl text-black leading-none">78%</div>
                <div className="text-[10px] text-black/40 leading-snug mt-0.5">OpEx efficiency<br />improvement</div>
              </div>
            </div>
            <div className="pt-3 border-t border-black/6">
              <BarMini bars={[48, 60, 55, 72, 68, 88]} />
              <div className="flex justify-between mt-1">
                <span className="text-[9px] text-black/30">Jan</span>
                <span className="text-[9px] text-black/30">Jun</span>
              </div>
            </div>
          </motion.div>

          {/* ── Card 4: Completed tasks (bottom-left) ── */}
          <motion.div
            className="absolute bottom-[60px] left-0 bg-white rounded-[16px] p-4 card-shadow"
            style={{ width: '190px' }}
            animate={{ y: floatVariants[3].y }}
            transition={{ duration: floatVariants[3].duration, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 size={13} className="text-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/35">Program KPIs</span>
            </div>
            {[
              { label: 'Modules completed', pct: 94 },
              { label: 'Certification rate', pct: 87 },
              { label: 'Tool adoption',     pct: 82 },
            ].map(({ label, pct }) => (
              <div key={label} className="mb-2 last:mb-0">
                <div className="flex justify-between mb-0.5">
                  <span className="text-[10px] text-black/50">{label}</span>
                  <span className="text-[10px] font-semibold text-black/70">{pct}%</span>
                </div>
                <div className="h-1 bg-cream rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── Card 5: Verified outcomes (bottom-right) ── */}
          <motion.div
            className="absolute bottom-[55px] right-0 bg-cream rounded-[16px] p-4 card-shadow"
            style={{ width: '172px' }}
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/35 mb-3">Verified ROI</div>
            {[
              { val: '3.2×', label: 'Return on training' },
              { val: '−40%', label: 'Unplanned downtime' },
              { val: '+22%', label: 'Supply chain efficiency' },
            ].map(({ val, label }) => (
              <div key={label} className="flex items-center gap-2 mb-2 last:mb-0">
                <CheckCircle2 size={12} className="text-primary shrink-0" />
                <div>
                  <div className="font-display font-semibold text-sm text-black leading-none">{val}</div>
                  <div className="text-[9px] text-black/40 leading-tight">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── Floating avatars pill (center-bottom) ── */}
          <motion.div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-[1000px] px-4 py-2.5 card-shadow flex items-center gap-2.5 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex -space-x-2">
              {avatarColors.map((c, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="text-xs font-semibold text-black leading-tight">Join 1,400+</div>
              <div className="text-[10px] text-black/45 leading-tight">operational leaders</div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
