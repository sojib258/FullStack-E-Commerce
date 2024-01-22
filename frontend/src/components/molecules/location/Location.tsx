import SearchInput from "@/components/atoms/inputText/InputText";
import useResponsive from "@/hooks/useResponsive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import styles from "./location.module.scss";

const Location: React.FC = () => {
  const { downSmScreen } = useResponsive();
  const [expanded, setExpanded] = useState<string | false>(false);
  const [locationValue, setLocationValue] = useState<string>("");
  const [searchLocationValue, setSearchLocationValue] = useState<string>("");

  interface locationItem {
    name: string;
    districts: string[];
  }

  const handleLocationValue = (value: string): void => {
    setLocationValue(value);
  };

  const handleSearchValue = (value: string) => {
    setSearchLocationValue(value);
  };

  const locations: locationItem[] = [
    {
      name: "Dhaka",
      districts: [
        "Kishoreganj",
        "Gazipur",
        "Gopalganj",
        "Tangail",
        "Dhaka",
        "Narsingdi",
        "Narayanganj",
        "Faridpur",
        "Madaripur",
        "Manikganj",
        "Munshiganj",
        "Rajbari",
        "Shariatpur",
      ],
    },
    {
      name: "Chittagong",
      districts: [
        "Bandarban",
        "Brahmanbaria",
        "Chandpur",
        "Chittagong",
        "Comilla",
        "Cox's Bazar",
        "Feni",
        "Khagrachhari",
        "Lakshmipur",
        "Noakhali",
        "Rangamati",
      ],
    },
    {
      name: "Barishal",
      districts: [
        "Barguna",
        "Barisal",
        "Bhola",
        "Jhalokati",
        "Patuakhali",
        "Pirojpur",
      ],
    },
    {
      name: "Khulna",
      districts: [
        "Bagerhat",
        "Chuadanga",
        "Jessore",
        "Jhenaidaha",
        "Khulna",
        "Kushtia",
        "Magura",
        "Meherpur",
        "Narail",
        "Satkhira",
      ],
    },
    {
      name: "Rajshahi",
      districts: [
        "Bogura",
        "Joypurhat",
        "Naogaon",
        "Natore",
        "Nawabganj",
        "Pabna",
        "Rajshahi",
        "Sirajganj",
      ],
    },
    {
      name: "Rangpur",
      districts: [
        "Dinajpur",
        "Gaibandha",
        "Kurigram",
        "Lalmonirhat",
        "Nilphamari",
        "Panchagarh",
        "Rangpur",
        "Thakurgaon",
      ],
    },
    {
      name: "Sylhet",
      districts: ["Habiganj", "Maulvi Bazar", "Sunamganj", "Sylhet"],
    },
    {
      name: "Mymensingh",
      districts: ["Jamalpur", "Sherpur", "Netrokona"],
    },
  ];

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Box
      className={`${styles.location} ${
        downSmScreen && styles.location_smallScreen
      } location`}
    >
      <Typography
        sx={{
          fontSize: "1.1rem",
          color: "#1a1a1a",
          fontWeight: "500",
          marginBottom: "15px",
        }}
      >
        Choose your Location
      </Typography>
      <SearchInput
        customStyle={{ marginBottom: "25px" }}
        label="Search your area"
        icon={true}
        onChange={handleSearchValue}
      />
      {locations.map((item, index) => (
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          key={index}
          className={styles.location__Item}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={{ borderRight: "none" }}
          >
            <LocationOnIcon
              sx={{ fontSize: "1.3rem", marginTop: "2px", color: "green" }}
            />
            <Typography sx={{ marginLeft: "3px" }}>
              {item.name} Division
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            {item.districts.map((district, districtId) => (
              <Stack
                key={districtId}
                direction={"column"}
                alignItems={"flex-start"}
              >
                <Button
                  sx={{
                    color: "black",
                    textTransform: "none",
                    justifyContent: "flex-start",
                  }}
                  variant="text"
                  onClick={() => handleLocationValue(district)}
                >
                  {district}
                </Button>
              </Stack>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
      {searchLocationValue && (
        <Box
          sx={{
            position: "absolute",
            top: "120px",
            left: "0px",
            background: "#fff",
            padding: "0px 25px",
          }}
        >
          {locations.map((division) =>
            division.districts.map((districts, index) => (
              <Button
                sx={{
                  color: "black",
                  textTransform: "none",
                  margin: "5px",
                  padding: "5px",
                  fontSize: ".7rem",
                  border: "1px solid #2b572e",
                  // TODO: hover
                }}
                variant={"outlined"}
                onClick={() => handleLocationValue(districts)}
              >
                {districts}
              </Button>
            ))
          )}
        </Box>
      )}
    </Box>
  );
};

export default Location;
