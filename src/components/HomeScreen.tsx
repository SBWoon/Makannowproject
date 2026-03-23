import React from 'react';
import { motion } from 'framer-motion';
import { INITIAL_RECIPES } from '../constants';
import RecipeCard from './RecipeCard';
import { Recipe } from '../types';

interface HomeScreenProps {
  onRecipeClick: (recipe: Recipe) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onRecipeClick }) => {
  const featured = INITIAL_RECIPES[0];
  const trending = INITIAL_RECIPES.slice(1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="px-6 space-y-10"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary to-primary-container p-8 text-on-primary">
        <div className="relative z-10 max-w-md">
          <h2 className="text-2xl font-extrabold font-headline leading-tight mb-3">
            Your Only Needed Open Source Cooking Guide App
          </h2>
          <p className="text-on-primary/80 font-body text-xs mb-6">
            Discover authentic Malaysian flavors passed down through generations. Completely open for the community.
          </p>
          <button className="bg-surface-container-lowest text-primary px-6 py-3 rounded-full font-bold text-xs transition-transform active:scale-95">
            Start Cooking
          </button>
        </div>
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl"></div>
      </section>

      {/* Quick Access */}
      <section className="grid grid-cols-4 gap-4">
        {[
          { icon: 'auto_awesome', label: 'Daily Pick' },
          { icon: 'history', label: 'Recent' },
          { icon: 'bookmark', label: 'Saved' },
          { icon: 'local_fire_department', label: 'Challenges' }
        ].map((item) => (
          <div key={item.label} className="bg-surface-container flex flex-col items-center justify-center p-4 rounded-lg hover:bg-secondary-fixed/30 transition-colors group cursor-pointer">
            <span className="material-symbols-outlined text-primary text-2xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</span>
            <span className="font-bold text-[10px] text-on-surface">{item.label}</span>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section>
        <h3 className="text-lg font-bold font-headline mb-6 text-on-surface">Explore Categories</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-6 px-6">
          {[
            { icon: 'free_breakfast', label: 'Breakfast' },
            { icon: 'lunch_dining', label: 'Lunch' },
            { icon: 'dinner_dining', label: 'Dinner', active: true },
            { icon: 'cookie', label: 'Snacks' }
          ].map((cat) => (
            <div key={cat.label} className="flex-shrink-0 flex flex-col items-center gap-3">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all cursor-pointer ${cat.active ? 'bg-secondary-container border-primary' : 'bg-surface-container-high border-transparent hover:border-primary'}`}>
                <span className={`material-symbols-outlined text-2xl ${cat.active ? 'text-on-secondary-container' : 'text-secondary'}`}>{cat.icon}</span>
              </div>
              <span className={`text-[10px] font-semibold ${cat.active ? 'text-primary' : ''}`}>{cat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section>
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-lg font-bold font-headline text-on-surface">Trending Now</h3>
          <span className="text-primary font-bold text-xs cursor-pointer">View All</span>
        </div>
        <div className="space-y-6">
          <RecipeCard recipe={featured} onClick={onRecipeClick} variant="featured" />
          <div className="grid grid-cols-1 gap-6">
            {trending.map(recipe => (
              <RecipeCard key={recipe.id} recipe={recipe} onClick={onRecipeClick} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomeScreen;
