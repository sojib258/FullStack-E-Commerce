import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button as MuiButton } from "@mui/material";
import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  arrowIcon?: boolean;
  cartIcon?: boolean;
  plusIcon?: boolean;
  customStyle?: object;
  outlined?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  arrowIcon = false,
  cartIcon = false,
  plusIcon = false,
  customStyle,
  outlined = false,
}) => {
  return (
    <MuiButton
      className={styles.atomBtn}
      onClick={onClick}
      sx={customStyle}
      variant={outlined ? "outlined" : "contained"}
    >
      {plusIcon && <AddIcon className={styles.atomBtn__addIcon} />}
      {text}
      {arrowIcon && <ArrowForwardIcon className={styles.atomBtn__arrowIcon} />}
      {cartIcon && (
        <ShoppingCartOutlinedIcon className={styles.atomBtn__cartIcon} />
      )}
    </MuiButton>
  );
};

export default Button;
