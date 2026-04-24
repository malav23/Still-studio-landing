export default function Footer() {
  return (
    <footer className="bg-white pt-32 pb-12 text-black/30 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Logo & About */}
          <div className="col-span-1 lg:col-span-1 flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shrink-0">
                 <div className="w-3 h-3 bg-white/20 blur-[2px] rounded-full"></div>
              </div>
              <span className="text-black font-bold text-lg tracking-tighter uppercase">
                Still<span className="text-black/30">studio</span>
              </span>
            </div>
            <p className="text-[13px] leading-relaxed max-w-xs font-light font-serif italic text-black/50">
              Practical, role-specific AI upskilling for operational leaders. Built for the people who run the world's most complex industries.
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-black font-bold text-[10px] mb-8 uppercase tracking-[0.3em]">Company</h4>
            <ul className="space-y-4 text-[13px] font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-black transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Solutions</a></li>
              <li><a href="#" className="hover:text-black transition-colors">For Teams</a></li>
              <li><a href="#" className="hover:text-black transition-colors">For Governments</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-black font-bold text-[10px] mb-8 uppercase tracking-[0.3em]">Resources</h4>
            <ul className="space-y-4 text-[13px] font-bold uppercase tracking-widest">
              <li><a href="#" className="hover:text-black transition-colors">AI Diagnostics</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-black font-bold text-[10px] mb-8 uppercase tracking-[0.3em]">Get in Touch</h4>
            <ul className="space-y-4 text-[13px] font-serif italic">
              <li><a href="#" className="hover:text-black transition-colors text-black/60">contact@stillstudio.ai</a></li>
              <li><a href="#" className="hover:text-black transition-colors text-black/60">Book a Demo</a></li>
              <li><a href="#" className="hover:text-black transition-colors text-black/60">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase">
          <div className="flex gap-8">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
          <p className="opacity-40">© 2026 Still Studio. Architecting Operational Evolution.</p>
        </div>
      </div>
    </footer>
  );
}
