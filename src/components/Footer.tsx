import { ArrowUpRight, Linkedin, Twitter, Instagram } from 'lucide-react';

const links = {
  Company:   ['About', 'Courses', 'For Teams', 'For Governments', 'Careers'],
  Resources: ['AI Diagnostics', 'Case Studies', 'Blog', 'Documentation', 'Webinars'],
  Industries:['FMCG & Consumer', 'Supply Chain', 'Manufacturing', 'Logistics', 'Retail'],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">

        {/* Top grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div>
            <div className="font-display font-semibold text-2xl mb-4 tracking-tight">
              still<span className="opacity-50">.</span>studio
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Architecting AI-native workforces for enterprise operations leaders
              across FMCG, manufacturing, and supply chain.
            </p>
            <a
              href="mailto:hello@still-studio.ai"
              className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
            >
              hello@still-studio.ai <ArrowUpRight size={12} />
            </a>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-5">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/35 mb-5">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/55 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[11px] text-white/30">© 2026 Still Studio. Architecting Operational Evolution.</span>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="text-[11px] text-white/30 hover:text-white/60 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
