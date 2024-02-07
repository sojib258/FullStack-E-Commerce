import axios from "axios";
import { Action, Thunk, action, thunk } from "easy-peasy";
const API_URL = process.env.NEXT_PUBLIC_API_KEY;

interface FormatImage {
  width: number;
  height: number;
  url: string;
}

interface ImageData {
  id: number;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
  formats: Record<string, FormatImage>;
}

interface Category {
  id: number;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ProductAttributes {
  name: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  stock: number;
  discountPrice?: number;
  Availability: boolean;
  ratingValue?: number;
  category: Category;
  isPopular: boolean;
  isFeatured: boolean;
  isHotDeals: boolean;
  images: ImageData[];
}

interface ProductData {
  id: number;
  attributes: ProductAttributes;
}

interface ProductModel {
  items: ProductData[];
  addItems: Action<ProductModel, ProductData>;
  setItems: Action<ProductModel, ProductData[]>;
  fetchItems: Thunk<ProductModel>;
  ErrorMsg: string;
  setErrorMsg: Action<ProductModel, string>;
  loading: boolean;
  setLoading: Action<ProductModel, boolean>;
}

const productModel: ProductModel = {
  items: [],
  addItems: action((state, payload) => {
    state.items.push(payload);
  }),
  setItems: action((state, payload) => {
    state.items = payload;
  }),

  fetchItems: thunk(async (actions) => {
    try {
      actions.setLoading(true);
      const response = await axios.get(`${API_URL}/products?populate=*`);

      const updatedData = response.data.data.map((item: any) => ({
        id: item.id,
        attributes: {
          name: item.attributes.name,
          description: item.attributes.description,
          price: item.attributes.price,
          createdAt: item.attributes.createdAt,
          updatedAt: item.attributes.updatedAt,
          publishedAt: item.attributes.publishedAt,
          stock: item.attributes.stock,
          discountPrice: item.attributes.discountPrice,
          Availability: item.attributes.Availability,
          ratingValue: item.attributes.ratingValue,
          isPopular: item.attributes.isPopular,
          isFeatured: item.attributes.isFeatured,
          isHotDeals: item.attributes.isHotDeals,
          category: {
            id: item.attributes.category.data?.id,
            name: item.attributes.category.data?.attributes?.name,
            description: item.attributes.category.data?.attributes?.description,
          },
          images: item.attributes.images.data.slice(-4).map((image: any) => ({
            id: image.id,
            alternativeText: image.attributes.alternativeText,
            width: image.attributes.width,
            height: image.attributes.height,
            url: image.attributes.url,
            formats: Object.keys(image.attributes.formats).reduce(
              (acc: Record<string, FormatImage>, key: string) => {
                acc[key] = {
                  width: image.attributes.formats[key].width,
                  height: image.attributes.formats[key].height,
                  url: image.attributes.formats[key].url,
                };
                return acc;
              },
              {}
            ),
          })),
        },
      }));

      // Update the products array
      actions.setItems(updatedData);
    } catch (error) {
      actions.setErrorMsg(`Error fetching products ${error}`);
    } finally {
      actions.setLoading(false);
    }
  }),

  ErrorMsg: "",
  setErrorMsg: action((state, payload) => {
    state.ErrorMsg = payload;
  }),
  loading: false,
  setLoading: action((state, payload) => {
    state.loading = payload;
  }),
};

export default productModel;
