import Box from "@mui/material/Box";
import Magnifier from "react-magnifier";
import styles from "./quickViewSlider.module.scss";

interface SliderProps {
  imageSrc: string;
}

console.log("HEllo");

const Slider: React.FC<SliderProps> = ({ imageSrc }) => {
  return (
    <>
      <Box className={styles.slider}>
        <Magnifier
          zoomFactor={1}
          src={`${process.env.NEXT_PUBLIC_DOMAIN_NAME}${imageSrc}`}
          width={500}
          className={styles.slider__mainImage}
        />
      </Box>
    </>
  );
};

export default Slider;
