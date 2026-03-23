import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Recipe } from '../types';

interface RecipeDetailProps {
  recipe: Recipe | null;
  onClose: () => void;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 top-10 bg-surface rounded-t-[40px] shadow-2xl z-[60] flex flex-col overflow-hidden max-w-md mx-auto"
      >
        {/* Handle */}
        <div className="w-12 h-1.5 bg-outline-variant/30 rounded-full mx-auto mt-4 mb-2"></div>
        
        {/* Header */}
        <nav className="flex items-center justify-between px-6 py-2 bg-surface">
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="text-primary font-black tracking-tight font-headline text-lg">MakanNow</span>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface active:scale-95 transition-transform">
            <span className="material-symbols-outlined">share</span>
          </button>
        </nav>

        {/* Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar pb-32">
          {/* Hero */}
          <div className="relative w-full h-[300px] overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6">
              <span className="bg-primary text-on-primary px-4 py-1.5 rounded-full text-[10px] font-bold font-headline tracking-widest uppercase">
                {recipe.category}
              </span>
            </div>
          </div>

          {/* Details */}
          <section className="px-6 -mt-8 relative z-10">
            <div className="bg-surface-container-lowest rounded-[32px] p-8 shadow-[0_12px_32px_rgba(43,23,0,0.06)]">
              <div className="mb-8">
                <h1 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight mb-3">{recipe.title}</h1>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-medium">
                  {recipe.description}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 border-y border-outline-variant/20 py-6">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-primary mb-1">schedule</span>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Time</p>
                    <p className="text-xs font-bold text-on-surface">{recipe.prepTime}</p>
                  </div>
                  <div className="text-center">
                    <span className="material-symbols-outlined text-primary mb-1">local_fire_department</span>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Calories</p>
                    <p className="text-xs font-bold text-on-surface">{recipe.calories}</p>
                  </div>
                  <div className="text-center">
                    <span className="material-symbols-outlined text-primary mb-1">restaurant</span>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter font-bold">Serves</p>
                    <p className="text-xs font-bold text-on-surface">{recipe.servings}</p>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-10">
                <div className="flex justify-between items-end mb-4">
                  <h2 className="font-headline font-bold text-xl text-on-surface">Ingredients</h2>
                  <span className="text-primary text-xs font-bold">{recipe.ingredients.length} items</span>
                </div>
                <div className="space-y-3">
                  {recipe.ingredients.map((ing, i) => (
                    <label key={i} className="flex items-center gap-4 p-4 rounded-full bg-surface-container-low border border-transparent hover:border-primary/20 transition-all group cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 rounded-full border-outline-variant text-primary focus:ring-primary bg-surface transition-all" />
                      <div className="flex-1">
                        <p className="font-bold text-sm text-on-surface group-has-[:checked]:line-through group-has-[:checked]:opacity-40">{ing.name}</p>
                        <p className="text-[10px] text-on-surface-variant group-has-[:checked]:opacity-40">{ing.amount}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h2 className="font-headline font-bold text-xl text-on-surface mb-6">Preparation</h2>
                <div className="space-y-12">
                  {recipe.instructions.map((step) => (
                    <div key={step.step} className="relative pl-12 border-l-2 border-primary/10">
                      <div className="absolute -left-[1.35rem] top-0 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline font-black text-lg">{step.step}</div>
                      <h3 className="font-bold text-base mb-2 pt-1">{step.title}</h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        {step.text}
                      </p>
                      {step.image && (
                        <div className="mt-4 rounded-2xl overflow-hidden h-44 shadow-md">
                          <img src={step.image} alt={step.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-12">
                <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold py-5 rounded-full shadow-lg shadow-primary/20 active:scale-95 transition-transform flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">play_circle</span>
                  Start Cooking Guide
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Floating Actions */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-surface via-surface to-transparent pointer-events-none">
          <div className="flex justify-center gap-4 pointer-events-auto">
            <button className="bg-surface-container-highest/90 backdrop-blur-md text-on-surface px-6 py-3 rounded-full flex items-center gap-2 font-bold shadow-sm active:scale-95 transition-all">
              <span className="material-symbols-outlined">bookmark</span>
              Save
            </button>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full flex items-center gap-2 font-bold shadow-lg shadow-primary/30 active:scale-95 transition-all">
              <span className="material-symbols-outlined">restaurant_menu</span>
              Order Tools
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RecipeDetail;
