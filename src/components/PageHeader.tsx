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
import { useEffect, useState } from "react";
import { Loan } from "../models/loan.models";
import { Task, TaskType } from "../models/task.model";
import { Color } from "../styles/colors";
import { formatCurrency } from "../utils/formatters";
import CardTitleHeader from "./CardTitleHeader";
import GaugeChart from "./GaugeChart";

interface IProps {
  loan: Loan;
  tasks: Task[];
}

enum Recommendation {
  Approve = "Approve",
  ConditionallyApprove = "Conditionally Approve",
  Decline = "Decline",
  Review = "Review",
}

const PageHeader = ({ loan, tasks }: IProps) => {
  const [score, setScore] = useState(0);
  const [scoreColor, setScoreColor] = useState(Color.textGray);
  const [recommendation, setRecommendation] = useState<Recommendation>();

  useEffect(() => {
    const allCriteria = loan.checklists
      .map((cl) => cl.criteriaList)
      .flat()
      .filter((clc) => !!clc.result);

    const passed = allCriteria.filter(
      (a) => a.result === "PASS" || a.isOverridden
    ).length;

    const score = (passed / allCriteria.length) * 1000;
    setScore(score);

    const allConditionMet = tasks
      .filter((t) => t.taskType === TaskType.CreditCondition)
      .every((t) => t.conditionMet);

    if (score > 666) {
      setRecommendation(
        allConditionMet
          ? Recommendation.Approve
          : Recommendation.ConditionallyApprove
      );
      setScoreColor(Color.green);
    } else if (score > 333 && score <= 666) {
      setRecommendation(Recommendation.Review);
      setScoreColor(Color.darkOrange);
    } else {
      setRecommendation(Recommendation.Decline);
      setScoreColor(Color.red);
    }
  }, [loan, tasks]);

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
            <Typography
              variant="h6"
              sx={{
                color: scoreColor,
                fontSize:
                  recommendation === Recommendation.ConditionallyApprove
                    ? "0.75rem"
                    : "1.25rem",
              }}
            >
              {recommendation}
            </Typography>
            <Box sx={{ width: "auto", height: 120 }}>
              <GaugeChart score={score} showLabels={true} width={160} />
            </Box>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default PageHeader;
