import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button as MuiButton } from "@mui/material";
import styles from "./button.module.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  arrowIcon?: boolean;
  customStyle?: object;
  screenSize?: string;
  outlined?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  arrowIcon = false,
  customStyle,
  screenSize = "md",
  outlined = false,
}) => {
  return (
    <>
      <MuiButton className={styles.btn} onClick={onClick} sx={customStyle}>
        {text}
        {arrowIcon && <ArrowForwardIcon className={styles.arrowIcon} />}
      </MuiButton>
    </>
  );
};

export default Button;
