export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  role: 'user' | 'admin';
  plan: 'free' | 'premium';
  language: string;
  createdAt: string;
}

export interface Ingredient {
  name: string;
  amount: string;
}

export interface Instruction {
  step: number;
  title: string;
  text: string;
  image?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  prepTime: string;
  calories: string;
  servings: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Expert';
  ingredients: Ingredient[];
  instructions: Instruction[];
  isPremium: boolean;
  authorUid: string;
  tag?: string;
}

export interface PaymentApproval {
  id: string;
  uid: string;
  userName: string;
  plan: string;
  refCode: string;
  amount: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}
