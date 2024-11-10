import { StateCreator } from "zustand";
import { SanityDocument } from "next-sanity";
import { CartProduct } from "@/types/cartProduct";

// Define cart state and actions
interface CartState {
  cart: CartProduct[];
  total: number;
  count: number;
  showCart: boolean;
}

interface CartActions {
  addProductToCart: (product: SanityDocument, quantity: number) => void;
  editCartProduct: (product: SanityDocument, quantity?: number) => void;
  clearProduct: (productId: string) => void;
  clearCart: () => void;
  setShowCart: (value: boolean) => void;
}

export type CartSlice = CartState & CartActions;

// Zustand store slice
export const createCartSlice: StateCreator<CartSlice, [], [], CartSlice> = (
  set,
  get
) => ({
  cart: [],
  total: 0,
  count: 0,
  showCart: false,

  setShowCart: (value) => set({ showCart: value }),

  addProductToCart: (product, quantity) => {
    const controlledQty = Math.min(Math.max(1, quantity), 50);
    const updatedCart = modifyCart(get().cart, product, controlledQty, true);
    updateCartState(set, updatedCart);
  },

  editCartProduct: (product, quantity = 1) => {
    const controlledQty = Math.min(Math.max(1, quantity), 50);
    const updatedCart = modifyCart(get().cart, product, controlledQty, false);
    updateCartState(set, updatedCart);
  },

  clearProduct: (productId) => {
    const updatedCart = get().cart.filter((item) => item._id !== productId);
    updateCartState(set, updatedCart);
  },

  clearCart: () => set({ cart: [], count: 0, total: 0 }),
});

// Helper functions

// Adds or updates a product in the cart with specified quantity
function modifyCart(
  cart: CartProduct[],
  product: SanityDocument,
  qtyChange: number,
  isAdditive: boolean = false
): CartProduct[] {
  const cartProduct = createCartProduct(product);
  const existingProductIndex = cart.findIndex(
    (item) => item._id === product._id
  );

  if (existingProductIndex !== -1) {
    const updatedCart = [...cart];
    const existingProduct = updatedCart[existingProductIndex];
    const updatedQty = isAdditive
      ? Math.min(existingProduct.qty + qtyChange, 50)
      : qtyChange;

    if (updatedQty > 0) {
      updatedCart[existingProductIndex] = {
        ...existingProduct,
        qty: updatedQty,
      };
    } else {
      updatedCart.splice(existingProductIndex, 1); // Remove if quantity is 0
    }

    return updatedCart;
  }

  return qtyChange > 0 ? [...cart, { ...cartProduct, qty: qtyChange }] : cart;
}

// Creates a new cart product from a SanityDocument
function createCartProduct(product: SanityDocument): CartProduct {
  return {
    _id: product._id,
    _rev: product._rev,
    _type: product._type,
    _createdAt: product._createdAt,
    _updatedAt: product._updatedAt,
    qty: 1,
    priceId: product.priceId || "",
    name: product.name || "Unknown Product",
    slug: product.slug || "unknown-slug",
    price: product.price || 0,
    image: product.image,
  };
}

// Updates cart state with recalculated total and count
function updateCartState(set: Function, updatedCart: CartProduct[]) {
  const count = updatedCart.reduce((total, item) => total + item.qty, 0);
  const total = updatedCart.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );
  set({ cart: updatedCart, count, total });
}
