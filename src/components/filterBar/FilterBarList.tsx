import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import ReusableCard from "../cabinList/ReusableCard";

const   FilterBarList = () => {

  const [country,setCountry] = useState("");
  const [allCountry ,setAllCountry] = useState("");

  
  
  // console.log(country);


  return (
    <Stack
      sx={{
        flex: 1,
        flexDirection: "row",
        gap: "1rem",
        paddingBlock: "2.5rem",
      }}
    >
      <Box>
        <Button onClick={() => setAllCountry("All")}
          variant="contained"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "#606060",
            fontFamily: "Playfair Display, serif",
          }}
        >
          All Stays
        </Button>
      </Box>
      <Box>
        <Button onClick={() => setCountry("Norway")}
          sx={{
            color: "white",
            textTransform: "capitalize",
            fontWeight: "bold",
            fontFamily: "Playfair Display, serif",
          }}
        >
          Norway
        </Button>
      </Box>
      <Box>
        <Button onClick={() => setCountry("Finland")}
          sx={{
            color: "white",
            textTransform: "capitalize",
            fontWeight: "bold",
            fontFamily: "Playfair Display, serif",
          }}
        >
          Finland
        </Button>
      </Box>
      <Box>
        <Button onClick={() => setCountry("Sweden")}
          sx={{
            color: "white",
            textTransform: "capitalize",
            fontWeight: "bold",
            fontFamily: "Playfair Display, serif",
          }}
        >
          Sweden
        </Button>
      </Box>
      <Box>
        <Button onClick={() => setCountry("Switzerland")}
          sx={{
            color: "white",
            textTransform: "capitalize",
            fontWeight: "bold",
            fontFamily: "Playfair Display, serif",
          }}
        >
          Switzerland
        </Button>
      </Box>
      <ReusableCard  chooseCountry={country} allCountry={allCountry}/>
    </Stack>
  );
};

export default FilterBarList;
