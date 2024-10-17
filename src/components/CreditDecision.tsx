import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Notes from "./Notes";
import PageHeader from "./PageHeader";

const statusList = [
  "Under Assessment",
  "Escalated For Further Assessment",
  "Missing Information",
  "Pending Compliance Call",
  "Approved",
  "Declined",
  "Withdrawn",
];

const CreditDecision = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <PageHeader title="Credit Decision" />

      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Card className="mb-3">
            <CardContent>
              <div className="d-flex justify-content-between">
                <Typography variant="overline" className="list-label">
                  Deal Status
                </Typography>
                <Chip label="Under Assessment" color="primary" />
              </div>

              <Divider className="my-2" />

              <div>
                <Typography variant="overline" className="list-label">
                  Credit Analyst:
                </Typography>
                <span className="list-value">Unassigned</span>
              </div>
              <div>
                <Typography variant="overline" className="list-label">
                  Credit Support Officer:
                </Typography>
                <span className="list-value">Unassigned</span>
              </div>

              <Box className="">
                {statusList.map((status) => (
                  <Chip
                    key={status}
                    label={status}
                    color="secondary"
                    variant="outlined"
                    className="mr-2 mb-2"
                  />
                ))}
              </Box>
            </CardContent>
          </Card>

          <Card className="mb-3">
            <CardContent>
              <Typography gutterBottom>ANZSIC Codes</Typography>

              <Stack spacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Industry code
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                    label="ANZSIC industry code"
                  >
                    <MenuItem value={10}>
                      A - Agriculture, Forestry and Fishing
                    </MenuItem>
                    <MenuItem value={20}>
                      B - Bagriculture, Forestry and Fishing
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Industry sub code
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                    label="ANZSIC industry code"
                  >
                    <MenuItem value={10}>02 - Aquaculture</MenuItem>
                    <MenuItem value={20}>
                      B - Bagriculture, Forestry and Fishing
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Button className="mt-2" variant="contained">
                Save
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography gutterBottom>Analyst Notes</Typography>

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
              <Button variant="outlined">Cancel</Button>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <Card className="mb-3">
            <CardContent>
              <Typography gutterBottom>Acceptance Criteria</Typography>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <Typography variant="overline" className="list-label">
                      Criteria
                    </Typography>
                    <Chip
                      label="Active"
                      color="success"
                      className="ac-chip"
                    ></Chip>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <Typography variant="overline" className="list-label">
                      Criteria
                    </Typography>
                    <Chip label="515" color="error" className="ac-chip"></Chip>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <Typography variant="overline" className="list-label">
                      Criteria
                    </Typography>
                    <Chip label="Unknown" className="ac-chip"></Chip>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <Typography variant="overline" className="list-label">
                      Criteria
                    </Typography>
                    <Chip label="-1" color="error" className="ac-chip"></Chip>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <Typography variant="overline" className="list-label">
                      Criteria
                    </Typography>
                    <Chip label="2021" color="error" className="ac-chip"></Chip>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <Typography variant="overline" className="list-label">
                      Criteria
                    </Typography>
                    <Chip
                      label="650"
                      color="success"
                      className="ac-chip"
                    ></Chip>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <Typography variant="overline" className="list-label">
                      Criteria
                    </Typography>
                    <Chip
                      label="Yes"
                      color="success"
                      className="ac-chip"
                    ></Chip>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography gutterBottom>Broker Notes</Typography>

              <Notes />
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </>
  );
};

export default CreditDecision;
