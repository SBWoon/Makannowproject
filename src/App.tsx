import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import LegalScreen from './components/LegalScreen';
import Layout from './components/Layout';
import HomeScreen from './components/HomeScreen';
import LibraryScreen from './components/LibraryScreen';
import TutorScreen from './components/TutorScreen';
import ProfileScreen from './components/ProfileScreen';
import AdminScreen from './components/AdminScreen';
import RecipeDetail from './components/RecipeDetail';
import { Recipe } from './types';

function AppContent() {
  const { loading, isAdmin } = useAuth();
  const [hasAcceptedLegal, setHasAcceptedLegal] = useState(() => {
    return localStorage.getItem('makan_now_legal') === 'true';
  });
  const [activeTab, setActiveTab] = useState('home');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const handleAcceptLegal = () => {
    localStorage.setItem('makan_now_legal', 'true');
    setHasAcceptedLegal(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!hasAcceptedLegal) {
    return <LegalScreen onAccept={handleAcceptLegal} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeScreen onRecipeClick={setSelectedRecipe} />;
      case 'library': return <LibraryScreen onRecipeClick={setSelectedRecipe} />;
      case 'tutor': return <TutorScreen />;
      case 'profile': return <ProfileScreen />;
      case 'admin': return <AdminScreen />;
      default: return <HomeScreen onRecipeClick={setSelectedRecipe} />;
    }
  };

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
      <RecipeDetail recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
    </Layout>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
