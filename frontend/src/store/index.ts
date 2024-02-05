import { createStore, createTypedHooks } from "easy-peasy";

import CartModel from "./cart";
import ProductModel from "./product";

interface StoreModel {
  product: typeof ProductModel;
  cart: typeof CartModel;
}

const store = createStore<StoreModel>({
  product: ProductModel,
  cart: CartModel,
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export default store;
