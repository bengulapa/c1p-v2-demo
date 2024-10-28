import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import ReactSpeedometer, {
  CustomSegmentLabelPosition,
} from "react-d3-speedometer";
import { Link, useOutletContext } from "react-router-dom";
import AcceptanceCriteria from "./AcceptanceCriteria";
import Checkpoints from "./Checkpoints";
import { formatCurrency } from "../helpers/formatters";

const Overview = () => {
  const context: any = useOutletContext();
  const loan = context.loan;

  return (
    <>
      <Grid2 container spacing={2} className="mb-3">
        <Grid2 size={4}>
          <Card variant="outlined">
            <CardHeader
              action={
                <Link to={`/${loan.creditArrangementId}/application`}>
                  <IconButton aria-label="settings">
                    <ArrowOutwardIcon />
                  </IconButton>
                </Link>
              }
              subheader="Loan"
              sx={{ pb: 0 }}
            />
            <CardContent
              className="d-flex justify-content-between"
              sx={{ pt: 1 }}
            >
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <Typography variant="caption">Finance amount</Typography>
                  <Typography variant="body2" color="secondary">
                    {formatCurrency(loan.financeAmount)}
                  </Typography>
                </div>
                <div className="d-flex justify-content-between">
                  <Typography variant="caption">
                    Repayment Term & Timing
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    5 Years, In Advance
                  </Typography>
                </div>
                <div className="d-flex justify-content-between">
                  <Typography variant="caption">
                    Brokerage incl. GST (8%)
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    {formatCurrency(loan.brokerageAmount)}
                  </Typography>
                </div>
                <div className="d-flex justify-content-between">
                  <Typography variant="caption">Repayment amount</Typography>
                  <Typography variant="body2" color="secondary">
                    {formatCurrency(loan.repaymentAmount)}{" "}
                    {loan.repaymentFrequency}
                  </Typography>
                </div>
                <div className="d-flex justify-content-between">
                  <Typography variant="caption">Base interest rate</Typography>
                  <Typography variant="body2" color="secondary">
                    {loan.loanInterestRate}%
                  </Typography>
                </div>
                <Stack direction="row" sx={{ mt: 1, mr: 1 }} spacing={1}>
                  <Tooltip title="Assessment">
                    <Chip label={loan.assessmentType} color="success" />
                  </Tooltip>
                  <Tooltip title="Customer Strategy">
                    <Chip
                      label={loan.pricingStrategy}
                      color={
                        loan.pricingStrategy === "A+" ? "success" : "default"
                      }
                    />
                  </Tooltip>
                  <Tooltip title="Introducer Program">
                    <Chip
                      label={loan.program.name}
                      color={
                        loan.program.name === "Partner" ? "success" : "default"
                      }
                    />
                  </Tooltip>
                </Stack>
              </div>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={4}>
          <Card variant="outlined">
            <CardHeader
              action={
                <Link to={`/${loan.creditArrangementId}/application?tab=asset`}>
                  <IconButton aria-label="more details">
                    <ArrowOutwardIcon />
                  </IconButton>
                </Link>
              }
              subheader="Asset"
              sx={{ pb: 0 }}
            />
            <CardContent
              className="d-flex justify-content-between"
              sx={{ pt: 1 }}
            >
              <div className="w-100">
                <div className="d-flex justify-content-between">
                  <Typography variant="caption">Product</Typography>
                  <Typography variant="body2" color="secondary">
                    Chattel Mortgage
                  </Typography>
                </div>
                <div className="d-flex justify-content-between">
                  <Typography variant="caption">Class</Typography>
                  <Typography variant="body2" color="secondary">
                    Primary
                  </Typography>
                </div>
                <div className="d-flex justify-content-between">
                  <Typography variant="caption">Type</Typography>
                  <Typography variant="body2" color="secondary">
                    Motor vehicle up to 4.5t
                  </Typography>
                </div>
                <div className="d-flex justify-content-between">
                  <Typography variant="caption">Make Model Year</Typography>
                  <Typography variant="body2" color="secondary">
                    Toyota Hilux 2020
                  </Typography>
                </div>
                <div className="d-flex justify-content-between">
                  <Typography variant="caption">Supplier</Typography>
                  <Typography variant="body2" color="secondary">
                    Supp Lier 0912323211
                  </Typography>
                </div>

                <Stack direction="row" sx={{ mt: 1, mr: 1 }} spacing={1}>
                  <Tooltip title="Overall risk">
                    <Chip
                      label={loan.overallRisk}
                      color={
                        loan.overallRisk === "High Risk" ? "error" : "success"
                      }
                    />
                  </Tooltip>
                  <Tooltip title="RedBook Private">
                    <Chip
                      label={`Private ${formatCurrency(loan.redBookValuation.private)}`}
                      color="error"
                      variant="outlined"
                    />
                  </Tooltip>
                  <Tooltip title="RedBook Trade-in">
                    <Chip
                      label={`Trade-in ${formatCurrency(loan.redBookValuation.tradeIn)}`}
                      color="error"
                      variant="outlined"
                    />
                  </Tooltip>
                </Stack>
              </div>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={4}>
          <Box className="mx-auto" sx={{ height: 170, width: 300 }}>
            <ReactSpeedometer
              value={loan.recommendationScore}
              currentValueText="Recommendation"
              customSegmentStops={[0, 333, 666, 1000]}
              customSegmentLabels={[
                {
                  text: "Decline",
                  position: CustomSegmentLabelPosition.Outside,
                  color: "#555",
                },
                {
                  text: "Review",
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
        </Grid2>
      </Grid2>

      <Grid2 container spacing={2}>
        <Grid2 size={3}>
          <Card>
            <CardContent>
              <Typography gutterBottom>Actions</Typography>

              <List dense>
                <ListItem
                  secondaryAction={
                    <Button variant="outlined" size="small" color="secondary">
                      Update
                    </Button>
                  }
                >
                  <ListItemText primary="Status" />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Button variant="outlined" size="small" color="secondary">
                      Set
                    </Button>
                  }
                >
                  <ListItemText primary="Conditions" />
                </ListItem>
                <ListItem
                  secondaryAction={
                    <Button variant="outlined" size="small" color="secondary">
                      Update
                    </Button>
                  }
                >
                  <ListItemText primary="ANZSIC Codes" secondary="Not set" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={5}>
          <Card>
            <CardContent>
              <Checkpoints />
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
