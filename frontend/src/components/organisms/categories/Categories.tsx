import CategoryItem from "@/components/molecules/categoryItem/CategoryItem";
import useResponsive from "@/hooks/useResponsive";
import { useStoreState } from "@/store";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./categories.module.scss";

const Categories = () => {
  const { items: categories, loading } = useStoreState(
    (state) => state.category
  );

  const { smScreen } = useResponsive();
  const responsive = {
    xl: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1536 },
      items: 6,
    },
    lg: {
      breakpoint: { max: 1535, min: 1200 },
      items: 5,
    },
    md: {
      breakpoint: { max: 1199, min: 900 },
      items: 4,
    },
    sm: {
      breakpoint: { max: 899, min: 600 },
      items: 3,
    },
    xs: {
      breakpoint: { max: 599, min: 0 },
      items: 3,
    },
  };

  return (
    <Box
      className={`categories ${styles.categories} ${
        smScreen && styles.categories__smScreen
      } ${smScreen && "categories__smScreen"}`}
    >
      <Typography className={styles.categories__headText}>
        Popular Categories
      </Typography>
      <Carousel showDots={smScreen && true} responsive={responsive} ssr={true}>
        {categories.map((item, index) => (
          <Box key={index}>
            <CategoryItem
              imgSrc={`${process.env.NEXT_PUBLIC_DOMAIN_NAME}${item.image.url}`}
              text={item.name}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Categories;
