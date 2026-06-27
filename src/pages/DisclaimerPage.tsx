import { motion } from 'motion/react';
import { AlertTriangle, ShieldCheck, HelpCircle, HardDrive, Cpu, Terminal } from 'lucide-react';

export function DisclaimerPage() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-serif font-bold tracking-tight">
            <span className="text-white">Legal</span>
            <span className="text-brand-blue ml-3">Disclaimer</span>
          </h1>
          <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Effective date: June 23, 2026</p>
          <div className="w-12 h-1 bg-brand-blue mx-auto rounded-full mt-6" />
        </div>

        <div className="glass-card p-8 md:p-12 space-y-8 leading-relaxed">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-brand-blue mb-2">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl font-bold font-serif text-white">General Information Disclaimer</h2>
            </div>
            <p className="text-gray-300">
              All information provided on <strong>GravityVerse.in</strong> (the "Website") is publised in good faith and for general informational and utility purposes only. GravityVerse does not make any warranties about the completeness, absolute reliability, or absolute accuracy of this information. Any action you take upon the information you find on this website is strictly at your own risk.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/5">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-blue">
                <Cpu className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-white">AI Assistant & Generative Content</h3>
              </div>
              <p className="text-sm text-gray-400">
                Our platform features real-time interactions powered by artificial intelligence models. AI-generated responses (including answers, translations, and suggestions) represent simulation algorithms and should not be treated as professional, financial, or legal advice.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-blue">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-white">AdSense & Third Party Links</h3>
              </div>
              <p className="text-sm text-gray-400">
                You can visit external websites by following hyperlinks to such sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these third-party portals.
              </p>
            </div>
          </div>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-brand-blue mb-2">
              <Terminal className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl font-bold font-serif text-white">Calculator & Velocity Tool Disclaimers</h2>
            </div>
            <p className="text-gray-300">
              Our embedded utility tools, including the <strong>GPA + Calculator</strong> and the <strong>Speed Test Tool</strong>, are designed to execute standard mathematical formulas and WebSockets benchmarks locally.
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 text-sm">
              <li>
                <strong>GPA Calculations:</strong> Standard calculation frameworks represent standard college models. Your official educational institution's calculation methodologies may differ slightly.
              </li>
              <li>
                <strong>Network Metrics:</strong> Our network speed test determines instantaneous bandwidth latency locally in the browser buffer and should not be used as official telecom proof or performance guarantees.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-brand-blue mb-2">
              <HelpCircle className="w-6 h-6 text-amber-500" />
              <h2 className="text-2xl font-bold font-serif text-white">Consent and Confirmation</h2>
            </div>
            <p className="text-gray-300 text-sm">
              By using our website, you hereby consent to our disclaimer and agree to its terms. If you do not support our legal parameters, you should immediately cease utilizing the tools.
            </p>
            <p className="text-xs text-gray-500">
              Updates to this document will be prominently posted here and will reflect instantly on the operational systems of GravityVerse.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
