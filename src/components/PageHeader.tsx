import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import EmergencyIcon from "@mui/icons-material/Emergency";
import PaidIcon from "@mui/icons-material/Paid";
import RecommendIcon from "@mui/icons-material/Recommend";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
import { formatCurrency } from "../helpers/formatters";
import { Color } from "../styles/colors";
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
        <Card
          variant="outlined"
          className="header-box"
          sx={{ background: Color.secondary, color: Color.white }}
        >
          <CardHeader
            action={<PaidIcon color="primary" />}
            subheader={<CardTitleHeader title="The Deal" color="white" />}
            sx={{ pb: 0 }}
          />
          <CardContent sx={{ pt: 1 }}>
            <Typography variant="h6">
              {formatCurrency(loan.financeAmount)}
            </Typography>
            <Box sx={{ color: Color.lightGray }}>
              <Typography variant="caption" component="p">
                {formatCurrency(loan.repaymentAmount)} {loan.repaymentFrequency}
              </Typography>
              <Typography variant="caption" component="p">
                {loan.loanInterestRate}% Base interest rate
              </Typography>
              <Typography variant="caption" component="p">
                5 Years Term, In Advance
              </Typography>
              <Typography variant="caption" component="p">
                $794,442.75 total obligor exposure
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={3}>
        <Card variant="outlined" className="header-box">
          <CardHeader
            action={<DirectionsCarIcon color="primary" />}
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
            action={<EmergencyIcon color="primary" />}
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
            action={<RecommendIcon color="primary" />}
            subheader={<CardTitleHeader title="The Recommendation" />}
            sx={{ pb: 0 }}
          />
          <CardContent
            className="d-flex justify-content-between"
            sx={{ pt: 1 }}
          >
            <Typography variant="h6" color="success">
              Approve
            </Typography>
            <Box sx={{ width: 160, height: 120 }}>
              <GaugeChart score={score} showLabels={true} width={160} />
            </Box>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default PageHeader;
