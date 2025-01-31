import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import Notes from "./Notes";
import PageTitle from "./PageTitle";
import DetailCardHeader from "./DetailCardHeader";

const BrokerComms = () => {
  return (
    <>
      <PageTitle title="Broker Comms" />

      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Card>
            <CardContent>
              <DetailCardHeader
                title="Broker Notes"
                canEdit={false}
              ></DetailCardHeader>

              <Notes />

              <Divider className="my-3" />

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
        </Grid2>

        <Grid2 size={6}>
          <Card>
            <CardContent>
              <DetailCardHeader
                title="Analyst Notes"
                canEdit={false}
              ></DetailCardHeader>

              <Notes />

              <Divider className="my-2" />

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
              <Button className="mr-2" variant="outlined">
                Email to Broker
              </Button>
              <Button variant="outlined" color="error">
                Cancel
              </Button>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </>
  );
};

export default BrokerComms;
