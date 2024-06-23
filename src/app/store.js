import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/productsSlice';
import cartReducer from '../features/cartSlice';
//added imports

//exporting to be on the store
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});