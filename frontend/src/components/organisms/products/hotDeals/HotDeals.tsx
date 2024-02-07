import Button from "@/components/atoms/button/Button";
import ProductCart from "@/components/molecules/productCart/ProductCart";
import useResponsive from "@/hooks/useResponsive";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useStoreState } from "../../../../store/";
import styles from "./hotDeals.module.scss";
const HotDeals = () => {
  const { items, loading } = useStoreState((state) => state.product);
  const { smScreen } = useResponsive();

  const hotDealsProducts = items.filter((item) => item.attributes.isHotDeals);

  return (
    <Box
      className={`${styles.hotDeals} ${smScreen && styles.hotDeals__smScreen}`}
    >
      <Box className={styles.hotDeals__head}>
        <Typography className={styles.hotDeals__headText}>Hot Deals</Typography>
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
        {hotDealsProducts.map((item, index) => (
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

export default HotDeals;
