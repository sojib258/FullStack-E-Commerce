"use client";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import Products from "./Products";
const ProductProvider = () => {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
};

export default ProductProvider;
