import Button from "@/components/atoms/button/Button";
import QuickView from "@/components/organisms/quickView/QuickView";
import useResponsive from "@/hooks/useResponsive";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React, { useState } from "react";
import ProductIcon from "../productCartIcons/ProductIcons";
import Rating from "../ratings/Rating";
import styles from "./productCart.module.scss";

interface Image {
  id: string | number;
  width: number;
  height: number;
  url: string;
  alternativeText?: string | undefined;
}

interface productProps {
  images: Image[];
  title: string;
  price: number;
  discountPrice?: number;
  ratingValue?: number;
  description?: string;
  category?: string;
}

const ProductCart: React.FC<productProps> = ({
  images,
  price,
  discountPrice,
  title,
  ratingValue,
  description,
  category,
}) => {
  const { downMdScreen, downSmScreen } = useResponsive();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
            src={`${process.env.NEXT_PUBLIC_DOMAIN_NAME}${images[0].url}`}
            alt={"imgAlt"}
            className={styles.productCart__image}
          />

          {/* For Hover Overlay */}
          <Box className={styles.productCart__overlay}>
            <Box className={styles.productCart__hoverIcon}>
              <ProductIcon handleOpen={handleOpen} />
            </Box>
          </Box>
        </Box>
        <Box className={styles.productCart__content}>
          <Typography className={styles.productCart__title}>{title}</Typography>
          <Box mb={1}>
            <Rating
              fontSize={downSmScreen ? "15px!important" : "18px!important"}
              value={ratingValue}
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
                  <Typography
                    component={"span"}
                    className={styles.productCart__currencyIcon}
                  >
                    &#2547;
                  </Typography>
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
                <Typography
                  component={"span"}
                  className={styles.productCart__currencyIcon}
                >
                  &#2547;
                </Typography>
                {price}
              </Typography>
            )}
          </Box>
          <Button
            customStyle={{
              fontSize: downMdScreen && "10px",
              padding: downMdScreen && "8px 10px",
            }}
            plusIcon
            text="Add"
          />
        </Box>
      </Box>
      {open && (
        <QuickView
          description={description}
          price={price}
          discountPrice={discountPrice}
          productTitle={title}
          ratingValue={ratingValue}
          category={category}
          handleClose={handleClose}
          open={open}
          images={images}
        />
      )}
    </>
  );
};

export default ProductCart;
