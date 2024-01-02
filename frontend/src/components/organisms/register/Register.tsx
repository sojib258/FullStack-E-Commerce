import InputText from "@/components/atoms/inputText/InputText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import AtomButton from "../../atoms/button/Button";
import styles from "./register.module.scss";

const Register = () => {
  const smallScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box
        className={`${styles.register} ${
          smallScreen && styles.register_smallScreen
        } ${smallScreen && "register_smallScreen"} register`}
      >
        <Box component={"form"}>
          <Typography className={styles.register__text}>
            Create Account
          </Typography>
          <InputText
            customStyle={{ marginBottom: "12px" }}
            type="email"
            label="Email"
          />
          <InputText
            customStyle={{ marginBottom: "12px" }}
            type="password"
            label="Password"
          />
          <InputText
            customStyle={{ marginBottom: "16px" }}
            type="password"
            label="Confirm Password"
          />
          <FormGroup className={styles.register__checkboxGroup}>
            <FormControlLabel
              sx={{ fontSize: ".8rem" }}
              control={<Checkbox defaultChecked />}
              label="Accept all terms & Condition"
            />
          </FormGroup>
          <AtomButton
            customStyle={{
              width: "100%",
              borderRadius: "25px",
              marginBottom: "20px",
            }}
            text="Register"
          />
          <Typography className={styles.register__haveAccount}>
            Already have account?
            <Button className={styles.register__registerBtn}>Login</Button>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Register;
