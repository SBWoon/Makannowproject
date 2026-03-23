import React from 'react';
import { motion } from 'framer-motion';

interface LegalScreenProps {
  onAccept: () => void;
}

const LegalScreen: React.FC<LegalScreenProps> = ({ onAccept }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col max-w-md mx-auto relative px-6 py-12 bg-background"
    >
      <header className="mb-10 text-center relative">
        <div className="absolute -top-6 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="inline-flex items-center justify-center p-4 bg-primary-container/10 rounded-full mb-6">
          <span className="material-symbols-outlined text-primary text-4xl">gavel</span>
        </div>
        <h1 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight mb-2">Legal Foundations</h1>
        <p className="text-on-surface-variant text-sm px-4">Review our commitments to your culinary journey and privacy.</p>
      </header>

      <main className="flex-1 space-y-8 pb-40">
        <section className="bg-surface-container-low rounded-lg p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 -mr-8 -mt-8 rounded-full"></div>
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-primary">description</span>
            <h2 className="font-headline font-bold text-lg text-primary">TERMS OF SERVICE</h2>
          </div>
          <ol className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
            <li className="flex gap-3"><span className="font-bold text-primary min-w-[1.5rem]">1.</span> Acceptance of digital culinary terms and community standards.</li>
            <li className="flex gap-3"><span className="font-bold text-primary min-w-[1.5rem]">2.</span> User eligibility and account responsibility protocols.</li>
            <li className="flex gap-3"><span className="font-bold text-primary min-w-[1.5rem]">3.</span> Content ownership and licensing of user-submitted recipes.</li>
            <li className="flex gap-3"><span className="font-bold text-primary min-w-[1.5rem]">4.</span> Prohibited conduct and platform misuse policies.</li>
            <li className="flex gap-3"><span className="font-bold text-primary min-w-[1.5rem]">5.</span> Service availability and feature modifications.</li>
            <li className="flex gap-3"><span className="font-bold text-primary min-w-[1.5rem]">6.</span> Intellectual property rights regarding MakanNow assets.</li>
            <li className="flex gap-3"><span className="font-bold text-primary min-w-[1.5rem]">7.</span> Third-party links and external food services integration.</li>
            <li className="flex gap-3"><span className="font-bold text-primary min-w-[1.5rem]">8.</span> Termination of access and account suspension criteria.</li>
            <li className="flex gap-3"><span className="font-bold text-primary min-w-[1.5rem]">9.</span> Governing law and jurisdictional details for Malaysia.</li>
            <li className="flex gap-3"><span className="font-bold text-primary min-w-[1.5rem]">10.</span> Updates to the terms of service framework.</li>
          </ol>
        </section>

        <section className="bg-surface-container rounded-lg p-6 border-l-4 border-secondary/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-secondary">shield_person</span>
            <h2 className="font-headline font-bold text-lg text-secondary">PRIVACY POLICY</h2>
          </div>
          <ol className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
            <li className="flex gap-3"><span className="font-bold text-secondary min-w-[1.5rem]">1.</span> Types of personal data collected during onboarding.</li>
            <li className="flex gap-3"><span className="font-bold text-secondary min-w-[1.5rem]">2.</span> Usage of data for personalized recipe recommendations.</li>
            <li className="flex gap-3"><span className="font-bold text-secondary min-w-[1.5rem]">3.</span> Storage security and encryption standards.</li>
            <li className="flex gap-3"><span className="font-bold text-secondary min-w-[1.5rem]">4.</span> Cookie policy and digital tracking transparency.</li>
            <li className="flex gap-3"><span className="font-bold text-secondary min-w-[1.5rem]">5.</span> Third-party data sharing and partner collaborations.</li>
            <li className="flex gap-3"><span className="font-bold text-secondary min-w-[1.5rem]">6.</span> User rights regarding data access and deletion.</li>
            <li className="flex gap-3"><span className="font-bold text-secondary min-w-[1.5rem]">7.</span> Children's privacy and age-restricted access.</li>
            <li className="flex gap-3"><span className="font-bold text-secondary min-w-[1.5rem]">8.</span> Communication preferences and marketing opt-out.</li>
          </ol>
        </section>

        <section className="bg-error-container/20 rounded-lg p-6 border border-tertiary-container/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-tertiary">warning</span>
            <h2 className="font-headline font-bold text-lg text-tertiary uppercase tracking-wide">Risk Disclaimer</h2>
          </div>
          <ol className="space-y-4 text-sm text-on-surface-variant leading-relaxed">
            <li className="flex gap-3"><span className="font-bold text-tertiary min-w-[1.5rem]">1.</span> Ingredient substitution risks and flavor variations.</li>
            <li className="flex gap-3"><span className="font-bold text-tertiary min-w-[1.5rem]">2.</span> Allergen information and cross-contamination warnings.</li>
            <li className="flex gap-3"><span className="font-bold text-tertiary min-w-[1.5rem]">3.</span> Nutritional data accuracy and third-party estimates.</li>
            <li className="flex gap-3"><span className="font-bold text-tertiary min-w-[1.5rem]">4.</span> Kitchen safety and heat-related cooking hazards.</li>
            <li className="flex gap-3"><span className="font-bold text-tertiary min-w-[1.5rem]">5.</span> Food storage and hygiene recommendation limits.</li>
            <li className="flex gap-3"><span className="font-bold text-tertiary min-w-[1.5rem]">6.</span> User-generated content verification responsibilities.</li>
            <li className="flex gap-3"><span className="font-bold text-tertiary min-w-[1.5rem]">7.</span> Limitation of liability for culinary outcomes.</li>
            <li className="flex gap-3"><span className="font-bold text-tertiary min-w-[1.5rem]">8.</span> Geographic relevance of specific cooking techniques.</li>
            <li className="flex gap-3"><span className="font-bold text-tertiary min-w-[1.5rem]">9.</span> Medical advice disclaimer for health-based recipes.</li>
          </ol>
        </section>
      </main>

      <section className="fixed bottom-0 left-0 right-0 p-6 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/10 shadow-[0_-12px_32px_rgba(43,23,0,0.06)] max-w-md mx-auto rounded-t-lg z-50">
        <div className="mb-6 space-y-1">
          <p className="text-[13px] font-medium text-on-surface leading-snug">
            Before using MakanNow, you must agree to: 
            <span className="text-primary font-bold">Terms</span>, 
            <span className="text-secondary font-bold">Privacy Policy</span>, and 
            <span className="text-tertiary font-bold">Risk Disclaimer</span>.
          </p>
          <p className="text-[11px] text-on-surface-variant opacity-80 italic">
            If you do NOT agree, please kindly do not use this app.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-surface-variant text-on-surface-variant font-bold py-4 rounded-xl hover:bg-outline-variant/30 transition-all active:scale-95 duration-150">
            Decline
          </button>
          <button 
            onClick={onAccept}
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-95 duration-150"
          >
            Accept
          </button>
        </div>
      </section>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-[10%] -right-[20%] w-[80%] h-[40%] bg-secondary-fixed/20 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-[5%] -left-[10%] w-[60%] h-[30%] bg-primary-fixed/20 blur-[100px] rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default LegalScreen;
