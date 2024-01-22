import Button from "@/components/atoms/button/Button";
import ProductCart from "@/components/molecules/productCart/ProductCart";
import useResponsive from "@/hooks/useResponsive";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./products.module.scss";

const Products = () => {
  const products = [
    {
      imgSrc: "/img/12.jpg",
      text: "Hello",
      title:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, quod?",
      ratingValue: 3,
    },
    {
      imgSrc: "/img/8.jpg",
      text: "Hello",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      ratingValue: 4,
    },
    {
      imgSrc: "/img/9.jpg",
      text: "Hello",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus numquam illum!",
      ratingValue: 5,
    },
    {
      imgSrc: "/img/10.jpg",
      text: "Hello",
      title: "Lorem ipsum dolor sit.",
      ratingValue: 1,
    },
    {
      imgSrc: "/img/11.jpg",
      text: "Hello",
      title:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quod ex molestiae, accusamus soluta quia.",
      ratingValue: 3,
    },
    {
      imgSrc: "/img/7.jpg",
      text: "Hello",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eveniet.",
      ratingValue: 4,
    },
    {
      imgSrc: "/img/8.jpg",
      text: "Hello",
      title: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      ratingValue: 4,
    },
    {
      imgSrc: "/img/9.jpg",
      text: "Hello",
      title: "Lorem ipsum dolor sit amet.",
      ratingValue: 4,
    },
    {
      imgSrc: "/img/10.jpg",
      text: "Hello",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae.",
      ratingValue: 4,
    },
    {
      imgSrc: "/img/11.jpg",
      text: "Hello",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam similique placeat modi quo praesentium?",
      ratingValue: 4,
    },
    {
      imgSrc: "/img/10.jpg",
      text: "Hello",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae.",
      ratingValue: 4,
    },
    {
      imgSrc: "/img/11.jpg",
      text: "Hello",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam similique placeat modi quo praesentium?",
      ratingValue: 4,
    },
  ];
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
      <Masonry
        columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
        spacing={{ xs: 1, sm: 2 }}
      >
        {products.map((item, index) => (
          <Box className={styles.products__masonryItem} key={index}>
            <ProductCart
              value={item.ratingValue}
              price={10}
              title={item.title}
              imgSrc={item.imgSrc}
            />
          </Box>
        ))}
      </Masonry>
    </Box>
  );
};

export default Products;
