import { Box, Stack, Typography } from "@mui/material";
import Cabin0 from "../../images/Cabin0.jpg";
import FilterBar from "../filterBar/FilterBar";

const HeaderBackground = () => {
  return (
    <Stack sx={{ gridArea: "background", zIndex: "0" }}>
      <Stack
        sx={{
          backgroundImage: `url(${Cabin0})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            marginInlineStart: "8rem",
            marginBlockStart: "8rem",
            maxWidth: "28rem",
            gap: "3rem",
          }}
        >
          <Typography
            variant={"h2"}
            component={"h2"}
            sx={{ color: "white", fontFamily: "Playfair Display, serif" }}
          >
            Peace, Nature,
          </Typography>
          <Typography
            variant={"h2"}
            component={"h2"}
            sx={{ color: "white", fontFamily: "Playfair Display, serif" }}
          >
            Dream
          </Typography>
          <Typography
            variant={"h5"}
            component={"p"}
            sx={{
              color: "white",
              marginBlockStart: "0.5rem",
              fontFamily: 'Merriweather, serif'
            }}
          >
            Find and Book a great experience
          </Typography>
        </Box>
      </Stack>
      <FilterBar />
    </Stack>
  );
};

export default HeaderBackground;
