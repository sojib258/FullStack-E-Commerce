import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button as MuiButton } from "@mui/material";
import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  arrowIcon?: boolean;
  style?: object;
  screenSize?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  arrowIcon = false,
  style,
  screenSize = "md",
}) => {
  return (
    <MuiButton className={styles.btn} onClick={onClick} sx={style}>
      {text}
      {arrowIcon && <ArrowForwardIcon className={styles.arrowIcon} />}
    </MuiButton>
  );
};

export default Button;
