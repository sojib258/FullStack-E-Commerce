// InputText.tsx
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import styles from "./inputText.module.scss";

interface SearchInputProps {
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  value?: string | number;
  type?: "text" | "password";
  customStyle?: object;
}

const SearchInput: React.FC<SearchInputProps> = ({
  label,
  value,
  type,
  onChange,
  onBlur,
  onFocus,
  customStyle,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
    onFocus && onFocus();
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!value) {
      setFocused(false);
    }
    onBlur && onBlur(e);
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
        style={customStyle}
      />
    </div>
  );
};

export default SearchInput;
