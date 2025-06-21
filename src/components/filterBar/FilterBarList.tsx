import { Box, Button, Stack } from "@mui/material";

interface chooseCountryProps {
  updateCountry: React.Dispatch<React.SetStateAction<string>>;
}
const FilterBarList = ({
  updateCountry,
}: chooseCountryProps) => {
  // როცა ღილაკს დააწვება ტიპი მინდა რომ აფდეითს აკეთებდეს და ეს updateCountry aris parrent setCountry
  return (
    <Stack
      sx={{
        backgroundColor:"#00416A",
        flexDirection: "row",
        alignItems: "center",
        paddingInline: "3.5rem",
        borderRadius: "10px",
        marginInline: "8rem",
        zIndex: "1000",
        marginTop: "-4rem",
      }}
    >
    <Stack
      sx={{
        flex: 1,
        flexDirection: "row",
        gap: "1rem",
        paddingBlock: "2.5rem",
      }}
    >
      <Box>
        <Button
          onClick={() => updateCountry("All")}
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
        <Button
          onClick={() => updateCountry("Norway")}
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
        <Button
          onClick={() => updateCountry("Finland")}
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
        <Button
          onClick={() => updateCountry("Sweden")}
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
        <Button
          onClick={() => updateCountry("Switzerland")}
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
    </Stack>
    </Stack>
  );
};

export default FilterBarList;


    
