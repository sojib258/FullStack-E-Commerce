import { createStore, createTypedHooks } from "easy-peasy";

import CartModel from "./cart";
import CategoryModel from "./category";
import ProductModel from "./product";

interface StoreModel {
  product: typeof ProductModel;
  category: typeof CategoryModel;
  cart: typeof CartModel;
}

const store = createStore<StoreModel>({
  product: ProductModel,
  category: CategoryModel,
  cart: CartModel,
});

const typedHooks = createTypedHooks<StoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export default store;
