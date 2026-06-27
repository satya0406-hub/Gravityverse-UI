import { motion } from 'motion/react';
import { Target, Users, Zap, Award, Coffee, Code } from 'lucide-react';

export function AboutUsPage() {
  return (
    <div className="pt-20 sm:pt-32 pb-12 sm:pb-24 px-4 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-12 sm:space-y-24"
      >
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-[10px] font-black uppercase tracking-[0.3em] mb-4">
             Discover Our Story
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold tracking-tight leading-[1.1]">
            <span className="text-white">Redefining</span>
            <span className="text-brand-blue ml-2 sm:ml-4">Intelligence.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            <strong><span className="text-white">Gravity</span><span className="text-brand-blue font-semibold">Verse</span>.in</strong> is more than just an AI application—it is a premium, comprehensive neural ecosystem designed to empower human potential through verified insights, utility tools, and real-time interaction.
          </p>
        </div>

        {/* Mission/Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.15)" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="glass-card p-6 sm:p-10 space-y-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-brand-blue/10 transition-colors" />
            <Target className="w-12 h-12 text-brand-blue" />
            <h2 className="text-3xl font-bold font-serif text-white tracking-tight">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              To bridge the gap between complex legal data, real-time insights, and human understanding, providing everyone with a sophisticated AI co-pilot for their toughest questions.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -8, scale: 1.01, boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.15)" }}
            transition={{ duration: 0.6, type: "spring" }}
            className="glass-card p-6 sm:p-10 space-y-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-colors" />
            <Zap className="w-12 h-12 text-brand-blue" />
            <h2 className="text-3xl font-bold font-serif text-white tracking-tight">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              We envision a future where intelligence is decentralized and accessible, where every individual has the neural tools to navigate law, news, and creative logic with absolute clarity.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="space-y-8 sm:space-y-12">
          <div className="flex items-center gap-4">
             <div className="h-[2px] flex-grow bg-white/5" />
             <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.5em]">The Core Protocol</h3>
             <div className="h-[2px] flex-grow bg-white/5" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { icon: Award, label: 'Unmatched Quality', desc: 'Verified neural datasets' },
              { icon: Users, label: 'Human Centric', desc: 'Design for natural interaction' },
              { icon: Coffee, label: 'Always Evolving', desc: 'Continuous AI development' },
              { icon: Code, label: 'Secure Code', desc: 'Built on reliable architecture' }
            ].map((value, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -10, borderColor: "rgba(59, 130, 246, 0.35)", scale: 1.03 }}
                transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 100 }}
                className="p-6 sm:p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4 hover:border-brand-blue/20 transition-all duration-300 shadow-xl shadow-black/30"
              >
                <value.icon className="w-8 h-8 text-brand-blue mx-auto mb-2" />
                <h4 className="font-bold text-white tracking-tight">{value.label}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
          whileHover={{ boxShadow: "0 30px 60px -20px rgba(59, 130, 246, 0.1)" }}
          className="glass-card p-6 sm:p-12 text-center bg-brand-blue/5 border-brand-blue/10"
        >
          <h2 className="text-4xl font-bold font-serif text-white mb-6">Born from Innovation.</h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
            <span className="text-white">Gravity</span><span className="text-brand-blue font-semibold">Verse</span> was founded in 2024 to tackle the challenges of modern information overload. We believe that with the right neural partnership, there is no limit to what you can achieve.
          </p>
          <div className="flex items-center justify-center gap-6 saturate-0 opacity-50">
             <img src={`${import.meta.env.BASE_URL}chatbot-logo.png`} alt="GravityVerse" className="h-10 grayscale brightness-200 mt-[-10px] mb-[-10px]" />
             <div className="w-1 h-8 bg-white/10" />
             <span className="text-[10px] font-black uppercase tracking-widest text-white">Neural Archive 2.0</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
