// InputText.tsx
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import "../../../styles/ovverrideMuiStyle.css";
interface SearchInputProps {
  label?: string;
  onChange?: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  value?: string | number;
  type?: "text" | "email" | "password";
  customStyle?: object;
  icon?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  type,
  label,
  icon = false,
  onChange,
  onBlur,
  onFocus,
  customStyle,
}) => {
  return (
    <>
      <Box sx={customStyle} className={icon ? "searchInput" : ""}>
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
            className={"searchInput__icon"}
            width={20}
            height={20}
            src={"/search.svg"}
            alt="search-icon"
          />
        )}
      </Box>
    </>
  );
};

export default SearchInput;
