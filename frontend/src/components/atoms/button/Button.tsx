import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button as MuiButton } from "@mui/material";
import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  onChange?: () => void;
  onBlur?: () => void;
  arrowIcon?: boolean;
  style?: object;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  onChange,
  onBlur,
  arrowIcon,
  style,
}) => {
  return (
    <MuiButton
      className={styles.btn}
      onClick={onClick}
      onChange={onChange}
      onBlur={onBlur}
      sx={style}
    >
      {text}
      {arrowIcon && <ArrowForwardIcon className={styles.arrowIcon} />}
    </MuiButton>
  );
};

export default Button;
