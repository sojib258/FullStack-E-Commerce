import Button from "@/components/atoms/button/Button";
import ProductCart from "@/components/molecules/productCart/ProductCart";
import useResponsive from "@/hooks/useResponsive";
import { useStoreActions, useStoreState } from "@/store";
import { Masonry } from "@mui/lab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import styles from "./products.module.scss";
const Products = () => {
  const { items: products, loading } = useStoreState((state) => state.product);
  const { category, product } = useStoreActions((actions) => actions);

  const fetchProducts = product.fetchItems;
  const fetchCategories = category.fetchItems;

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const { smScreen } = useResponsive();
  return (
    <Box
      className={`${styles.products} ${smScreen && styles.products__smScreen}`}
    >
      <Box className={styles.products__head}>
        <Typography className={styles.products__headText}>
          Popular Products
        </Typography>
        <Button
          customStyle={{
            backgroundColor: "#fff!important",
            color: "#00b207!important",
            boxShadow: "none!important",
            paddingRight: "0px!important",
          }}
          arrowIcon
          text="View All"
        />
      </Box>
      {loading ? (
        <Typography variant="h6">Loading...</Typography>
      ) : (
        <Masonry
          columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
          spacing={{ xs: 1, sm: 2 }}
        >
          {products.map((item) => (
            <Box className={styles.products__masonryItem} key={item.id}>
              <ProductCart
                ratingValue={item.attributes.ratingValue}
                price={item.attributes.price}
                title={item.attributes.name}
                category={item.attributes.category.name}
                description={item.attributes.description}
                discountPrice={item.attributes.discountPrice}
                images={item.attributes.images}
              />
            </Box>
          ))}
        </Masonry>
      )}
    </Box>
  );
};

export default Products;
