import Button from "@/components/atoms/button/Button";
import ProductCart from "@/components/molecules/productCart/ProductCart";
import useResponsive from "@/hooks/useResponsive";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./hotDeals.module.scss";
const HotDeals = () => {
  const { smScreen } = useResponsive();

  const hotDeals = [
    {
      imgSrc: "/img/12.jpg",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, quod?",
      price: 99,
      discountPrice: 90,
      ratingValue: 3,
    },
    {
      imgSrc: "/img/8.jpg",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      price: 29,
      ratingValue: 3,
    },
    {
      imgSrc: "/img/9.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus numquam illum!",
      price: 40,
      discountPrice: 29,
      ratingValue: 3,
    },
    {
      imgSrc: "/img/10.jpg",
      title: "Lorem ipsum dolor sit.",
      price: 10,
      ratingValue: 3,
    },
    {
      imgSrc: "/img/11.jpg",
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quod ex molestiae, accusamus soluta quia.",
      price: 200,
      discountPrice: 100,
      ratingValue: 3,
    },
    {
      imgSrc: "/img/7.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eveniet.",
      price: 49,
      ratingValue: 3,
    },
    {
      imgSrc: "/img/9.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus numquam illum!",
      price: 40,
      discountPrice: 29,
      ratingValue: 3,
    },
    {
      imgSrc: "/img/10.jpg",
      title: "Lorem ipsum dolor sit.",
      price: 10,
      ratingValue: 3,
    },
    {
      imgSrc: "/img/11.jpg",
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quod ex molestiae, accusamus soluta quia.",
      price: 200,
      discountPrice: 100,
      ratingValue: 3,
    },
    {
      imgSrc: "/img/7.jpg",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eveniet.",
      price: 49,
      ratingValue: 3,
    },
  ];
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
        {hotDeals.map((item, index) => (
          <Grid flexGrow={1} key={index} xs={6} sm={4} md={3} lg={2.4} item>
            <ProductCart
              discountPrice={item.discountPrice}
              price={item.price}
              title={item.title}
              imgSrc={item.imgSrc}
              value={item.ratingValue}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HotDeals;
