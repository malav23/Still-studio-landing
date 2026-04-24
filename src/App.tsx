/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BenefitSection from './components/BenefitSection';
import ProblemSection from './components/ProblemSection';
import PlatformSection from './components/PlatformSection';
import IndustrySolutions from './components/IndustrySolutions';
import CourseCatalogue from './components/CourseCatalogue';
import HowItWorks from './components/HowItWorks';
import CaseStudies from './components/CaseStudies';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import IndustryPage from './pages/IndustryPage';

function HomePage() {
  return (
    <div className="md:h-screen md:overflow-y-scroll md:snap-y md:snap-mandatory h-auto">
      <div className="md:snap-start h-auto md:min-h-screen"><Hero /></div>
      <div className="md:snap-start h-auto md:min-h-screen flex items-center justify-center py-20 md:py-0"><ProblemSection /></div>
      <div className="md:snap-start h-auto md:min-h-screen flex items-center justify-center py-20 md:py-0"><BenefitSection /></div>
      <div className="md:snap-start h-auto md:min-h-screen flex items-center justify-center py-20 md:py-0"><CaseStudies /></div>
      <div className="md:snap-start h-auto md:min-h-screen flex items-center justify-center py-20 md:py-0"><PlatformSection /></div>
      <div className="md:snap-start h-auto md:min-h-screen flex items-center justify-center py-20 md:py-0"><IndustrySolutions /></div>
      <div className="md:snap-start h-auto md:min-h-screen flex items-center justify-center py-20 md:py-0"><HowItWorks /></div>
      <div className="md:snap-start h-auto md:min-h-screen flex items-center justify-center py-20 md:py-0"><CourseCatalogue /></div>
      <div className="md:snap-start h-auto md:min-h-screen flex items-center justify-center py-20 md:py-0 text-slate-900"><BlogSection /></div>
      
      {/* Pre-footer CTA */}
      <div className="md:snap-start h-auto md:min-h-screen flex flex-col">
        <section className="bg-white flex-grow flex flex-col justify-center text-center px-6 border-t border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-slate-100"></div>
          
          <div className="max-w-6xl mx-auto flex flex-col gap-12 items-center relative z-10">
            <span className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase">
              04 — TERMINATE STAGNATION
            </span>
            <h2 className="font-serif font-medium text-6xl md:text-9xl text-slate-900 leading-[0.9] tracking-tight">
              Architect Your<br/>
              <span className="italic font-normal text-blue-600">Evolution</span>
            </h2>
            <p className="text-slate-500 text-xl md:text-3xl max-w-2xl font-light font-serif italic">
              Join the 1,400+ operational leaders already deploying autonomous capabilities across their workforce.
            </p>
            
            <div className="mt-12">
              <button
                  className="w-[200px] h-[200px] rounded-full border border-slate-200 flex items-center justify-center group cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-700 bg-slate-50 shadow-xl shadow-blue-900/5"
              >
                  <span className="text-[12px] font-bold uppercase tracking-widest text-center leading-relaxed">Register for<br/>Next Cohort</span>
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/industry/:slug" element={<IndustryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
