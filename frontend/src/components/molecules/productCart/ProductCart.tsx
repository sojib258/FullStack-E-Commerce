import Button from "@/components/atoms/button/Button";
import useResponsive from "@/hooks/useResponsive";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import ProductIcon from "../productCartIcons/ProductIcons";
import Rating from "../ratings/Rating";
import styles from "./productCart.module.scss";

interface productProps {
  imgSrc: string;
  imgAlt?: string;
  title: string;
  price: string | number;
  discountPrice?: string | number;
  value: number;
}

const ProductCart: React.FC<productProps> = ({
  imgSrc,
  imgAlt = "Product Image",
  price,
  discountPrice,
  title,
  value,
}) => {
  const { downMdScreen, downSmScreen } = useResponsive();

  return (
    <>
      <Box
        className={`${styles.productCart} ${
          downMdScreen && styles.productCart__mdScreen
        }`}
      >
        <Box className={styles.productCart__header}>
          <Image
            width={200}
            height={100}
            src={imgSrc}
            alt={imgAlt}
            className={styles.productCart__image}
          />

          {/* For Hover Overlay */}
          <Box className={styles.productCart__overlay}>
            <Box className={styles.productCart__hoverIcon}>
              <ProductIcon />
            </Box>
          </Box>
        </Box>
        <Box className={styles.productCart__content}>
          <Typography className={styles.productCart__title}>{title}</Typography>
          <Box mb={1}>
            <Rating
              fontSize={downSmScreen ? "15px!important" : "18px!important"}
              value={value}
              readOnly
            />
          </Box>
          <Typography className={styles.productCart__amount}>(2 kg)</Typography>
        </Box>

        <Box className={styles.productCart__footer} sx={{ marginTop: "auto" }}>
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
                  {discountPrice}
                </Typography>
                <Typography
                  component={"span"}
                  className={styles.productCart__priceCondition}
                >
                  {price}
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
                {price}
              </Typography>
            )}
          </Box>
          <Button
            customStyle={{
              padding: downMdScreen
                ? "2px 6px 2px 6px!important"
                : "4px 12px 4px 10px!important",
              fontSize: downMdScreen && "10px!important",
            }}
            plusIcon
            text="Add"
          />
        </Box>
      </Box>
    </>
  );
};

export default ProductCart;
