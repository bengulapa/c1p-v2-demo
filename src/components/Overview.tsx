import { Card, CardContent, Grid2 } from "@mui/material";
import React from "react";
import { useOutletContext } from "react-router-dom";
import AcceptanceCriteria from "./AcceptanceCriteria";
import Actions from "./Actions";
import Checkpoints from "./Checkpoints";

const Overview = () => {
  const context: any = useOutletContext();
  const loan = context.loan;
  const [score, setScore] = React.useState(loan.recommendationScore);

  const updateScore = (value: number) => {
    setScore(score + value);
  };

  return (
    <>
      <Grid2 container spacing={1}>
        <Grid2 size={3}>
          <Card>
            <CardContent>
              <Actions loan={loan} />
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={5}>
          <Card>
            <CardContent>
              <Checkpoints loan={loan} updateScore={updateScore} />
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={4}>
          <Card>
            <CardContent>
              <AcceptanceCriteria />
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Overview;
