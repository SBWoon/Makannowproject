import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { INITIAL_RECIPES } from '../constants';
import RecipeCard from './RecipeCard';
import { Recipe } from '../types';

interface LibraryScreenProps {
  onRecipeClick: (recipe: Recipe) => void;
}

const LibraryScreen: React.FC<LibraryScreenProps> = ({ onRecipeClick }) => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Recipes');

  const filters = ['All Recipes', 'Quick', 'Healthy', 'Traditional', 'Dessert', 'Nasi'];

  const filteredRecipes = INITIAL_RECIPES.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase()) || 
                          recipe.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = activeFilter === 'All Recipes' || recipe.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-6 space-y-8"
    >
      <div>
        <h1 className="font-headline font-extrabold text-3xl text-on-surface tracking-tight mb-2">Food Library</h1>
        <p className="text-secondary font-medium tracking-wide text-sm">Explore over 800+ Recipes from across Malaysia</p>
      </div>

      {/* Search Bar */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-on-surface-variant">
          <span className="material-symbols-outlined">search</span>
        </div>
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-surface-container-high border-none rounded-xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary text-on-surface placeholder-on-surface-variant/60 transition-all shadow-sm" 
          placeholder="Search recipes, ingredients, or cultures..." 
        />
      </div>

      {/* Filter Chips */}
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar">
        {filters.map(filter => (
          <button 
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex-none px-6 py-2.5 font-bold rounded-full text-xs transition-colors ${activeFilter === filter ? 'bg-primary text-on-primary' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Recipe List */}
      <div className="space-y-8">
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe} 
            onClick={onRecipeClick} 
            variant={index === 0 && activeFilter === 'All Recipes' ? 'featured' : 'list'}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LibraryScreen;
