import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./redux/reducer/cartSlice";
import { useDispatch } from "react-redux";

export default configureStore({
  reducer: {
    cart: cartSlices,
  },
});
export const useAppDispatch = () => useDispatch();
