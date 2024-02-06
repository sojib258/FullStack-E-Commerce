import axios from "axios";
import { Action, Thunk, action, thunk } from "easy-peasy";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

interface Category {
  id: string | number;
  name: string;
  description?: string;
}

interface CategoryModel {
  items: Category[];
  setItems: Action<CategoryModel, Category[]>;
  addItems: Action<CategoryModel, Category>;
  fetchItems: Thunk<CategoryModel>;
  categoriesError: string;
  setErrorMsg: Action<CategoryModel, string>;
  loading: boolean;
  setLoading: Action<CategoryModel, boolean>;
}

const categoryModel: CategoryModel = {
  items: [],
  setItems: action((state, payload) => {
    state.items = payload;
  }),
  addItems: action((state, payload) => {
    state.items.push(payload);
  }),
  fetchItems: thunk(async (actions, payload) => {
    try {
      actions.setLoading(true);
      const response = await axios.get(`${API_URL}/categories`);

      const updatedData = response.data.data.map((item: any) => ({
        id: item.id,
        name: item.attributes.name,
        description: item.attributes.description,
      }));

      actions.setItems(updatedData);
    } catch (error) {
      actions.setErrorMsg(`Error fetching categories ${error}`);
    } finally {
      actions.setLoading(false);
    }
  }),
  categoriesError: "",
  setErrorMsg: action((state, payload) => {
    state.categoriesError = payload;
  }),
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
};

export default categoryModel;
