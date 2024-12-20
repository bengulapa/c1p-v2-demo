import { Button, Grid2, Stack } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";
import MandatoryChecklist from "./MandatoryChecklist";
import StatusCard from "./StatusCard";
import GoalsChecklist from "./GoalsChecklist";

const Overview = () => {
  const context: any = useOutletContext();
  const loan = context.loan;
  const [score, setScore] = React.useState(loan.recommendationScore);

  const updateScore = (value: number) => {
    setScore(score + value);
  };

  return (
    <>
      <StatusCard loan={loan} />

      <Grid2 container spacing={1}>
        <Grid2 size={6}>
          <MandatoryChecklist loan={loan} />
        </Grid2>
        <Grid2 size={6}>
          <GoalsChecklist loan={loan} />
        </Grid2>
      </Grid2>

      <Stack direction="row" justifyContent="end" spacing={1}>
        <Button variant="contained" disabled>
          Approve
        </Button>
        <Button variant="contained" color="error">
          Decline
        </Button>
      </Stack>
    </>
  );
};

export default Overview;
