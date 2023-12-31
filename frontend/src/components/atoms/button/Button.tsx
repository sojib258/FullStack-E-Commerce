import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button as MuiButton } from "@mui/material";
import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  arrowIcon?: boolean;
  customStyle?: object;
  outlined?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  arrowIcon = false,
  customStyle,
  outlined = false,
}) => {
  return (
    <MuiButton
      className={styles.btn}
      onClick={onClick}
      sx={customStyle}
      variant={outlined ? "outlined" : "contained"}
    >
      {text}
      {arrowIcon && <ArrowForwardIcon className={styles.arrowIcon} />}
    </MuiButton>
  );
};

export default Button;
