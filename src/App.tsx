import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IndustrySolutions from './components/IndustrySolutions';
import ProblemSection from './components/ProblemSection';
import PlatformSection from './components/PlatformSection';
import HowItWorks from './components/HowItWorks';
import BenefitSection from './components/BenefitSection';
import CaseStudies from './components/CaseStudies';
import CourseCatalogue from './components/CourseCatalogue';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import IndustryPage from './pages/IndustryPage';

function HomePage() {
  return (
    <main>
      {/* pb-20 creates space for the fixed bottom pill nav */}
      <Hero />
      <IndustrySolutions />
      <ProblemSection />

      {/* ── CTA Strip ── */}
      <section className="bg-cream py-14 px-6 md:px-12 border-y border-black/6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="font-display font-semibold text-black text-3xl md:text-4xl leading-snug max-w-lg">
            Ready to train your enterprise team?
          </h3>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowUpRight size={15} />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 bg-sage text-primary font-semibold text-sm px-6 py-3 rounded-[10px] hover:opacity-80 transition-opacity"
            >
              Our Curriculum →
            </a>
          </div>
        </div>
      </section>

      <PlatformSection />
      <HowItWorks />
      <BenefitSection />
      <CaseStudies />
      <CourseCatalogue />
      <BlogSection />

      {/* ── Final CTA ── */}
      <section className="bg-primary py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">
            Get Started
          </span>
          <h2
            className="font-display font-semibold text-white leading-tight max-w-3xl"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            Ready to build your<br />
            <em className="not-italic text-sage">AI-native</em> workforce?
          </h2>
          <p className="text-white/55 text-lg max-w-md leading-relaxed">
            Join 1,400+ operational leaders already deploying autonomous
            AI capabilities across FMCG, manufacturing, and supply chain.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-sm px-8 py-3.5 rounded-[10px] hover:opacity-90 transition-opacity group"
            >
              Request a Demo
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#courses"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold text-sm px-8 py-3.5 rounded-[10px] hover:bg-white/20 transition-colors"
            >
              Explore Curriculum
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/"                element={<HomePage />} />
          <Route path="/industry/:slug"  element={<IndustryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
