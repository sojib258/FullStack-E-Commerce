import Categories from "@/components/organisms/categories/Categories";
import CompanyLogo from "@/components/organisms/company/Company";
import FeaturedService from "@/components/organisms/featuredService/FeaturedService";
import DiscountBanner from "@/components/organisms/homePageBanner/discountBanner/DiscountBanner";
import Banner from "@/components/organisms/homePageBanner/mainBanner/Banner";
import ProductsBanner from "@/components/organisms/homePageBanner/productsBanner/ProductsBanner";
import LatestNews from "@/components/organisms/latestNews/LatestNews";
import Newsletter from "@/components/organisms/newsLetter/NewsLetter";
import PopularProducts from "@/components/organisms/products/popular/Products";
import Testimonial from "@/components/organisms/testimonial/Testimonial";
import DefaultTemplate from "@/components/templates/defaultTemplate/DefaultTemplate";
import useResponsive from "@/hooks/useResponsive";
import Box from "@mui/material/Box";
import { useStoreActions } from "../../../store/index";
import styles from "./home.module.scss";

const Home = () => {
  const { xsScreen, smScreen, lgScreen } = useResponsive();

  const addData = useStoreActions((actions) => actions.product.addProduct);

  return (
    <DefaultTemplate>
      {/* Main Banner Area */}
      <Banner />

      {/* Featured Area */}
      <Box
        className={`${styles.featuredService} 
        ${smScreen && styles.featuredService__smScreen}
        ${lgScreen && styles.featuredService__lgScreen}
        `}
      >
        <Box className={styles.featuredService__wrapper}>
          <FeaturedService />
        </Box>
      </Box>

      {/* Categories Area */}
      <Box
        className={`${styles.categories} 
        ${smScreen && styles.categories__smScreen}
        `}
      >
        <Box className={styles.categories__wrapper}>
          <Categories />
        </Box>
      </Box>

      {/* Product Area */}
      <Box
        className={`${styles.popularProducts} 
        ${smScreen && styles.popularProducts__smScreen}
        `}
      >
        <Box className={styles.popularProducts__wrapper}>
          <PopularProducts />
        </Box>
      </Box>

      {/* Product Banner */}
      <Box
        className={`${styles.productBanner} 
        ${smScreen && styles.productBanner__smScreen}
        `}
      >
        <Box className={styles.productBanner__wrapper}>
          <ProductsBanner />
        </Box>
      </Box>

      {/* Hot Deals Area */}
      {/* <Box
        className={`${styles.hotDeals} 
        ${smScreen && styles.hotDeals__smScreen}
        `}
      >
        <Box className={styles.hotDeals__wrapper}>
          <HotDeals />
        </Box>
      </Box> */}

      {/* Discount Banner Area */}
      <Box
        className={`${styles.discoverBanner} 
        ${smScreen && styles.discoverBanner__smScreen}
        `}
      >
        <Box className={styles.discoverBanner__wrapper}>
          <DiscountBanner />
        </Box>
      </Box>

      {/* Featured Products Area */}
      {/* <Box
        className={`${styles.featuredProduct} 
        ${smScreen && styles.featuredProduct__smScreen}
        `}
      >
        <Box className={styles.featuredProduct__wrapper}>
          <Featured />
        </Box>
      </Box> */}

      {/* Latest News Area */}
      <Box
        className={`${styles.latestNews} 
        ${smScreen && styles.latestNews__smScreen}
        `}
      >
        <Box className={styles.latestNews__wrapper}>
          <LatestNews />
        </Box>
      </Box>

      {/* Testimonial Area */}
      <Box
        className={`${styles.testimonial} 
        ${smScreen && styles.testimonial__smScreen}
        `}
      >
        <Box className={styles.testimonial__wrapper}>
          <Testimonial />
        </Box>
      </Box>

      {/* Company Area */}
      <Box
        className={`${styles.company} 
        ${smScreen && styles.company__smScreen}
        `}
      >
        <Box className={styles.company__wrapper}>
          <CompanyLogo />
        </Box>
      </Box>

      {/* NewsLetter Area */}
      <Box
        className={`${styles.newsLetter} 
        ${smScreen && styles.newsLetter__smScreen}
        `}
      >
        <Box className={styles.newsLetter__wrapper}>
          <Newsletter />
        </Box>
      </Box>
    </DefaultTemplate>
  );
};

export default Home;
