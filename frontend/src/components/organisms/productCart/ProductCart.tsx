import Button from "@/components/atoms/button/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import React from "react";
import ProductIcon from "../../molecules/productCartIcons/ProductIcons";
import Rating from "../../molecules/ratings/Rating";
import styles from "./productCart.module.scss";

interface productProps {
  src: string | number;
  discountPrice?: boolean;
}

const ProductCart: React.FC<productProps> = ({ src, discountPrice }) => {
  const smallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <Stack
        className={`${styles.productCart} ${
          smallScreen && styles.productCart__smallScreen
        }`}
      >
        <Box className={styles.productCart__header}>
          <Image
            width={200}
            height={100}
            src={`/img/${src}.jpg`}
            alt={"Product Image"}
            className={styles.productCart__image}
          />
        </Box>
        <Box className={styles.productCart__content}>
          <Typography className={styles.productCart__title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Box mb={1}>
            <Rating readOnly />
          </Box>
          <Typography className={styles.productCart__amount}>(2 kg)</Typography>
        </Box>

        <Box className={styles.productCart__footer}>
          <Box sx={{ display: "flex" }}>
            {discountPrice ? (
              <>
                <Typography className={styles.productCart__discountPrice}>
                  <Image
                    width={14}
                    height={14}
                    src={"/icons/taka.png"}
                    alt="Taka Logo"
                    className={styles.productCart__currencyIcon}
                  />
                  20
                </Typography>
                <Typography
                  component={"span"}
                  className={styles.productCart__priceCondition}
                >
                  25
                </Typography>
              </>
            ) : (
              <Typography className={styles.productCart__price}>
                <Image
                  width={14}
                  height={14}
                  src={"/icons/taka.png"}
                  alt="Taka Logo"
                  className={styles.productCart__currencyIcon}
                />
                25
              </Typography>
            )}
          </Box>
          <Button
            customStyle={{
              padding: smallScreen
                ? "2px 6px 2px 6px!important"
                : "4px 12px 4px 10px!important",
              fontSize: smallScreen && "10px!important",
            }}
            plusIcon
            text="Add"
          />
        </Box>
        <Box className={styles.productCart__overlay}>
          <Box className={styles.productCart__hoverIcon}>
            <ProductIcon />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default ProductCart;
