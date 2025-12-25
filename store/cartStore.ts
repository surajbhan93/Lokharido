import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// 1. Define the shape of a Cart Item
export interface CartItem {
    id: string;
    name: string;
    price: number;
    originalPrice: number; // New field for calculating savings
    image: string;
    size: string;
    quantity: number;
}

// 2. Define the Store's State & Actions
interface CartState {
    items: CartItem[];

    // Actions
    addItem: (item: CartItem) => void;
    removeItem: (itemId: string, size: string) => void;
    updateQuantity: (itemId: string, size: string, quantity: number) => void; // New Action
    clearCart: () => void;

    // Computed Helpers
    getTotalItems: () => number;
    getCartTotal: () => { totalMRP: number; totalDiscount: number; finalPrice: number }; // New Helper
}

// 3. Create the Store with Persistence
export const useCartStore = create<CartState>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (newItem) => {
                set((state) => {
                    // Check if item with same ID AND Size already exists
                    const existingItem = state.items.find(
                        (i) => i.id === newItem.id && i.size === newItem.size
                    );

                    if (existingItem) {
                        // If yes, just increase quantity
                        return {
                            items: state.items.map((i) =>
                                i.id === newItem.id && i.size === newItem.size
                                    ? { ...i, quantity: i.quantity + 1 }
                                    : i
                            )
                        };
                    }

                    // If no, add as new item
                    return { items: [...state.items, { ...newItem, quantity: 1 }] };
                });
            },

            removeItem: (id, size) => {
                set((state) => ({
                    items: state.items.filter((i) => !(i.id === id && i.size === size)),
                }));
            },

            // NEW: Update Quantity (e.g. User changes dropdown from 1 to 2)
            updateQuantity: (id, size, quantity) => {
                set((state) => ({
                    items: state.items.map((i) =>
                        i.id === id && i.size === size ? { ...i, quantity } : i
                    )
                }));
            },

            clearCart: () => set({ items: [] }),

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            // NEW: Calculate the bill details
            getCartTotal: () => {
                const items = get().items;

                // 1. Total MRP (Before Discount)
                const totalMRP = items.reduce((t, i) => t + (i.originalPrice * i.quantity), 0);

                // 2. Final Price (After Discount)
                const finalPrice = items.reduce((t, i) => t + (i.price * i.quantity), 0);

                // 3. Discount Amount
                const totalDiscount = totalMRP - finalPrice;

                return { totalMRP, totalDiscount, finalPrice };
            }
        }),
        {
            name: "lokharido-cart-storage", // Unique name for LocalStorage key
            storage: createJSONStorage(() => localStorage), // Saves to browser memory
        }
    )
);