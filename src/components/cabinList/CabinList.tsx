import { Box, Stack, Typography } from "@mui/material";
// import ReusableCard from "./ReusableCard";

const CabinList = () => {

  return (
    <Stack
      sx={{ gridArea: "main", marginInline: "8rem", marginBlockStart: "4rem" }}
    >
      <Box sx={{marginBlockStart:"3rem"}}>
        <Typography variant={"h6"} component={"p"} sx={{ color: "white" }}>
          Over 200 stays
        </Typography>
      </Box>
      {/* fetch api */}
      {/* <ReusableCard /> */}
    </Stack>
  );
};

export default CabinList;
