import React from "react";
import { Box, Grid2 } from "@mui/material";
import { Color } from "../../styles/colors";

interface NumberSquaresProps {
  number: number;
}

const RangeDisplay: React.FC<NumberSquaresProps> = ({ number }) => {
  const maxRange = 10;

  const getRatingColor = (rating: number) => {
    if (rating <= 2) {
      return Color.green;
    } else if (rating <= 8) {
      return Color.darkAmber;
    } else if (rating <= 10) {
      return Color.red;
    } else {
      return Color.lightGray;
    }
  };

  return (
    <Grid2 container spacing={0}>
      {Array.from({ length: maxRange }, (_, index) => index + 1).map((num) => (
        <Grid2 size={12 / maxRange} key={num} sx={{ p: 0, m: 0 }}>
          <Box
            sx={{
              backgroundColor:
                num <= number ? getRatingColor(number) : "lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid gray",
              fontWeight: num <= number ? "bold" : "normal",
            }}
          >
            {num <= number ? num : <>&nbsp;</>}
          </Box>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default RangeDisplay;
