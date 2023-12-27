import Button from "@/components/atoms/button/Button";
import SearchInput from "@/components/atoms/inputText/SearchInput";
import Stack from "@mui/material/Stack";

interface SearchBarProps {
  label: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ label }) => {
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <SearchInput
          customStyle={{ borderRadius: "4px 0px 0px 4px!important" }}
          label={label}
        />
        <Button
          customStyle={{ borderRadius: "0px 4px 4px 0px!important" }}
          text="Search"
        />
      </Stack>
    </>
  );
};

export default SearchBar;
