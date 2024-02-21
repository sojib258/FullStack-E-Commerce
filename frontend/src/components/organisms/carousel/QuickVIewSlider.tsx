"use client";
import Box from "@mui/material/Box";
import Image from "next/image";
import styles from "./quickViewSlider.module.scss";

interface SliderProps {
  imageSrc: string;
}

const Slider: React.FC<SliderProps> = ({ imageSrc }) => {
  return (
    <>
      <Box className={styles.slider}>
        <Image
          className={styles.slider__image}
          width={600}
          height={600}
          alt="Product Image"
          src={imageSrc}
        />
      </Box>
    </>
  );
};

export default Slider;
