import Button from "@/components/atoms/button/Button";
import useResponsive from "@/hooks/useResponsive";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "./newsCart.module.scss";
interface newsCartProps {
  title: string;
  tag: string;
  admin: string;
  commentCount: string | number;
  imgSrc: string;
  date: string | number;
  month: string;
  imgAlt?: string;
}
const NewsCart: React.FC<newsCartProps> = ({
  imgSrc,
  imgAlt = "Blog Image",
  tag,
  admin,
  commentCount,
  title,
  date,
  month,
}) => {
  const { smScreen, mdScreen, lgScreen, downLgScreen } = useResponsive();
  const titleLength = downLgScreen ? 45 : 70;
  return (
    <Box
      className={`${styles.newsCart} ${smScreen && styles.newsCart__smScreen} ${
        mdScreen && styles.newsCart__mdScreen
      } ${lgScreen && styles.newsCart__lgScreen}`}
    >
      <Box className={styles.newsCart__header}>
        <Image
          className={styles.newsCart__img}
          width={300}
          height={300}
          src={imgSrc}
          alt={imgAlt}
        />
        <Box className={styles.newsCart__date}>
          <Typography className={styles.newsCart__tarikh}>{date}</Typography>
          <Typography className={styles.newsCart__month}>{month}</Typography>
        </Box>
      </Box>
      <Box className={styles.newsCart__contents}>
        <Box className={styles.newsCart__newsInfo}>
          <Typography className={styles.newsCart__tag}>
            <SellOutlinedIcon className={styles.newsCart__infoIcon} />
            {tag}
          </Typography>
          <Typography className={styles.newsCart__admin}>
            <PermIdentityRoundedIcon
              className={`${styles.newsCart__infoIcon} ${styles.newsCart__infoAdminIcon}`}
            />
            By
            {` ${admin}`}
          </Typography>
          <Typography className={styles.newsCart__comment}>
            <ModeCommentOutlinedIcon className={styles.newsCart__infoIcon} />
            {commentCount} Comment
          </Typography>
        </Box>
        <Typography title={title} className={styles.newsCart__title}>
          {title.length > titleLength
            ? title.slice(0, titleLength) + `...`
            : title}
        </Typography>
      </Box>
      <Box className={styles.newsCart__button}>
        <Button
          customStyle={{
            backgroundColor: "#fff!important",
            color: "#00b207!important",
            boxShadow: "none!important",
            paddingLeft: "0px!important",
          }}
          arrowIcon
          text="Read More"
          sx={{
            fontSize: {
              xs: "12px!important",
              sm: "16px!important",
              md: "12px!important",
              lg: "16px!important",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default NewsCart;
// TODO: Slice Tttle