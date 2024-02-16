import { createSlice } from "@reduxjs/toolkit";

const loadCartStateFromLocalStorage = () => {
  const cartStateJSON = localStorage.getItem("cartState");
  return cartStateJSON ? JSON.parse(cartStateJSON) : null;
};

const saveCartStateToLocalStorage = (state) => {
  localStorage.setItem("cartState", JSON.stringify(state));
};

const initialStateFromLocalStorage = loadCartStateFromLocalStorage() || {
  cartItems: [],
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialStateFromLocalStorage,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      if (product) {
        const existingItem = state.cartItems.find(
          (item) => item.id === product.id
        );

        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.cartItems.push({ ...product, quantity: 1 });
        }

        state.totalPrice = state.cartItems.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);

        saveCartStateToLocalStorage(state);
      }
    },
    removeFromCart: (state, action) => {
      const idToRemove = action.payload;
      const itemIndexToRemove = state.cartItems.findIndex(
        (item) => item.id === idToRemove
      );

      if (itemIndexToRemove === -1) {
        return state;
      }

      const itemToRemove = state.cartItems[itemIndexToRemove];

      if (itemToRemove.quantity > 1) {
        state.cartItems[itemIndexToRemove].quantity--;
        state.totalPrice -= itemToRemove.price;
      } else {
        state.cartItems.splice(itemIndexToRemove, 1);
        state.totalPrice -= itemToRemove.price;
      }

      saveCartStateToLocalStorage(state);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      saveCartStateToLocalStorage(state);
    },
  },
});

export const { removeFromCart, clearCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
