import Button from "@/components/atoms/button/Button";
import useResponsive from "@/hooks/useResponsive";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "./banner.module.scss";

const Banner = () => {
  const { smScreen, mdScreen, lgScreen } = useResponsive();
  return (
    <>
      <Box
        className={`${styles.banner}
        ${smScreen && styles.banner__smallScreen}
        ${mdScreen && styles.banner__mediumScreen}
        ${lgScreen && styles.banner__largeScreen}
        `}
      >
        <Grid container>
          <Grid className={styles.banner__leftContentGrid} item xs={12} sm={7}>
            <Box className={styles.banner__leftContent}>
              <Typography className={styles.banner__welcome}>
                Welcome to pitha-mitha
              </Typography>
              <Typography variant="h2" className={styles.banner__title}>
                Unveiling Culinary Wonders in Every Bite
              </Typography>
              <Typography className={styles.banner__description}>
                Delivered fresh to your doorstep, so you can savor the magic
                without leaving your home. we deliver, you enjoy!
              </Typography>
              <Box>
                <Button arrowIcon text="Shop Now" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box className={styles.banner__rightContent}>
              <Image
                className={styles.banner__Img}
                width={800}
                height={800}
                src={"/img/bannerImg.png"}
                alt="Banner Image"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Banner;
