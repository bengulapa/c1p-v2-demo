import { Card, CardContent, Grid2 } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";
import Checkpoints from "./Checkpoints";
import MandatoryChecklist from "./MandatoryChecklist";
import StatusCard from "./StatusCard";

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
          <Card>
            <CardContent>
              <Checkpoints loan={loan} updateScore={updateScore} />
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Overview;
