import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../AuthContext';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const ProfileScreen: React.FC = () => {
  const { user, profile, isAdmin } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-6 space-y-8">
        <section className="flex flex-col items-center text-center space-y-3">
          <div className="w-20 h-20 rounded-full bg-surface-container-highest flex items-center justify-center">
            <span className="material-symbols-outlined text-4xl text-primary">restaurant</span>
          </div>
          <div>
            <h2 className="font-headline font-bold text-2xl text-on-surface">Welcome to MakanNow</h2>
            <p className="text-on-surface-variant font-medium text-sm">Join us to explore heritage flavors</p>
          </div>
        </section>

        <section className="bg-surface-container-lowest rounded-lg p-6 shadow-sm border border-outline-variant/20 space-y-6">
          <div className="flex bg-surface-container-low p-1 rounded-full">
            <button onClick={() => setIsLogin(true)} className={`flex-1 py-3 text-xs font-bold font-headline rounded-full transition-all ${isLogin ? 'bg-primary text-on-primary shadow-sm' : 'text-secondary'}`}>Login</button>
            <button onClick={() => setIsLogin(false)} className={`flex-1 py-3 text-xs font-bold font-headline rounded-full transition-all ${!isLogin ? 'bg-primary text-on-primary shadow-sm' : 'text-secondary'}`}>Register</button>
          </div>
          
          <div className="space-y-6">
            <header>
              <h4 className="font-headline font-bold text-xl text-on-surface mb-1">{isLogin ? 'Sign In' : 'Sign Up'}</h4>
              <p className="text-on-surface-variant text-xs">Access your saved recipes and personalized kitchen.</p>
            </header>
            
            <button 
              onClick={handleLogin}
              className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold py-4 px-6 rounded-xl shadow-md hover:opacity-95 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Connect with Google
              <span className="material-symbols-outlined text-[20px]">chef_hat</span>
            </button>
          </div>
        </section>

        <section className="bg-primary rounded-lg p-8 text-white shadow-lg relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-container rounded-full opacity-50 blur-3xl"></div>
          <div className="relative z-10">
            <h4 className="font-headline font-bold text-xl">Unlock Premium</h4>
            <p className="mt-2 text-primary-fixed opacity-90 text-sm">Sign in to unlock full heritage features</p>
            <button className="w-full mt-8 bg-white text-primary py-4 rounded-full font-bold text-sm shadow-xl hover:bg-surface transition-colors flex items-center justify-center gap-2">
              <span>Get Started</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>
      </motion.div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-6 space-y-8">
      <section className="flex flex-col items-center text-center space-y-3">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border-4 border-surface-container-highest p-1">
            <img className="w-full h-full object-cover rounded-full" src={profile?.photoURL || 'https://picsum.photos/seed/chef/200'} alt="Avatar" />
          </div>
          <div className="absolute bottom-1 right-1 bg-primary text-white p-1.5 rounded-full border-2 border-surface flex items-center justify-center">
            <span className="material-symbols-outlined text-[16px]">edit</span>
          </div>
        </div>
        <div>
          <h2 className="font-headline font-bold text-2xl text-on-surface">{profile?.displayName}</h2>
          <p className="text-on-surface-variant font-medium text-sm">{profile?.email}</p>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="font-headline font-bold text-lg px-2">Account Settings</h3>
        <div className="bg-surface-container-low rounded-lg p-2 space-y-1">
          <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container transition-colors rounded-DEFAULT group">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">person_edit</span>
              <span className="font-medium text-sm">Edit Profile</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-surface-container transition-colors rounded-DEFAULT group">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary">notifications</span>
              <span className="font-medium text-sm">Notification Settings</span>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
          </button>
        </div>
      </section>

      <section className="py-2">
        <button 
          onClick={() => signOut(auth)}
          className="w-full flex items-center justify-center gap-3 py-4 bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full font-bold active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">logout</span>
          Logout
        </button>
      </section>

      {isAdmin && (
        <section className="bg-secondary-container/20 p-6 rounded-lg border border-secondary/30">
          <h3 className="font-headline font-bold text-lg text-secondary mb-4">Admin Controls</h3>
          <button className="w-full bg-secondary text-white py-3 rounded-full font-bold text-sm shadow-md">
            Open Owner Panel
          </button>
        </section>
      )}
    </motion.div>
  );
};

export default ProfileScreen;
