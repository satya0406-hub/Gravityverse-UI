import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gv-cookie-consent');
    if (!consent) {
      // Show consent banner after a short delay for a premium feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gv-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('gv-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="cookie-consent-container"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md z-50 bg-[#070b16]/95 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-4 text-left"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                <Cookie className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm uppercase tracking-wider">Cookie & Privacy Consent</h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">AdSense & GDPR Compliant</p>
              </div>
            </div>
            <button 
              id="close-cookie-banner"
              onClick={() => setIsVisible(false)} 
              className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed">
            We use cookies to personalize content and ads (including third-party ads like Google AdSense), to provide social media features, and to analyze our website traffic. 
            By clicking <strong className="text-white">"Accept All"</strong>, you consent to our use of cookies in accordance with our updated <Link to="/privacy" className="text-brand-blue hover:underline font-semibold inline-flex items-center gap-0.5">Privacy Policy <ArrowRight className="w-2.5 h-2.5" /></Link>.
          </p>

          <div className="flex items-center gap-2.5 justify-end mt-2 pt-2 border-t border-white/5">
            <button
              id="decline-cookies"
              onClick={handleDecline}
              className="px-4 py-2 hover:bg-white/5 text-slate-400 hover:text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all"
            >
              Customize
            </button>
            <button
              id="accept-cookies"
              onClick={handleAccept}
              className="px-5 py-2.5 bg-brand-blue hover:bg-blue-600 text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-500/10 active:scale-95"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
