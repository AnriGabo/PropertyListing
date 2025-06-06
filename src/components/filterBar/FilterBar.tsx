import { Stack } from "@mui/material";
import FilterBarList from "./FilterBarList";

const FilterBar = () => {
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
      <FilterBarList />
    
    </Stack>
  );
};

export default FilterBar;
