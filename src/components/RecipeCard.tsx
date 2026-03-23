import React from 'react';
import { Recipe } from '../types';

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
  variant?: 'list' | 'featured';
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick, variant = 'list' }) => {
  if (variant === 'featured') {
    return (
      <div 
        onClick={() => onClick(recipe)}
        className="relative group overflow-hidden rounded-lg aspect-[16/9] bg-surface-container shadow-sm border border-outline-variant/5 cursor-pointer"
      >
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
          {recipe.tag && (
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-sm mb-3">
              {recipe.tag}
            </span>
          )}
          <h2 className="font-headline font-bold text-2xl text-white mb-2">{recipe.title}</h2>
          <p className="text-white/80 text-xs max-w-md mb-4 font-light line-clamp-2">{recipe.description}</p>
          <div className="flex items-center gap-4 text-white/90 text-[10px] font-medium uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">schedule</span> {recipe.prepTime}</span>
            <span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">restaurant</span> {recipe.category}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => onClick(recipe)}
      className="flex gap-5 items-center group cursor-pointer"
    >
      <div className="w-24 h-24 flex-none rounded-DEFAULT overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex-grow border-b border-outline-variant/10 pb-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-headline font-bold text-base text-on-surface">{recipe.title}</h3>
          <span className="text-secondary font-bold text-xs">{recipe.category}</span>
        </div>
        <p className="text-on-surface-variant text-xs mb-3 line-clamp-1">{recipe.description}</p>
        <div className="flex items-center gap-3 text-on-surface-variant/70 text-[10px] font-semibold">
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">timer</span> {recipe.prepTime}</span>
          <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
