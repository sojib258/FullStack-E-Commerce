import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import NavbarIcon from "../molecules/navbarIcon/NavbarIcon";
import SearchBar from "../molecules/searchBar/SearchBar";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const mediumScreen = useMediaQuery("(min-width:900px)");
  const smallScreen = useMediaQuery("(min-width:600px)");

  console.log("Sm", smallScreen);
  // ${!smallScreen && styles.navbarSm}
  return (
    <Box className={styles.navbar}>
      <AppBar position="static">
        <Toolbar>
          {!mediumScreen && (
            <IconButton
              size="large"
              edge="start"
              color="success"
              aria-label="open drawer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="red"
                viewBox="0 0 16 16"
                className={`${styles.navbar__menu} ${
                  !smallScreen && styles.navbar__menu_sm
                }`}
              >
                <path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
              </svg>
            </IconButton>
          )}
          {/* Logo =============================== */}
          <Image
            className={`${styles.navbar__logoImg} ${
              !smallScreen && styles.navbar__logoImg_sm
            }`}
            width={250}
            height={40}
            src={"/PithaMitha4.png"}
            alt="Logo Image"
          />

          {/* Search Bar =============================== */}
          {mediumScreen && (
            <SearchBar
              customStyle={{ width: { xs: "100%", lg: "500px" } }}
              label="Search Products"
              icon
            />
          )}

          <Box sx={{ flexGrow: 1 }} />
          <NavbarIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
