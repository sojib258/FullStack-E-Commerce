import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import styles from "./quantity.module.scss";
const Quantity: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const handleIncrementValue = () => {
    setValue(value + 1);
  };
  const handleDecrementValue = () => {
    setValue(value - 1);
  };

  return (
    <>
      <Stack className={styles.quantity}>
        <IconButton
          className={styles.quantity__btn}
          onClick={handleDecrementValue}
          disabled={value <= 0}
        >
          <RemoveIcon />
        </IconButton>
        <Typography className={styles.quantity__value}>{value}</Typography>
        <IconButton
          className={styles.quantity__btn}
          onClick={handleIncrementValue}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </>
  );
};

export default Quantity;
