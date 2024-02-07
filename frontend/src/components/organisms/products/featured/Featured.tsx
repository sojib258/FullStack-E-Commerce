import Button from "@/components/atoms/button/Button";
import ProductCart from "@/components/molecules/productCart/ProductCart";
import useResponsive from "@/hooks/useResponsive";
import { useStoreState } from "@/store";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "./featured.module.scss";
const Featured = () => {
  const { items: products, loading } = useStoreState((state) => state.product);
  const { smScreen } = useResponsive();

  const featuredProducts = products.filter(
    (item) => item.attributes.isFeatured
  );

  return (
    <Box
      className={`${styles.featured} ${smScreen && styles.featured__smScreen}`}
    >
      <Box className={styles.featured__head}>
        <Typography className={styles.featured__headText}>
          Featured Products
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
      <Grid container spacing={{ xs: 1, sm: 2 }}>
        {featuredProducts.map((item, index) => (
          <Grid flexGrow={1} key={index} xs={6} sm={4} md={3} lg={2.4} item>
            <ProductCart
              ratingValue={item.attributes.ratingValue}
              price={item.attributes.price}
              title={item.attributes.name}
              category={item.attributes.category.name}
              description={item.attributes.description}
              discountPrice={item.attributes.discountPrice}
              images={item.attributes.images}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Featured;
