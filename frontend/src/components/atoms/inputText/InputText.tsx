// InputText.tsx
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import "../../../styles/ovverrideMuiStyle.css";
import styles from "./inputText.module.scss";
interface InputTextProps {
  label?: string;
  onChange?: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  value?: string | number;
  type?: "text" | "email" | "password";
  customStyle?: object;
  icon?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  value,
  type,
  label,
  icon = false,
  onChange,
  onBlur,
  onFocus,
  customStyle,
}) => {
  const smallScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box
        sx={customStyle}
        className={`${styles.inputText} ${icon && "inputText2"} ${
          smallScreen && "inputTextSmallScreen"
        }`}
      >
        <TextField
          className="atom-text-field"
          label={label}
          variant="outlined"
          onChange={(e) => onChange && onChange(e.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          type={type}
        />
        {icon && (
          <Image
            className={`${styles.inputText__searchIcon} ${
              smallScreen && styles.inputText__searchIcon_smallScreen
            }`}
            width={20}
            height={20}
            src={"/icons/search.svg"}
            alt="search-icon"
          />
        )}
        {type === "password" && (
          <Image
            className={`${styles.inputText__eyeIcon} ${
              smallScreen && styles.inputText__eyeIcon_smallScreen
            }`}
            width={20}
            height={20}
            src={"/icons/eye.svg"}
            alt="search-icon"
          />
        )}
      </Box>
    </>
  );
};

export default InputText;
