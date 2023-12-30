import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./navbarIcon.module.scss";
const NavbarIcon = () => {
  const smallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Box
      className={smallScreen ? styles.navbarIcon : ""}
      sx={{ display: "flex", alignItems: "center" }}
    >
      {/* WishList Icon ================== */}
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
        sx={{ marginRight: "10px", "&:hover": { backgroundColor: "#e6e6e6" } }}
        title="wishlist"
      >
        <Badge badgeContent={4} color="success">
          <FavoriteBorderIcon sx={{ color: "#1a1a1a" }} />
        </Badge>
      </IconButton>

      {/* Shopping Cart Icon =================== */}
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
        sx={{
          marginRight: "20px",
          "&:hover": { backgroundColor: "#e6e6e6" },
        }}
        title="cart item"
      >
        <Badge badgeContent={17} color="success" sx={{}}>
          <ShoppingCartOutlinedIcon sx={{ color: "#1a1a1a" }} />
        </Badge>
      </IconButton>

      {/* Login Button ================= */}
      <Button
        sx={{
          backgroundColor: "#00b207",
          padding: "6px 15px",
          boxShadow: "none",
          height: { xs: "30px", sm: "40px", md: "45px" },
          fontSize: { xs: ".7rem", sm: ".8rem", md: ".9rem" },
          textTransform: "none",
          "&:hover": { backgroundColor: "#2c742f" },
        }}
        variant="contained"
      >
        <PersonIcon sx={{ fontSize: "1.2rem" }} />
        Login
      </Button>
    </Box>
  );
};

export default NavbarIcon;