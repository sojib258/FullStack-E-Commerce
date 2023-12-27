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

const Location: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [locationValue, setLocationValue] = useState<string>("");

  interface locationItem {
    name: string;
    districts: string[];
  }

  const handleLocationValue = (value: string): void => {
    setLocationValue(value);
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
    <Box sx={{ border: "1px solid #e6e6e6", maxWidth: "300px" }}>
      {locations.map((item, index) => (
        <Accordion
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          key={index}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <LocationOnIcon
              sx={{ fontSize: "1.3rem", marginTop: "2px", color: "green" }}
            />
            <Typography sx={{ marginLeft: "3px" }}>{item.name}</Typography>
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
    </Box>
  );
};

export default Location;
