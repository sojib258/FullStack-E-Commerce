import CategoryItem from "@/components/molecules/categoryItem/CategoryItem";
import useResponsive from "@/hooks/useResponsive";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./categories.module.scss";

const Categories = () => {
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

  const categories = [
    {
      imgSrc: "/img/13.png",
      text: "Traditional Favourites",
    },
    {
      imgSrc: "/img/6.jpg",
      text: "Sweet Delicacies",
    },
    {
      imgSrc: "/img/7.jpg",
      text: "Traditional Favourites",
    },
    {
      imgSrc: "/img/11.jpg",
      text: "Steamed Goodness",
    },
    {
      imgSrc: "/img/12.jpg",
      text: "Traditional Favourites",
    },
    {
      imgSrc: "/img/13.png",
      text: "Traditional Favourites",
    },
    {
      imgSrc: "/img/13.png",
      text: "Traditional Favourites",
    },
    {
      imgSrc: "/img/13.png",
      text: "Traditional Favourites",
    },
    {
      imgSrc: "/img/13.png",
      text: "Steamed Goodness",
    },
    {
      imgSrc: "/img/13.png",
      text: "Traditional Favourites",
    },
    {
      imgSrc: "/img/13.png",
      text: "Traditional Favourites",
    },
    {
      imgSrc: "/img/13.png",
      text: "Traditional Favourites",
    },
  ];

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
            <CategoryItem key={index} imgSrc={item.imgSrc} text={item.text} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Categories;
