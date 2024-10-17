import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import PageHeader from "./PageHeader";

const BrokerComms = () => {
  return (
    <>
      <PageHeader title="Broker Comms" />

      <Card>
        <CardContent>
          <Typography gutterBottom>Broker Notes</Typography>

          <TextField
            className="w-100 mb-2"
            label="Add a note"
            multiline
            rows={4}
            variant="filled"
          />

          <Button className="mr-2" variant="contained">
            Save
          </Button>
          <Button variant="outlined">Cancel</Button>

          <Divider className="my-3" />
          <Grid2 container spacing={5}>
            <Grid2 size={6}>
              <div>
                <Typography variant="overline" className="list-label">
                  Introducer:
                </Typography>
                <span className="list-value">Benchmark Finance</span>
              </div>
              <div>
                <Typography variant="overline" className="list-label">
                  BDM:
                </Typography>
                <span className="list-value">Bench Mark</span>
              </div>
            </Grid2>
            <Grid2 size={6}>
              <div>
                <Typography variant="overline" className="list-label">
                  Broker:
                </Typography>
                <span className="list-value">Ben Gulapa</span>
              </div>
              <div>
                <Typography variant="overline" className="list-label">
                  Email:
                </Typography>
                <span className="list-value">bgulapa@email.com</span>
              </div>
              <div>
                <Typography variant="overline" className="list-label">
                  Phone number:
                </Typography>
                <span className="list-value">0978989889</span>
              </div>
            </Grid2>
          </Grid2>
        </CardContent>
      </Card>
    </>
  );
};

export default BrokerComms;
