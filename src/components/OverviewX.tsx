import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid2,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import ReactSpeedometer, {
  CustomSegmentLabelPosition,
} from "react-d3-speedometer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AcceptanceCriteria from "./AcceptanceCriteria";

const OverviewX = () => {
  return (
    <>
      <Card className="mb-3">
        <CardContent className="d-flex justify-content-between">
          <div className=" w-100 pr-5">
            <div className="mb-5 d-flex justify-content-between">
              <div className="text-center">
                <Typography variant="caption">Finance amount</Typography>
                <Typography variant="h6" color="secondary">
                  $17,480.00
                </Typography>
              </div>
              <div className="text-center">
                <Typography variant="caption">
                  Repayment Term & Timing
                </Typography>
                <Typography variant="h6" color="secondary">
                  5 Years, In Advance
                </Typography>
              </div>
              <div className="text-center">
                <Typography variant="caption">
                  Brokerage incl. GST (8%)
                </Typography>
                <Typography variant="h6" color="secondary">
                  $1,280.00
                </Typography>
              </div>
              <div className="text-center">
                <Typography variant="caption">Repayment amount</Typography>
                <Typography variant="h6" color="secondary">
                  $350.77 Monthly
                </Typography>
              </div>
              <div className="text-center">
                <Typography variant="caption">Base interest rate</Typography>
                <Typography variant="h6" color="secondary">
                  8.5%
                </Typography>
              </div>
            </div>
            <div className=" d-flex justify-content-between">
              <div className="text-center">
                <Typography variant="caption">Assessment</Typography>
                <div>
                  <Chip label="Full Doc" color="secondary" />
                </div>
              </div>
              <div className="text-center">
                <Typography variant="caption">Customer Strategy</Typography>
                <div>
                  <Chip label="Standard" color="secondary" />
                </div>
              </div>
              <div className="text-center">
                <Typography variant="caption">Introducer Program</Typography>
                <div>
                  <Chip label="Standard" color="secondary" />
                </div>
              </div>
              <div className="text-center">
                <Typography variant="h6">
                  Tertiary - Chattel Mortgage
                </Typography>
                <Typography variant="caption">Office Equipment</Typography>
              </div>
            </div>
          </div>

          <Box sx={{ height: 170, width: 300 }}>
            <ReactSpeedometer
              value={250}
              currentValueText="Recommendation"
              customSegmentStops={[0, 333, 666, 1000]}
              customSegmentLabels={[
                {
                  text: "Decline",
                  position: CustomSegmentLabelPosition.Outside,
                  color: "#555",
                },
                {
                  text: "Process",
                  position: CustomSegmentLabelPosition.Outside,
                  color: "#555",
                },
                {
                  text: "Approve",
                  position: CustomSegmentLabelPosition.Outside,
                  color: "#555",
                },
              ]}
            />
          </Box>
        </CardContent>
      </Card>

      <Grid2 container spacing={2}>
        <Grid2 size={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom>Actions</Typography>

              <List dense>
                <ListItem
                  disablePadding
                  secondaryAction={
                    <Button variant="outlined" size="small" color="error">
                      Assess Risk
                    </Button>
                  }
                >
                  <ListItemText
                    primary="First Guarantor"
                    secondary="Found on Watchlist"
                  />
                </ListItem>
                <ListItem
                  disablePadding
                  secondaryAction={
                    <Button variant="outlined" size="small" color="error">
                      Rerun
                    </Button>
                  }
                >
                  <ListItemText
                    primary="First Guarantor"
                    secondary="ID Matrix unknown"
                  />
                </ListItem>
                <ListItem
                  disablePadding
                  secondaryAction={
                    <Button variant="outlined" size="small" color="error">
                      Request
                    </Button>
                  }
                >
                  <ListItemText
                    primary="Identification Documents"
                    secondary="Missing Passport"
                  />
                </ListItem>
                <ListItem
                  disablePadding
                  secondaryAction={
                    <Button variant="outlined" size="small" color="error">
                      Rerun
                    </Button>
                  }
                >
                  <ListItemText
                    primary="Gula Patisserie"
                    secondary="Missing Equifax Report"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={5}>
          <Card>
            <CardContent>
              <Typography gutterBottom>Checkpoints</Typography>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <Typography variant="overline" className="list-label">
                      Qualify Asset
                    </Typography>
                    <Chip label="FAIL" color="error" className="ac-chip"></Chip>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <List dense disablePadding>
                    <ListItem
                      secondaryAction={<Chip label="Yes" color="error"></Chip>}
                    >
                      <ListItemText primary="Is industry restricted?" />
                    </ListItem>
                    <ListItem
                      secondaryAction={<Chip label="Yes" color="error"></Chip>}
                    >
                      <ListItemText primary="Is asset restricted?" />
                    </ListItem>
                    <ListItem
                      secondaryAction={<Chip label="No" color="error"></Chip>}
                    >
                      <ListItemText primary="Is asset backed?" />
                    </ListItem>
                    <ListItem
                      secondaryAction={<Chip label="No" color="error"></Chip>}
                    >
                      <ListItemText primary="Is asset age at EOT allowed?" />
                    </ListItem>
                    <ListItem
                      secondaryAction={<Chip label="No" color="error"></Chip>}
                    >
                      <ListItemText primary="Is the supplier accredited?" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <Typography variant="overline" className="list-label">
                      KYC & Guarantor Check
                    </Typography>
                    <Chip label="FAIL" color="error"></Chip>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <List dense disablePadding>
                    <ListItem
                      secondaryAction={<Chip label="Yes" color="error"></Chip>}
                    >
                      <ListItemText primary="Is score above minimum?" />
                    </ListItem>
                    <ListItem
                      secondaryAction={<Chip label="Fail" color="error"></Chip>}
                    >
                      <ListItemText primary="KYC result" />
                    </ListItem>
                    <ListItem
                      secondaryAction={<Chip label="Fail" color="error"></Chip>}
                    >
                      <ListItemText primary="DVS pass" />
                    </ListItem>
                    <ListItem
                      secondaryAction={<Chip label="Fail" color="error"></Chip>}
                    >
                      <ListItemText primary="Fraud Check" />
                    </ListItem>
                    <ListItem
                      secondaryAction={<Chip label="Fail" color="error"></Chip>}
                    >
                      <ListItemText primary="Politically Exposed Person" />
                    </ListItem>
                    <ListItem
                      secondaryAction={<Chip label="Fail" color="error"></Chip>}
                    >
                      <ListItemText primary="Sanctions" />
                    </ListItem>
                    <ListItem
                      secondaryAction={<Chip label="Fail" color="error"></Chip>}
                    >
                      <ListItemText primary="Velocity" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <Typography variant="overline" className="list-label">
                      Applicant Check
                    </Typography>
                    <Chip label="FAIL" color="error" className="ac-chip"></Chip>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <List dense disablePadding>
                    <ListItem
                      secondaryAction={
                        <Chip label="Active" color="error"></Chip>
                      }
                    >
                      <ListItemText primary="Is ABN Active?" />
                    </ListItem>
                    <ListItem
                      secondaryAction={
                        <Chip label="32 months" color="error"></Chip>
                      }
                    >
                      <ListItemText primary="Minimum required ABN (24 months)" />
                    </ListItem>
                    <ListItem
                      secondaryAction={
                        <Chip label="1.2 years" color="error"></Chip>
                      }
                    >
                      <ListItemText primary="Minimum GST registration (1 year)" />
                    </ListItem>
                    <ListItem
                      secondaryAction={<Chip label="650" color="error"></Chip>}
                    >
                      <ListItemText primary="Minimum borrower Veda score (500)" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <Typography variant="overline" className="list-label">
                      Arrangement Check
                    </Typography>
                    <Chip label="FAIL" color="error" className="ac-chip"></Chip>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <List dense disablePadding>
                    <ListItem
                      secondaryAction={
                        <Chip label="$25,411.02" color="error"></Chip>
                      }
                    >
                      <ListItemText primary="Total obligor exposure" />
                    </ListItem>
                    <ListItem
                      secondaryAction={
                        <Chip label="$5,411.02" color="error"></Chip>
                      }
                    >
                      <ListItemText primary="Minimum required deposit rate (10%)" />
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
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

export default OverviewX;
