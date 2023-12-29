import { CartProduct } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  cart: CartProduct[];
  getTotalItems: () => number;
  addProductToCart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProduct: (product: CartProduct) => void;
  getSummaryInformation: () => {
    subTotal: number;
    tax: number;
    total: number;
    itemsInCart: number;
  };
};

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();

        const existingProduct = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );
        if (!existingProduct) {
          return set({ cart: [...cart, product] });
        }

        const updatedProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }
          return item;
        });

        set({ cart: updatedProducts });
      },
      getTotalItems: () => {
        const { cart } = get();

        return cart.reduce((total, item) => total + item.quantity, 0);
      },
      updateProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();
        const updatedProducts = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: quantity };
          }
          return item;
        });
        set({ cart: updatedProducts });
      },
      removeProduct: (product: CartProduct) => {
        const { cart } = get();
        const updatedProducts = cart.filter(
          (item) => item.id !== product.id || item.size !== product.size
        );

        console.log("Hola", product);
        set({ cart: updatedProducts });
      },
      getSummaryInformation: () => {
        const { cart } = get();

        const subTotal = cart.reduce(
          (subTotal, product) => product.quantity * product.price + subTotal,
          0
        );
        const tax = subTotal * 0.15;
        const total = subTotal + tax;

        const itemsInCart = cart.reduce(
          (total, item) => total + item.quantity,
          0
        );

        return {
          subTotal,
          tax,
          total,
          itemsInCart,
        };
      },
    }),
    {
      name: "shopping-cart",
    }
  )
);
