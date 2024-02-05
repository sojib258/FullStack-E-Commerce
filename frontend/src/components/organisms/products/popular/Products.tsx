import Button from "@/components/atoms/button/Button";
import ProductCart from "@/components/molecules/productCart/ProductCart";
import useResponsive from "@/hooks/useResponsive";
import { Masonry } from "@mui/lab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "../../../../store/";
import styles from "./products.module.scss";
const Products = () => {
  const products = useStoreState((state) => state.product.products);
  const fetchProducts = useStoreActions(
    (actions) => actions.product.fetchProducts
  );

  console.log("Product", products);

  const [loading, setLoading] = useState(true);

  console.log("Loading", loading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProducts();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
        <Typography>Loading...</Typography>
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
