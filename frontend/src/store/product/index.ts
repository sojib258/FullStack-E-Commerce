// import axios from "axios";
// import { Action, Thunk, action, thunk } from "easy-peasy";
// const API_URL = process.env.NEXT_PUBLIC_API_KEY;

// interface FormatImage {
//   width: number;
//   height: number;
//   url: string;
// }

// interface Format {
//   thumbnail?: FormatImage;
//   small?: FormatImage;
//   medium?: FormatImage;
//   large?: FormatImage;
// }

// interface Images{
//   id: string | number;
//   width: number;
//   height: number;
//   url: string;
//   alternativeText?: string;
//   formats: Format;
//   data: any[];
// }

// interface Category {
//   id: number;
//   name: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
//   description: string;
//   data: any;
// }

// interface Attributes {
//   id: string | number;
//   name: string;
//   description: string;
//   price: number;
//   discountPrice?: number;
//   ratingValue?: number;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
//   category: Category;
//   availability: boolean;
//   images: {
//     id: string | number;
//     width: number;
//     height: number;
//     url: string;
//     alternativeText?: string;
//     formats: Format;
//     data: any[];
//   }
// }

// interface ProductData {
//   id: string;
//   attributes: Attributes;
// }

// interface ProductModel {
//   products: ProductData[];
//   addProduct: Action<ProductModel, ProductData>;
//   setProduct: Action<ProductModel, ProductData[]>;
//   fetchProducts: Thunk<ProductModel>;
//   productErrorMsg: string;
//   setError: Action<ProductModel, string>;
// }

// const ProductStore: ProductModel = {
//   products: [],
//   addProduct: action((state, payload) => {
//     state.products.push(payload);
//   }),
//   setProduct: action((state, payload) => {
//     state.products = payload;
//   }),
//   fetchProducts: thunk(async (actions) => {
//     try {
//       const response = await axios.get(`${API_URL}/products?populate=*`);
//       const fetchedProducts = response.data;
//       console.log("FetchProducts", fetchedProducts);

//       const formatedData = fetchedProducts.data.map((product: ProductData) => {
//         const categoryData = product.attributes.category.data;
//         const imagesData = product.attributes.images.data

//         return {
//           ...product,
//           attributes: {
//             ...product.attributes,
// images: product.attributes.images.data.map((image: any) => ({
//   id: image.id,
//   alternativeText: image.attributes.alternativeText,
//   width: image.attributes.width,
//   height: image.attributes.height,
//   url: image.attributes.url,
//   formats: Object.keys(image.attributes.formats).reduce(
//     (acc: Record<string, FormatImage>, key: string) => {
//       acc[key] = {
//         width: image.attributes.formats[key].width,
//         height: image.attributes.formats[key].height,
//         url: image.attributes.formats[key].url,
//       };
//       return acc;
//     },
//     {}
//   ),
// })),
//             category: {
//               id: categoryData.id,
//               name: categoryData.attributes.name,
//               description: categoryData.attributes.description,
//               createdAt: categoryData.attributes.createdAt,
//               updatedAt: categoryData.attributes.updatedAt,
//               publishedAt: categoryData.attributes.publishedAt,
//             },
//           },
//         };
//       });

//       console.log("Hello");
//       formatedData.map((product: ProductData) => {
//         actions.addProduct(product);
//       });

//       actions.setError("");
//     } catch (error) {
//       console.log("Error fetching products:", error);
//       actions.setError("An error occurred while fetching products.");
//     }
//   }),
//   productErrorMsg: "",
//   setError: action((state, errorMsg) => {
//     state.productErrorMsg = errorMsg;
//   }),
// };

// export default ProductStore;
import axios from "axios";
import { Action, Thunk, action, thunk } from "easy-peasy";

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
  images: ImageData[];
}

interface ProductData {
  id: number;
  attributes: ProductAttributes;
}

interface ProductModel {
  products: ProductData[];
  addProduct: Action<ProductModel, ProductData>;
  setProduct: Action<ProductModel, ProductData[]>;
  fetchProducts: Thunk<ProductModel>;
  productErrorMsg: string;
  setError: Action<ProductModel, string>;
}

const API_URL = process.env.NEXT_PUBLIC_API_KEY;

const productModel: ProductModel = {
  products: [],
  addProduct: action((state, payload) => {
    state.products.push(payload);
  }),
  setProduct: action((state, payload) => {
    state.products = payload;
  }),

  fetchProducts: thunk(async (actions) => {
    try {
      const response = await axios.get(`${API_URL}/products?populate=*`);

      const updatedData = response.data.data;

      // Transform the data if needed
      const transformedData = updatedData.map((item: any) => ({
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
          category: {
            id: item.attributes.category.id,
            name: item.attributes.category.name,
            description: item.attributes.category.description,
            createdAt: item.attributes.category.createdAt,
            updatedAt: item.attributes.category.updatedAt,
            publishedAt: item.attributes.category.publishedAt,
          },
          images: item.attributes.images.data.map((image: any) => ({
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
      actions.setProduct(transformedData);
    } catch (error) {
      actions.setError("Error fetching products");
    }
  }),

  productErrorMsg: "",
  setError: action((state, payload) => {
    state.productErrorMsg = payload;
  }),
};

export default productModel;
