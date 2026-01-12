import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (product: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
};

export const useCart = create<CartStore>((set, get) => ({
  items: JSON.parse(localStorage.getItem("carterCart") || "[]"),
  addItem: (product) => set((state) => {
    const existing = state.items.find(i => i.id === product.id);
    const updated = existing 
      ? state.items.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i)
      : [...state.items, { ...product, quantity: 1 }];
    localStorage.setItem("carterCart", JSON.stringify(updated));
    return { items: updated };
  }),
  removeItem: (id) => set((state) => {
    const updated = state.items.filter(i => i.id !== id);
    localStorage.setItem("carterCart", JSON.stringify(updated));
    return { items: updated };
  }),
  clearCart: () => {
    localStorage.setItem("carterCart", "[]");
    set({ items: [] });
  },
  getTotalPrice: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
  getTotalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
}));
