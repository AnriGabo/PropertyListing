import { Box, Button, Stack } from "@mui/material";

const FilterBarList = () => {
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
        <Button
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
  );
};

export default FilterBarList;
