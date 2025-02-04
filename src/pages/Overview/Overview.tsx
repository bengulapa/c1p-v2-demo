import { Button, Grid2, Stack } from "@mui/material";
import GoalsChecklist from "./components/GoalsChecklist";
import MandatoryChecklist from "./components/MandatoryChecklist";
import StatusCard from "./components/StatusCard";

const Overview = () => {
  return (
    <>
      <StatusCard />

      <Grid2 container spacing={1}>
        <Grid2 size={6}>
          <MandatoryChecklist />
        </Grid2>
        <Grid2 size={6}>
          <GoalsChecklist />
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
