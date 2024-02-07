import axios from "axios";
import { Action, Thunk, action, thunk } from "easy-peasy";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

interface Format {
  width: number;
  height: number;
  url: number;
}

interface Image {
  id: string | number;
  width: number;
  height: number;
  url: string;
  formats: Format;
}

interface Category {
  id: string | number;
  name: string;
  description?: string;
  image: Image;
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
      const response = await axios.get(`${API_URL}/categories?populate=image`);

      const updatedData = response.data.data.map((item: any) => ({
        id: item.id,
        name: item.attributes.name,
        description: item.attributes.description,
        image: {
          id: item.attributes.image.data.id,
          wdith: item.attributes.image.data.attributes.width,
          height: item.attributes.image.data.attributes.height,
          url: item.attributes.image.data.attributes.url,
          formats: Object.keys(
            item.attributes.image.data.attributes.formats
          ).reduce((acc: Record<string, Format>, cur: string) => {
            acc[cur] = {
              width: item.attributes.image.data.attributes.formats[cur].width,
              height: item.attributes.image.data.attributes.formats[cur].height,
              url: item.attributes.image.data.attributes.formats[cur].url,
            };
            return acc;
          }, {}),
        },
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
