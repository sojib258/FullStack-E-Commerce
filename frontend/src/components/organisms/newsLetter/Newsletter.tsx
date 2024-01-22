import NewsletterForm from "@/components/molecules/newsLetterFrom/NewsletterForm";
import SocialIcon from "@/components/molecules/socialIcons/SocialIcon";
import useResponsive from "@/hooks/useResponsive";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "./newsLetter.module.scss";
const Newsletter = () => {
  const { mdScreen } = useResponsive();
  return (
    <Grid
      className={`${styles.newsLetter} ${
        mdScreen && styles.newsLetter__mdScreen
      }`}
      justifyContent={"center"}
      alignItems={"center"}
      container
    >
      <Grid
        xs={12}
        md={5}
        item
        mb={{ xs: 3, sm: 5, md: 0 }}
        mr={{ sm: 0, md: "auto" }}
      >
        <Box className={styles.newsLetter__textArea}>
          <Typography component="h2" className={styles.newsLetter__head}>
            Subcribe our Newsletter
          </Typography>
          <Typography component="p" className={styles.newsLetter__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eaque
            animi totam culpa! Blanditiis!
          </Typography>
        </Box>
      </Grid>
      <Grid
        xs={12}
        sm={8}
        md={4}
        item
        mb={{ xs: 3, sm: 0 }}
        mr={{ sm: "auto", md: 2 }}
      >
        <NewsletterForm />
      </Grid>
      <Grid item>
        <SocialIcon />
      </Grid>
    </Grid>
  );
};

export default Newsletter;
