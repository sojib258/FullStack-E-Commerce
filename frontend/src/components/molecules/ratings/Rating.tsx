import { Rating as MuiRating } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import styles from "./rating.module.scss";

interface ratinProps {
  readOnly?: boolean;
  customStyle?: object;
  reviewText?: boolean;
}

const Rating: React.FC<ratinProps> = ({
  readOnly = false,
  customStyle,
  reviewText = false,
}) => {
  const [value, setValue] = useState<number | null>(4);
  const smallScreen = useMediaQuery("(max-width: 600px");

  return (
    <Box
      className={`${styles.rating} ${
        smallScreen && "rating__smallScreen"
      } rating`}
      style={customStyle}
    >
      <MuiRating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        readOnly={readOnly}
      />
      {reviewText && (
        <Typography className={styles.rating__reviewText}>
          (4 Review)
        </Typography>
      )}
    </Box>
  );
};

export default Rating;
