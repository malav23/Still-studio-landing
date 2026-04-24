import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, TrendingUp, Cpu, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const industryData: Record<string, any> = {
  'fmcg': {
    title: 'FMCG & Consumer Goods',
    subtitle: 'Agility in high-volume, thin-margin environments.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1548',
    description: 'In the fast-moving consumer goods sector, the gap between demand forecasting and fulfillment is where margins are won or lost. AI integration allows teams to move from reactive stocking to proactive demand sensing.',
    importance: 'With rising input costs and unpredictable consumer behavior, FMCG leaders must leverage AI to optimize trade promotions, reduce SKU complexity, and automate vendor negotiations.',
    impacts: [
      { title: '40% Reduction in Stock-outs', desc: 'Predictive modeling identifies demand spikes before they hit the warehouse.' },
      { title: 'Faster Time-to-Market', desc: 'AI-assisted packaging design and regulatory compliance speed up product launches.' },
      { title: 'Dynamic Pricing Control', desc: 'Automated competitive tracking allows for real-time margin protection.' }
    ]
  },
  'supply-chain': {
    title: 'Supply Chain & Logistics',
    subtitle: 'From visibility to automated resilience.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1548',
    description: 'Global logistics is shifting from "Just-in-Time" to "Just-in-Case." We train leaders to build resilient, AI-powered networks that can heal themselves during disruptions.',
    importance: 'Traditional logistics software is static. AI enables dynamic route optimization, autonomous freight matching, and predictive maintenance for multi-modal networks.',
    impacts: [
      { title: '15% Fuel Efficiency Gain', desc: 'Route optimization that accounts for real-time weather and port congestion.' },
      { title: 'End-to-End Visibility', desc: 'Natural language queries to track thousands of shipments across different carriers.' },
      { title: 'Automated Procurement', desc: 'LLMs handling 80% of routine vendor communications and rate inquiries.' }
    ]
  },
  'manufacturing': {
    title: 'Advanced Manufacturing',
    subtitle: 'The intelligent production floor.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1548',
    description: 'Industry 4.0 has collected data for a decade. We teach your shop-floor managers how to actually use that data to reduce downtime and improve yield via local intelligence.',
    importance: 'Upskilling the manufacturing workforce is critical to bridge the labor gap. AI helps preserve institutional knowledge by digitizing expert operator techniques into machine-callable workflows.',
    impacts: [
      { title: '30% Lower Maintenance Costs', desc: 'Acoustic sensing and computer vision predicting failure cycles.' },
      { title: 'Zero-Defect Quality Control', desc: 'Real-time vision systems catching anomalies that human eyes miss at scale.' },
      { title: 'Optimized Energy Usage', desc: 'Smart algorithms adjusting machine loads based on peak utility pricing.' }
    ]
  }
};

export default function IndustryPage() {
  const { slug } = useParams();
  const data = industryData[slug || 'fmcg'];

  if (!data) return <div className="p-20 text-center">Industry not found.</div>;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Link to="/" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-blue-600 mb-12 transition-colors">
            <ArrowLeft size={14} /> Back to Home
          </Link>

          <header className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-6"
            >
              <h1 className="text-slate-900 font-serif text-6xl md:text-8xl leading-tight tracking-tight">
                {data.title.split(' & ').map((part: string, i: number) => (
                  <span key={i}>
                    {i > 0 && <span className="italic font-normal text-blue-600 block md:inline"> & {part}</span>}
                    {i === 0 && part}
                  </span>
                ))}
              </h1>
              <p className="text-slate-500 text-xl font-serif italic max-w-2xl">{data.subtitle}</p>
            </motion.div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl shadow-blue-900/10"
            >
              <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex flex-col justify-center gap-8 text-lg font-light leading-relaxed font-serif italic text-slate-600">
              <p>{data.description}</p>
              <p className="text-slate-400">{data.importance}</p>
            </div>
          </div>

          <section className="mb-32">
            <div className="mb-12">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4 block">Strategic Outcomes</span>
              <h2 className="text-slate-900 font-serif text-4xl">Operational Impact</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.impacts.map((impact: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col gap-6"
                >
                   <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-2xl text-blue-600">
                      {i === 0 ? <TrendingUp size={24} /> : i === 1 ? <Globe size={24} /> : <Cpu size={24} />}
                   </div>
                   <h3 className="text-2xl font-serif text-slate-900">{impact.title}</h3>
                   <p className="text-sm font-light leading-relaxed text-slate-500 font-serif italic">{impact.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="p-16 rounded-[40px] bg-blue-600 text-white flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="max-w-xl flex flex-col gap-6">
                <h2 className="text-4xl md:text-5xl font-serif tracking-tight">Ready to upskill your {data.title.toLowerCase()} leadership?</h2>
                <p className="text-blue-100 font-serif italic italic text-xl">Custom cohorts starting next month. Secure your region's roadmap.</p>
             </div>
             <button className="whitespace-nowrap px-10 h-16 bg-white text-blue-600 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                Request Strategy Session
             </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
