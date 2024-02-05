import { Action, action } from "easy-peasy";

interface Cart {
  text: string;
  done: boolean;
}

interface CartModel {
  cart: Cart[];
  addCart: Action<CartModel, Cart>;
}

const CartStore: CartModel = {
  cart: [],
  addCart: action((state, payload) => {
    state.cart.push(payload);
  }),
};

export default CartStore;
