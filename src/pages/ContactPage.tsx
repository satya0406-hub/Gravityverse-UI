import { Mail, Phone, Clock, MessageSquare, Send, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError } from '../lib/errorHandler';
import { trackContact } from '../lib/analytics';

import { SectionHeader } from '../components/SectionHeader';

export function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [demoUrl, setDemoUrl] = useState<string | null>(null);
  const [targetRecipient, setTargetRecipient] = useState<string>('');
  const [smtpAuthError, setSmtpAuthError] = useState<string | null>(null);
  const [formStarted, setFormStarted] = useState(false);

  useEffect(() => {
    try {
      trackContact.pageOpened();
    } catch (e) {
      console.warn('Analytics contact_page_opened failed:', e);
    }
  }, []);

  const handleInputChange = (field: string, value: string) => {
    if (!formStarted) {
      setFormStarted(true);
      try {
        trackContact.formStarted();
      } catch (e) {
        console.warn('Analytics contact_form_started failed:', e);
      }
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    setSuccess(false);
    setDemoUrl(null);
    setSmtpAuthError(null);
    setError('');

    const startTime = Date.now();

    try {
      // 1. Log to Firestore Backup Archive
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        createdAt: serverTimestamp()
      }).catch(e => {
        console.warn("Firestore save bypassed:", e);
        handleFirestoreError(e, 'create', 'contacts');
      });

      // 2. Transmit Email Real-Time Message Payload to Server API
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const baseUrl = import.meta.env.BASE_URL || '';
      const fetchUrl = apiBaseUrl 
        ? `${apiBaseUrl}/api/contact`.replace(/([^:])\/+/g, '$1/')
        : `${window.location.origin}${baseUrl}/api/contact`.replace(/([^:])\/+/g, '$1/');

      const response = await fetch(fetchUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'The system was unable to dispatch your email.');
      }

      setTargetRecipient(responseData.recipient || 'support@gravityverse.in');
      if (responseData.isDemoMailer && responseData.demoInboxUrl) {
        setDemoUrl(responseData.demoInboxUrl);
      }
      if (responseData.smtpAuthError) {
        setSmtpAuthError(responseData.smtpAuthError);
      }
      
      try {
        trackContact.formSubmitted(
          'success',
          true,
          Date.now() - startTime,
          !!formData.subject,
          formData.message.length
        );
      } catch (e) {
        console.warn(e);
      }

      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStarted(false);
    } catch (err: any) {
      const errMsg = err.message || 'Transmission netcode failure.';
      setError(errMsg);
      try {
        trackContact.formSubmitted(
          'failed',
          false,
          Date.now() - startTime,
          !!formData.subject,
          formData.message.length,
          errMsg
        );
      } catch (e) {
        console.warn(e);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 sm:pt-32 pb-12 sm:pb-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-12"
        >
          <SectionHeader 
            whiteText="Get" 
            blueText="in Touch" 
            description="Have questions about our neural intelligence architecture? Our team is ready to assist you in navigating the future of AI."
          />

          <div className="space-y-4 sm:space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="flex items-start gap-4 sm:gap-6 group"
            >
              <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-brand-blue w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Support and Administration Accounts</h4>
                <p className="text-gray-300 font-medium">support@gravityverse.in</p>
                <p className="text-gray-400 text-sm mt-1">For direct inquiries, feedback, or legal notices, contact us at <span className="text-brand-blue font-semibold">support@gravityverse.in</span></p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 120, delay: 0.1 }}
              className="flex items-start gap-4 sm:gap-6 group"
            >
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-gray-400 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Response Latency</h4>
                <p className="text-gray-400">Typing in under 12 hours</p>
                <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-2 block">Standard Average</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 sm:space-y-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
            <div className="space-y-4">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Direct Name</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="John Doe" 
                className="w-full bg-transparent border-b border-white/10 py-5 focus:border-brand-blue outline-none transition-all placeholder:text-gray-800" 
              />
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Neural Email</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="john@example.com" 
                className="w-full bg-transparent border-b border-white/10 py-5 focus:border-brand-blue outline-none transition-all placeholder:text-gray-800" 
              />
            </div>
          </div>
          
          <div className="space-y-4">
             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Subject Matrix</label>
             <input 
               type="text" 
               value={formData.subject}
               onChange={(e) => handleInputChange('subject', e.target.value)}
               placeholder="Inquiry about..." 
               className="w-full bg-transparent border-b border-white/10 py-5 focus:border-brand-blue outline-none transition-all placeholder:text-gray-800" 
             />
          </div>

          <div className="space-y-4">
             <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Message Payload</label>
             <textarea 
               required
               rows={4} 
               value={formData.message}
               onChange={(e) => handleInputChange('message', e.target.value)}
               placeholder="Describe your request..." 
               className="w-full bg-transparent border-b border-white/10 py-5 focus:border-brand-blue outline-none transition-all resize-none placeholder:text-gray-800" 
             />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full btn-primary flex items-center justify-center gap-3 py-5 text-lg group"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                Transmit Message
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </>
            )}
          </button>

          {success && (
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }} 
               animate={{ opacity: 1, scale: 1 }} 
               className="p-5 bg-emerald-500/10 text-emerald-400 rounded-xl text-left text-sm border border-emerald-500/20 space-y-2 animate-fade-in"
            >
               <div className="flex items-center gap-2 font-bold text-emerald-300">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Message Saved and Transmitted</span>
               </div>
               <p className="text-xs text-gray-300 leading-relaxed pl-7">
                 Your message has been processed successfully and saved.
               </p>

               {smtpAuthError ? (
                 <div className="mt-4 pl-7 pt-4 border-t border-amber-500/10 space-y-3">
                   <div className="flex items-start gap-2 text-amber-400 font-semibold text-xs">
                     <span className="text-base leading-none">⚠️</span>
                     <div>
                       <span className="font-bold">Real SMTP Authentication Failed</span>
                       <p className="text-[11px] text-amber-500/80 font-mono mt-0.5">{smtpAuthError}</p>
                     </div>
                   </div>
                   <div className="text-xs text-gray-400 leading-relaxed space-y-2 bg-amber-500/5 p-3.5 rounded-lg border border-amber-500/10">
                     <p className="font-medium text-amber-400/90 text-[11px] uppercase tracking-wider">How to activate SMTP on Brevo:</p>
                     <ul className="list-disc pl-4 space-y-1 text-[11.5px]">
                       <li>
                         <strong className="text-gray-300">Activate Transactional SMTP:</strong> By default, SMTP is disabled on new Brevo accounts. Log in to your Brevo account, navigate to <strong className="text-amber-400">Transactional &gt; SMTP &amp; API</strong>, and make sure SMTP is active (or click "Request Activation").
                       </li>
                       <li>
                         <strong className="text-gray-300">Generate a dedicated SMTP Key:</strong> Under <strong className="text-amber-400">SMTP &amp; API &gt; SMTP</strong> tab, click <strong className="text-brand-blue">"Create a new SMTP key"</strong>. Use this key as your <code className="bg-white/5 px-1 rounded text-brand-blue">SMTP_PASS</code> password instead of your general API key or account login password.
                       </li>
                       <li>
                         <strong className="text-gray-300">Verify Sender Domain:</strong> Ensure that <code className="bg-white/5 px-1 rounded text-brand-blue">support@gravityverse.in</code> or your direct email sender is fully verified in your Brevo account dashboard under <strong className="text-amber-400">Senders &amp; IPs</strong>.
                       </li>
                     </ul>
                   </div>
                   <p className="text-[11px] text-gray-400 pl-1">
                     💡 <span className="font-semibold text-blue-400">Rerouted via Sandbox:</span> To ensure zero data loss, the message has been safely rerouted and transmitted via the developer sandbox mailer.
                   </p>
                   {demoUrl && (
                     <a 
                       href={demoUrl} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-white underline transition pl-1"
                     >
                       Inspect Sent Message in Sandbox Inbox &rarr;
                     </a>
                   )}
                 </div>
               ) : (
                 demoUrl && (
                   <div className="mt-3 pl-7 pt-2 border-t border-emerald-500/10">
                     <p className="text-[11px] text-gray-400">
                       💡 <span className="font-semibold text-amber-400">Sandbox Preview Active:</span> No production SMTP variables were detected. A real test email was processed and sent to the Ethereal test mailer.
                     </p>
                     <a 
                       href={demoUrl} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-brand-blue hover:text-white underline transition"
                     >
                       Inspect Sent Message in Ethereal Sandbox Inbox &rarr;
                     </a>
                   </div>
                 )
               )}
            </motion.div>
          )}

          {error && (
            <div className="text-red-400 text-xs text-center border border-red-500/20 bg-red-500/10 p-3 rounded-xl">
              {error}
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
}
