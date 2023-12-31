import InputText from "@/components/atoms/inputText/InputText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import AtomButton from "../../atoms/button/Button";
import styles from "./login.module.scss";
const Login = () => {
  const smallScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Box
        className={`${styles.login} ${
          smallScreen && styles.login_smallScreen
        } ${smallScreen && "login_smallScreen"}`}
      >
        <Box component={"form"}>
          <Typography className={styles.login__text}>Sign In</Typography>
          <InputText
            customStyle={{ marginBottom: "12px" }}
            type="email"
            label="Email"
            icon
          />
          <InputText
            customStyle={{ marginBottom: "16px" }}
            type="password"
            label="Password"
          />
          <FormGroup className={styles.login__checkboxGroup}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Keep me looged in"
            />
            <Button
              sx={{ display: { xs: "none", sm: "block" } }}
              variant="text"
              className={styles.login__forget}
            >
              Forget Password?
            </Button>
          </FormGroup>
          <AtomButton
            customStyle={{
              width: "100%",
              borderRadius: "25px",
              marginBottom: "20px",
            }}
            text="Log in"
          />
          <Button
            sx={{
              textAlign: "left",
              padding: "0px",
              marginBottom: "20px",
              display: { xs: "block", sm: "none" },
            }}
            variant="text"
            className={styles.login__forget}
          >
            Forget Password?
          </Button>
          <Typography className={styles.login__haveAccount}>
            Don't have account?
            <Button className={styles.login__registerBtn}>Register</Button>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Login;
