// InputText.tsx
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import styles from "./inputText.module.scss";

interface InputProps {
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  value?: string | number;
  type?: "text" | "password";
}

const InputText: React.FC<InputProps> = ({
  label,
  value,
  type,
  onChange,
  onBlur,
  onFocus,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
    onFocus && onFocus();
  };

  const handleBlur = () => {
    setFocused(!!value || false); // Update focused based on whether value is present
    onBlur && onBlur();
  };

  return (
    <div className={`${styles.input} ${focused ? styles.focused : ""}`}>
      <label className={styles.input__label} htmlFor="input">
        {label}
      </label>
      <SearchIcon className={styles.input__searchIcon} />
      <input
        className={styles.input__text}
        id="input"
        type={type}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={value}
      />
    </div>
  );
};

export default InputText;
