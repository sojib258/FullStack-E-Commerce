import Button from "@/components/atoms/button/Button";
import Stock from "@/components/atoms/stockStatus/Stock";
import Quantity from "@/components/molecules/addQuantity/Quantity";
import Rating from "@/components/molecules/ratings/Rating";
import SocialIcon from "@/components/molecules/socialIcons/SocialIcon";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slider from "../carousel/QuickVIewSlider";
import styles from "./quickView.module.scss";

const image = [1, 2, 3, 4];

interface quickViewProps {
  discountPrice?: boolean;
}

const QuickView: React.FC<quickViewProps> = ({ discountPrice }) => {
  const theme = useTheme();
  const mdToLg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const smallScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Grid
        spacing={2}
        container
        className={`${styles.quickView} ${
          mdToLg && styles.quickView__mdToLg_screen
        } ${smallScreen && styles.quickView__smallScreen} quickView`}
      >
        {/* Left Slider Section */}
        <Grid item xs={12} md={6} className={styles.quickView__leftContent}>
          <Slider />
        </Grid>

        {/* Right Content Section */}
        <Grid xs={12} md={6} item className={styles.quickView__rightContent}>
          {/* Product Title */}
          <Typography className={styles.quickView__productTitle}>
            Product Title
            <Stock customStyle={{ marginLeft: "6px" }} inStock />
          </Typography>

          {/* Rating Component */}
          <Rating reviewText readOnly />

          {/* Price Area */}
          <Typography className={styles.quickView__prices}>
            {discountPrice ? (
              <>
                <Typography
                  className={styles.quickView__priceCondition}
                  component={"span"}
                >
                  $50.00
                </Typography>
                <Typography
                  className={styles.quickView__discountPrice}
                  component={"span"}
                >
                  $17.28
                </Typography>
              </>
            ) : (
              <Typography
                className={styles.quickView__price}
                component={"span"}
              >
                $50.00
              </Typography>
            )}
            <Typography
              className={styles.quickView__discount}
              component={"span"}
            >
              20% Off
            </Typography>
          </Typography>

          {/* Product Description Area */}
          <Typography className={styles.quickView__description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            suscipit officiis dicta molestiae repellendus sed, veritatis maxime
            ducimus officia quaerat. Explicabo ab suscipit enim odio?
          </Typography>

          {/* Product Actions Area */}
          <Box className={styles.quickView__cartButtonBox}>
            {/* Product Quantity Action */}
            <Quantity
              smallScreen={smallScreen ? true : false}
              mediumScreen={mdToLg ? true : false}
            />

            {/* Product Add Cart Button Action */}
            <Button
              customStyle={{
                width: "100%",
                margin: smallScreen ? "18px 4px" : "18px 12px",
                padding: smallScreen ? "4px 4px!important" : "10px",
                fontSize: smallScreen ? "8px!important" : "14px",
              }}
              mediumScreen={mdToLg ? true : false}
              smallScreen={smallScreen ? true : false}
              text="Add to Cart"
              cartIcon={!smallScreen ? true : false}
            />

            {/* Product Add Wishlist Button Action */}
            <IconButton className={styles.quickView__wishListIcon}>
              <Tooltip title="Add Wishlist" arrow>
                <FavoriteBorderOutlinedIcon />
              </Tooltip>
            </IconButton>
          </Box>

          {/* Product Category Area */}
          <Typography className={styles.quickView__categoryTitle}>
            Category:{" "}
            <Typography
              component={"span"}
              className={styles.quickView__categoryValue}
            >
              category
            </Typography>
          </Typography>

          {/* Product Share Icons */}
          <Box className={styles.quickView__shareItems}>
            <Typography className={styles.quickView__shareText}>
              Share item:{" "}
            </Typography>
            <SocialIcon />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default QuickView;
