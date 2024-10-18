import { StateCreator } from "zustand";
import { SanityDocument } from "next-sanity";
import { CartProduct } from "@/types/cartProduct";
import toast from "react-hot-toast";

interface CartState {
  cart: CartProduct[];
  total: number;
  count: number;
  showCart: boolean;
}

interface CartActions {
  addProduct: (product: SanityDocument) => void;
  removeProduct: (productId: string) => void;
  clearProduct: (productId: string) => void;
  clearCart: () => void;
  setShowCart: (value: boolean) => void;
}

export type CartSlice = CartState & CartActions;

export const createCartSlice: StateCreator<CartSlice, [], [], CartSlice> = (
  set,
  get
) => ({
  cart: [],
  total: 0,
  count: 0,
  showCart: false,

  setShowCart: (value: boolean) => set({ showCart: value }),

  addProduct: (product: SanityDocument) => {
    const { cart } = get();
    const updatedCart = updateCart(cart, product, 1);
    const updatedCount = calculateCount(updatedCart);
    const updatedTotal = calculateTotal(updatedCart);

    toast.success(`1 ${product.name} added to the cart.`);
    set({ cart: updatedCart, count: updatedCount, total: updatedTotal });
  },

  removeProduct: (productId: string) => {
    const { cart } = get();
    const updatedCart = updateCart(
      cart,
      { _id: productId } as SanityDocument,
      -1
    );
    const updatedCount = calculateCount(updatedCart);
    const updatedTotal = calculateTotal(updatedCart);
    set({ cart: updatedCart, count: updatedCount, total: updatedTotal });
  },

  clearProduct: (productId: string) => {
    const { cart } = get();
    const updatedCart = clearProductById(cart, productId);
    const updatedCount = calculateCount(updatedCart);
    const updatedTotal = calculateTotal(updatedCart);
    set({ cart: updatedCart, count: updatedCount, total: updatedTotal });
  },

  clearCart: () => set({ cart: [], count: 0 }),
});

// Helper functions

function updateCart(
  cart: CartProduct[],
  product: SanityDocument,
  qtyChange: number
): CartProduct[] {
  return cart.some((item) => item._id === product._id)
    ? cart
        .map((item) =>
          item._id === product._id
            ? { ...item, qty: Math.max(item.qty + qtyChange, 0) }
            : item
        )
        .filter((item) => item.qty > 0) // Remove items with 0 quantity
    : [...cart, { ...product, qty: 1 }];
}

function clearProductById(
  cart: CartProduct[],
  productId: string
): CartProduct[] {
  return cart.filter((item) => item._id !== productId);
}

function calculateCount(cart: CartProduct[]): number {
  return cart.reduce((totalCount, item) => totalCount + item.qty, 0);
}

function calculateTotal(cart: CartProduct[]): number {
  return cart.reduce((total, item) => total + item.qty * item.price, 0);
}
