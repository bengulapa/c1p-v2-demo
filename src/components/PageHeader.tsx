import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../helpers/formatters";
import CardTitleHeader from "./CardTitleHeader";
import GaugeChart from "./GaugeChart";

interface IProps {
  loan?: any;
}

const PageHeader = ({ loan }: IProps) => {
  const [score, setScore] = React.useState(loan.recommendationScore);

  const updateScore = (value: number) => {
    setScore(score + value);
  };

  return (
    <Grid2 container spacing={1} className="mb-2">
      <Grid2 size={3}>
        <Card variant="outlined" className="header-box">
          <CardHeader
            action={
              <Link to={`/${loan.creditArrangementId}/application`}>
                <IconButton aria-label="settings">
                  <ArrowOutwardIcon />
                </IconButton>
              </Link>
            }
            subheader={<CardTitleHeader title="The Deal" />}
            sx={{ pb: 0 }}
          />
          <CardContent
            className="d-flex justify-content-between"
            sx={{ pt: 1 }}
          >
            <div className="w-100">
              <Typography variant="h6" color="primary">
                {formatCurrency(loan.financeAmount)}
              </Typography>
              <Typography variant="body2">
                {formatCurrency(loan.repaymentAmount)} {loan.repaymentFrequency}
              </Typography>
              <Typography variant="body2">
                {loan.loanInterestRate}% Base interest rate
              </Typography>
              <Typography variant="body2">5 Years Term, In Advance</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={3}>
        <Card variant="outlined" className="header-box">
          <CardHeader
            action={
              <Link to={`/${loan.creditArrangementId}/application?tab=asset`}>
                <IconButton aria-label="more details">
                  <ArrowOutwardIcon />
                </IconButton>
              </Link>
            }
            subheader={<CardTitleHeader title="The Asset" />}
            sx={{ pb: 0 }}
          />
          <CardContent
            className="d-flex justify-content-between"
            sx={{ pt: 1 }}
          >
            <div className="w-100">
              <Typography variant="h6" color="primary">
                Motor vehicle
              </Typography>
              <Typography variant="caption">(up to 4.5t)</Typography>
              <Typography variant="body2">Primary</Typography>
              <Typography variant="body2">Toyota Hilux 2020</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={3}>
        <Card variant="outlined" className="header-box">
          <CardHeader
            action={
              <Link to={`/${loan.creditArrangementId}/application?tab=asset`}>
                <IconButton aria-label="more details">
                  <ArrowOutwardIcon />
                </IconButton>
              </Link>
            }
            subheader={<CardTitleHeader title="The Strategy" />}
            sx={{ pb: 0 }}
          />
          <CardContent
            className="d-flex justify-content-between"
            sx={{ pt: 1 }}
          >
            <div className="w-100">
              <Typography variant="h6" color="primary">
                Low Risk
              </Typography>
              <Typography variant="body2">
                {loan.assessmentType} A+ Partner
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={3}>
        <Card variant="outlined" className="header-box">
          <CardHeader
            subheader={<CardTitleHeader title="The Recommendation" />}
            sx={{ pb: 0 }}
          />
          <CardContent>
            <Box className="mx-auto" sx={{ width: 240, height: 120 }}>
              <GaugeChart score={score} showLabels={true} width={220} />
            </Box>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default PageHeader;
