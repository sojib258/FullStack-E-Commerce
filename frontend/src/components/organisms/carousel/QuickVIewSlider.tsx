import Box from "@mui/material/Box";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./quickViewSlider.module.scss";

const Slider = () => {
  const arr = [
    "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQxeRgrOSr8WxQI3jrPQh6lshkj0CAATCI4Vn-5BXgHA4xL6HcKIMsBo2I4K-3CmMH-Q&usqp=CAU",
    "https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQxeRgrOSr8WxQI3jrPQh6lshkj0CAATCI4Vn-5BXgHA4xL6HcKIMsBo2I4K-3CmMH-Q&usqp=CAU",
  ];

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
          {arr.map((item, index) => (
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
