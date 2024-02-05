import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./quickViewSlider.module.scss";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <>
      <Box className={styles.slider}>
        <Carousel
          showArrows={false}
          showIndicators={false}
          autoPlay={false}
          className={styles.slider__carousel}
          thumbWidth={150}
          autoFocus={false}
          useKeyboardArrows={true}
          transitionTime={700}
        >
          {images.map((item, index) => (
            <Box
              className={styles.slider__imageWrapper}
              component={"div"}
              key={index}
            >
              <img className={styles.slider__img} src={item} alt={item} />
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default Slider;
