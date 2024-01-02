import Button from "@/components/atoms/button/Button";
import Stock from "@/components/atoms/stockStatus/Stock";
import Quantity from "@/components/molecules/addQuantity/Quantity";
import Rating from "@/components/molecules/ratings/Rating";
import SocialIcon from "@/components/molecules/socialIcons/SocialIcon";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "./quickView.module.scss";

const image = [1, 2, 3, 4];

const QuickView = () => {
  return (
    <>
      <Stack className={styles.quickView}>
        <Box className={styles.quickView__leftContent}>
          <Box className={styles.quickView__sliderSection}>
            {image.map((item, index) => (
              <Image
                key={index}
                width={80}
                height={80}
                src={`/img/${item}.png`}
                alt="This is quickView main image"
                className={styles.quickView__sliderThumbImage}
              />
            ))}
          </Box>
          <Box className={styles.quickView__mainImageSection}>
            <Image
              width={300}
              height={300}
              src={"/img/5.png"}
              alt="This is quickView main image"
              className={styles.quickView__sliderMainImage}
            />
          </Box>
        </Box>
        <Box className={styles.quickView__rightContent}>
          <Typography className={styles.quickView__productTitle}>
            Product Title
            <Stock customStyle={{ marginLeft: "6px" }} inStock />
          </Typography>
          <Rating reviewText readOnly />
          <Typography className={styles.quickView__prices}>
            <Typography className={styles.quickView__price} component={"span"}>
              $50.00
            </Typography>
            <Typography
              className={styles.quickView__discountPrice}
              component={"span"}
            >
              $17.28
            </Typography>
            <Typography
              className={styles.quickView__discount}
              component={"span"}
            >
              20% Off
            </Typography>
          </Typography>
          <Typography className={styles.quickView__description}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
            suscipit officiis dicta molestiae repellendus sed, veritatis maxime
            ducimus officia quaerat. Explicabo ab suscipit enim odio?
          </Typography>
          <Box className={styles.quickView__cartButtonBox}>
            <Quantity />
            <Button
              customStyle={{
                borderRadius: "30px",
                padding: "10px 30px!important",
                width: "100%",
                margin: "18px 12px",
              }}
              text="Add to Cart"
              cartIcon
            />
            <IconButton
              sx={{
                color: "#00b207",
                backgroundColor: "#dffce1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "15px",
              }}
            >
              <Tooltip title="Add Wishlist" arrow>
                <FavoriteBorderOutlinedIcon />
              </Tooltip>
            </IconButton>
          </Box>
          <Typography className={styles.quickView__categoryTitle}>
            Category:{" "}
            <Typography
              component={"span"}
              className={styles.quickView__categoryValue}
            >
              category
            </Typography>
          </Typography>
          <Box className={styles.quickView__shareItems}>
            <Typography className={styles.quickView__shareText}>
              Share item:{" "}
            </Typography>
            <SocialIcon />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default QuickView;
