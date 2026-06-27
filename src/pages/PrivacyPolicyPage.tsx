import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, Bell, Globe } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-serif font-bold tracking-tight">
            <span className="text-white">Privacy</span>
            <span className="text-brand-blue ml-3">Policy</span>
          </h1>
          <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Last Updated: April 23, 2026</p>
          <div className="w-12 h-1 bg-brand-blue mx-auto rounded-full mt-6" />
        </div>

        <div className="glass-card p-8 md:p-12 space-y-8 leading-relaxed">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-brand-blue mb-2">
              <Shield className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-serif text-white">Introduction</h2>
            </div>
            <p className="text-gray-300">
              At GravityVerse, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-driven platform. We are committed to protecting your personal data and your right to privacy.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-white/5">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-blue">
                <Lock className="w-5 h-5" />
                <h3 className="font-bold text-white">Data Security</h3>
              </div>
              <p className="text-sm text-gray-400">
                We employ industry-standard encryption and security protocols to ensure your data remains confidential and protected from unauthorized access.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-blue">
                <Eye className="w-5 h-5" />
                <h3 className="font-bold text-white">Transparency</h3>
              </div>
              <p className="text-sm text-gray-400">
                We are clear about what data we collect. Most of your interactions are processed in real-time and only stored at your explicit request.
              </p>
            </div>
          </div>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-brand-blue mb-2">
              <FileText className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-serif text-white">Information We Collect</h2>
            </div>
            <p className="text-gray-300">
              We collect information that you provide directly to us, such as when you create an account, participate in a chat, or contact support. This may include:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 text-sm">
              <li>Contact information (such as name and email address).</li>
              <li>Profile information and preferences.</li>
              <li>Content of your conversations with our AI Assistant.</li>
              <li>Log data and device information (IP address, browser type).</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-brand-blue mb-2">
              <Shield className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-serif text-white">Cookies and Google AdSense Policy (Mandatory Disclosure)</h2>
            </div>
            <p className="text-gray-300">
              To support and sustain our free AI-powered web services, we may display third-party advertisements on our platform. Please read the following important disclaimers carefully:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 text-sm">
              <li>
                <strong>Third-Party Vendor Cookies:</strong> Third-party vendors, including Google, use cookies to serve ads based on some of your prior visits to GravityVerse or other websites on the Internet.
              </li>
              <li>
                <strong>Google DoubleClick / DART Cookies:</strong> Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visits to our site and/or other sites on the Internet.
              </li>
              <li>
                <strong>Opting Out of Personalized Advertising:</strong> You may easily choose to opt out of personalized interest-based advertising by visiting the official Google Ads Settings page at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">adssettings.google.com</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting the Network Advertising Initiative at <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">www.aboutads.info</a>.
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              By using our service, you agree to the deployment of strictly necessary cookies and analytics cookies relevant to basic site operations unless you disable them in your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-brand-blue mb-2">
              <Bell className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-serif text-white">How We Use Your Data</h2>
            </div>
            <p className="text-gray-300">
              Your data is used solely to enhance your experience on GravityVerse. We use it to:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2 text-sm">
              <li>Provide, maintain, and improve our services.</li>
              <li>Personalize your experience with our AI Assistant.</li>
              <li>Develop new features and research AI improvements.</li>
              <li>Communicate with you about updates and security.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-brand-blue mb-2">
              <Globe className="w-6 h-6" />
              <h2 className="text-2xl font-bold font-serif text-white">Contact Us</h2>
            </div>
            <p className="text-gray-300">
              If you have any questions or concerns about this Privacy Policy, please contact our data protection team via the contact form or email us directly at support@gravityverse.in.
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
