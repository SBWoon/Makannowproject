import { Recipe } from "./types";

export const INITIAL_RECIPES: Recipe[] = [
  {
    id: "nasi-lemak-1",
    title: "Heritage Nasi Lemak",
    description: "The quintessential Malaysian breakfast. Fragrant coconut rice served with spicy sambal, crispy anchovies, and roasted peanuts.",
    category: "Traditional",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnt61SAs1CWqCML42QzZL6vwKp89PBqqO_fNYv2U1lkjSyR9EbBxA1c_O9IacI3ueddevp27PsXwLyAzAMbxslK-SIN7QwYCMJ4YRWqk1NvoM1jHTkH3wFYhbAAeAEtGxHHmgqiygEZfo4gyCkSSgkpuXzLWkR-dQvHiki_1nPggtvizgAKrLSg5bK0LlE1VDLgTFF5YtAuTiNzy9uGTN_k9T-Yuz4g7zkyoHlrK4XS3zKE0F5jp3f7nl5CALBr0bdBEmLaF8NyGXw",
    prepTime: "45 mins",
    calories: "540 kcal",
    servings: "4 Pax",
    difficulty: "Intermediate",
    isPremium: false,
    authorUid: "admin",
    tag: "Editor's Choice",
    ingredients: [
      { name: "Coconut Milk", amount: "200ml, Freshly squeezed" },
      { name: "Basmati Rice", amount: "2 Cups, Washed" },
      { name: "Pandan Leaves", amount: "3-4 Leaves, Tied in a knot" }
    ],
    instructions: [
      {
        step: 1,
        title: "Rice Infusion",
        text: "Combine washed rice, coconut milk, ginger, pandan leaves, and a pinch of salt in the rice cooker. Cook until fluffy and aromatic.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDN0h3--aHTQVs5Dkhu7dPaebJ9Ug__91Jh5yQfZ0PZ96enIhWX7EldPIe1407CnbnMDp7T7xtrqBN1o-RkSGkW___snH0MGIcXeoHSbZPhQe_8m7Tv0pkv0myc-McZU9zKCvBFXx-Le_nwc-8zEXPs2SPBqVTQ1Uw-glFpV75N5exE15QQJsayMmtzU0F4Gb88_nH6TOWqv_of9wH8mSy2jSespGZCLiJE0axIEIrHlldh0WXimoHvL4fae2TWHpqbn_gUR2hA4rC"
      }
    ]
  },
  {
    id: "penang-laksa-1",
    title: "Garden Penang Laksa",
    description: "A tangy and spicy fish-based noodle soup with fresh herbs.",
    category: "Healthy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClmQeEg4KSx7Gq8swwckxVl6xWN0hqHsb3Xsc40v77XiNcVj4BVHip-9J--O0ULH1Bjd4FOCGVlFepbdw2we-8VrM_rwtWMGZ0JYwnB92QLoF5kOA4YMd11eWXh26RFqptpP-UrfeTok-4BF1gTQMJffWOl9fm0PsECnXIImU8WnWGF_rlWuENEClxDNTZB8jJkepzSRioekEwvrDmiRPkLLtjT7mlK64Ej4SWLr2bqtJToPFSYdNPyK89E6RU94IsS_IJ8ThUszTM",
    prepTime: "30 mins",
    calories: "320 kcal",
    servings: "2 Pax",
    difficulty: "Intermediate",
    isPremium: true,
    authorUid: "admin",
    ingredients: [],
    instructions: []
  },
  {
    id: "satay-1",
    title: "Street Style Satay",
    description: "Char-grilled chicken skewers marinated in turmeric and lemongrass.",
    category: "Quick",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAs5r7j9lbQFHgVCfb9fMHNRIwagqUz-9_BSXXgMP8XiO3iem81xp9m_Spw6PiOHPi0q3tJEz4CtAIitkKIFVMtc8UpCbS2IXx-t_xDqFsWxki1WSbdedyN9jWs1L0uRStu81PEeV4oBvnfZjemvXNSDiUiVwP9LsDZkLpGzxVbbgfvsXjmU8AYvxiX6Hkqrv5_mB-pDNfXrL0PR6o0ioUEAILEMGeeDKidhgrTaMV0toHjKfjtEX-tP-Uh2meZbHDDaPVyoOPYwYiB",
    prepTime: "20 mins",
    calories: "250 kcal",
    servings: "2 Pax",
    difficulty: "Beginner",
    isPremium: false,
    authorUid: "admin",
    ingredients: [],
    instructions: []
  }
];
