import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import styles from "./categoryItem.module.scss";
interface CategoryItemProps {
  imgSrc: string;
  text: string;
}
const CategoryItem: React.FC<CategoryItemProps> = ({ imgSrc, text }) => {
  return (
    <Box className={styles.category}>
      <Image
        className={styles.category__img}
        width={200}
        height={150}
        src={imgSrc}
        alt="Category Image"
      />
      <Typography className={styles.category__text}>{text}</Typography>
    </Box>
  );
};

export default CategoryItem;
