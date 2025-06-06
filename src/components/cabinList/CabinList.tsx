import { Box, Stack, Typography } from "@mui/material";
import ReusableCard from "./ReusableCard";

const CabinList = () => {
  // აქ შევქმნათ სთეითი,რომელსაც გააკონტროლებს იქით შვილი კომპოენნტი, დაბრუნებული პასუხის მიხედვით რენდერდებოს ეს მხოლოდ
  // true ღილაკზე

  return (
    <Stack
      sx={{ gridArea: "main", marginInline: "8rem", marginBlockStart: "4rem" }}
    >
      <Box>
        <Typography variant={"h6"} component={"p"} sx={{ color: "white" }}>
          Over 200 stays
        </Typography>
      </Box>
      {/* fetch api */}
      <ReusableCard />
    </Stack>
  );
};

export default CabinList;
