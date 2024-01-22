import useResponsive from "@/hooks/useResponsive";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "./featuredItem.module.scss";

interface FeaturedItemProps {
  iconSrc: string;
  title: string;
  description: string;
  altText: string;
}
const FeaturedItem: React.FC<FeaturedItemProps> = ({
  iconSrc,
  title,
  description,
  altText,
}) => {
  const { smScreen, mdScreen, lgScreen } = useResponsive();

  return (
    <Box
      className={`${styles.featured}
    ${smScreen && styles.featured__smallScreen}
    ${mdScreen && styles.featured__mediumScreen}
    ${lgScreen && styles.featured__largeScreen}
    `}
    >
      <Image
        className={styles.featured__icon}
        width={100}
        height={100}
        src={iconSrc}
        alt={altText}
      />
      <Box>
        <Typography className={styles.featured__title}>{title}</Typography>
        <Typography className={styles.featured__description}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default FeaturedItem;
