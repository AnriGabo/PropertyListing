import { Box, Divider, Stack, Typography } from "@mui/material";

import BedIcon from "@mui/icons-material/Bed";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { useEffect, useState } from "react";

// დატას ტიპების აღწერა
type Cabin = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  superhost: boolean;
  location: string;
  capacity: {
    people: number;
    bedroom: number;
  };
  image: string;
  chooseCountry: string;
  allCountry: string;
};
type ReusableCardProps = {
  chooseCountry: string;
};

const ReusableCard: React.FC = ({ chooseCountry }: ReusableCardProps) => {
  const [cabinData, setCabinData] = useState<Cabin[]>([]);
  const Url =
    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json";

  const fetchingData = async () => {
    try {
      const response = await fetch(Url);
      const convertToJson = await response.json();
      setCabinData(convertToJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const ModifyDat = cabinData.filter(
    // როცა ვიყენებთ "ან" მეთოდს, ერთ ერთი მხაარე რომც იყოს true, ბრუნდება true
    // მომხმარებელი ფილტრის ბარში აჭერს ხელს allItem
    // state saved this button
    // გადაეცემა props
    // chooseCountry === "All" და აბრუნებს true, და როცა filterbarში არსის true,აბრუნებს ყველა ელემენტს ახალ მასივში
    // და ხდება ყველა ელემენტის დარენდერება

    (Item) => chooseCountry === "All" || Item.location === chooseCountry
  );
  console.log(ModifyDat);

  return (
    <Stack
      sx={{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "4rem",
        marginBlock: "3rem",
      }}
    >
      {/* always use Key props */}
      {ModifyDat.map((Cabin) => (
        <Box key={Cabin.id}>
          <Stack>
            <Box>
              <img
                src={Cabin.image}
                alt="Cabin far away from people"
                style={{ borderRadius: "10px 10px 0px 0px" }}
              />
            </Box>
            <Stack
              sx={{
                border: "2px solid gray",
                borderRadius: "0px 0px 10px 10px",
                borderTop: "none",
                marginTop: "-0.288rem",
              }}
            >
              <Box sx={{ paddingInlineStart: "2rem" }}>
                <Box sx={{ paddingBlockStart: "1rem" }}>
                  <Typography
                    component={"p"}
                    sx={{
                      fontSize: "1.1rem",
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "Lora, serif",
                    }}
                  >
                    {Cabin.title}
                  </Typography>
                </Box>
                <Box sx={{ maxWidth: "19rem", paddingBlockStart: "1rem" }}>
                  <Typography sx={{ fontSize: "0.9rem", color: "gray" }}>
                    {Cabin.description}
                  </Typography>
                </Box>
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: "2rem",
                    alignItems: "center",
                    marginBlock: "1rem",
                    color: "gray",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "0.5rem" }}>
                    <BedIcon />
                    <Typography>{Cabin.capacity.bedroom}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "0.5rem" }}>
                    <PeopleAltIcon />
                    <Typography>{Cabin.capacity.people}</Typography>
                  </Box>
                </Stack>
                <Box
                  sx={{ paddingBlockStart: "0.2rem", paddingInlineEnd: "1rem" }}
                >
                  <Divider
                    orientation="vertical"
                    sx={{ border: "1px solid gray", paddingBlock: "none" }}
                  ></Divider>
                </Box>

                <Stack
                  sx={{
                    flexDirection: "row",
                    marginBlockStart: "1rem",
                    marginBlockEnd: "1rem",
                  }}
                >
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ color: "gray", fontSize: "1.1rem" }}>
                      ${Cabin.price} / night
                    </Typography>
                  </Box>
                  <Box sx={{ paddingInlineEnd: "2rem" }}>
                    <Typography sx={{ color: "gray" }}>
                      {Cabin.rating} 🌟
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default ReusableCard;
