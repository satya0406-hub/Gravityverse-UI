import { Link } from 'react-router-dom';
import { Rocket, Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#02050e] border-t border-white/5 py-12 sm:py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 relative z-10">
        <div className="md:col-span-2 space-y-4 sm:space-y-6 text-left">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-blue-500/10 transition-transform group-hover:scale-110 border border-white/10 shrink-0">
              <img 
                src={`${import.meta.env.BASE_URL}chatbot-logo.png`} 
                alt="GravityVerse" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://ui-avatars.com/api/?name=G&background=3b82f6&color=fff';
                }}
              />
            </div>
            <span className="text-lg font-serif font-black tracking-wider text-slate-100 uppercase">Gravity<span className="text-brand-blue">Verse</span></span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            The next generation of AI-driven legal intelligence, real-time media synthesis, and creative utilities. 
            Empowering professionals globally with high-precision instruments and elite user interfaces.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/[0.02] border border-white/5 rounded-full hover:bg-brand-blue/15 transition-all text-gray-400 hover:text-brand-blue hover:scale-110">
              <Twitter className="w-4.5 h-4.5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/[0.02] border border-white/5 rounded-full hover:bg-brand-blue/15 transition-all text-gray-400 hover:text-brand-blue hover:scale-110">
              <Github className="w-4.5 h-4.5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/[0.02] border border-white/5 rounded-full hover:bg-brand-blue/15 transition-all text-gray-400 hover:text-brand-blue hover:scale-110">
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/[0.02] border border-white/5 rounded-full hover:bg-brand-blue/15 transition-all text-gray-400 hover:text-brand-blue hover:scale-110">
              <Instagram className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        <div className="text-left">
          <h4 className="text-slate-200 text-xs font-black uppercase tracking-[0.2em] mb-4 sm:mb-6">Platform Services</h4>
          <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
            <li><Link to="/chat" className="hover:text-brand-blue hover:underline decoration-brand-blue/40 transition-colors">Neural Chat Assistant</Link></li>
            <li><Link to="/blog" className="hover:text-brand-blue hover:underline decoration-brand-blue/40 transition-colors">Premium Matrix Blog</Link></li>
            <li><Link to="/news" className="hover:text-brand-blue hover:underline decoration-brand-blue/40 transition-colors">Latest Synthetic News</Link></li>
            <li><Link to="/games" className="hover:text-brand-blue hover:underline decoration-brand-blue/40 transition-colors">Arcade Playgrounds</Link></li>
            <li><Link to="/gpa" className="hover:text-brand-blue hover:underline decoration-brand-blue/40 transition-colors">GPA+ Terminal</Link></li>
          </ul>
        </div>

        <div className="text-left">
          <h4 className="text-slate-200 text-xs font-black uppercase tracking-[0.2em] mb-4 sm:mb-6">Corporate & Legal</h4>
          <ul className="space-y-3 text-xs sm:text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-brand-blue hover:underline decoration-brand-blue/40 transition-colors">About Mission</Link></li>
            <li><Link to="/contact" className="hover:text-brand-blue hover:underline decoration-brand-blue/40 transition-colors">Contact Hub</Link></li>
            <li><Link to="/privacy" className="hover:text-brand-blue hover:underline decoration-brand-blue/40 transition-colors">Privacy Charter</Link></li>
            <li><Link to="/terms" className="hover:text-brand-blue hover:underline decoration-brand-blue/40 transition-colors">Terms of Action</Link></li>
            <li><Link to="/disclaimer" className="hover:text-brand-blue hover:underline decoration-brand-blue/40 transition-colors">Legal Disclaimers</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-12 sm:mt-20 pt-6 sm:pt-8 border-t border-white/5 text-center text-gray-500 text-xs relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} GravityVerse AI. All rights reserved.</p>
        <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">secure_node_live // latency_optimized</p>
      </div>
    </footer>
  );
}
