import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../AuthContext';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, onTabChange }) => {
  const { profile } = useAuth();

  return (
    <div className="bg-background min-h-screen flex flex-col max-w-md mx-auto relative overflow-x-hidden">
      {/* Top Bar */}
      <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md max-w-md mx-auto">
        <div className="flex justify-between items-center w-full px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-secondary-fixed flex items-center justify-center overflow-hidden">
              {profile?.photoURL ? (
                <img src={profile.photoURL} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <span className="material-symbols-outlined text-on-secondary-fixed">person</span>
              )}
            </div>
            <span className="text-primary font-headline font-black text-xl tracking-tighter">MakanNow</span>
          </div>
          <button className="bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/15 text-primary font-headline font-bold text-sm hover:bg-secondary/10 transition-colors">
            EN
          </button>
        </div>
      </header>

      <main className="flex-1 pt-20 pb-32">
        {children}
      </main>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center px-4 pb-8 pt-3 bg-background/90 backdrop-blur-lg shadow-[0_-8px_24px_rgba(43,23,0,0.04)] rounded-t-[32px] max-w-md mx-auto">
        <button 
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center justify-center px-5 py-2 transition-all ${activeTab === 'home' ? 'bg-primary-fixed text-on-primary-fixed rounded-full' : 'text-secondary opacity-60'}`}
        >
          <span className={`material-symbols-outlined ${activeTab === 'home' ? 'fill-1' : ''}`} style={{ fontVariationSettings: activeTab === 'home' ? "'FILL' 1" : "" }}>home</span>
          <span className="font-body text-[11px] font-semibold">Home</span>
        </button>
        <button 
          onClick={() => onTabChange('library')}
          className={`flex flex-col items-center justify-center px-5 py-2 transition-all ${activeTab === 'library' ? 'bg-primary-fixed text-on-primary-fixed rounded-full' : 'text-secondary opacity-60'}`}
        >
          <span className={`material-symbols-outlined ${activeTab === 'library' ? 'fill-1' : ''}`} style={{ fontVariationSettings: activeTab === 'library' ? "'FILL' 1" : "" }}>menu_book</span>
          <span className="font-body text-[11px] font-semibold">Library</span>
        </button>
        <button 
          onClick={() => onTabChange('tutor')}
          className={`flex flex-col items-center justify-center px-5 py-2 transition-all ${activeTab === 'tutor' ? 'bg-primary-fixed text-on-primary-fixed rounded-full' : 'text-secondary opacity-60'}`}
        >
          <span className={`material-symbols-outlined ${activeTab === 'tutor' ? 'fill-1' : ''}`} style={{ fontVariationSettings: activeTab === 'tutor' ? "'FILL' 1" : "" }}>smart_toy</span>
          <span className="font-body text-[11px] font-semibold">AI Tutor</span>
        </button>
        <button 
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center justify-center px-5 py-2 transition-all ${activeTab === 'profile' ? 'bg-primary-fixed text-on-primary-fixed rounded-full' : 'text-secondary opacity-60'}`}
        >
          <span className={`material-symbols-outlined ${activeTab === 'profile' ? 'fill-1' : ''}`} style={{ fontVariationSettings: activeTab === 'profile' ? "'FILL' 1" : "" }}>person</span>
          <span className="font-body text-[11px] font-semibold">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default Layout;
