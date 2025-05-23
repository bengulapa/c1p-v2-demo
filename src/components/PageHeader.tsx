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
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Recommendation } from "../models/enums";
import { Loan } from "../models/loan.models";
import { Task, TaskType } from "../models/task.model";
import { useLoanStore } from "../state";
import { Color } from "../styles/colors";
import { formatCurrency } from "../utils/formatters";
import CardTitleHeader from "./CardTitleHeader";
import GaugeChart from "./GaugeChart";
import { Application } from "../models/Application";

interface IProps {
  loan: Application;
  tasks: Task[];
}

const PageHeader = ({ loan, tasks }: IProps) => {
  const [score, setScore] = useState(0);
  const [scoreColor, setScoreColor] = useState(Color.textGray);
  const { recommendation, setRecommendation, checklists } = useLoanStore();
  const { applicant, arrangement, asset, strategy } = loan;

  useEffect(() => {
    const allCriteria = checklists
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
            action={<EmergencyIcon color="primary" />}
            subheader={<CardTitleHeader title="The Applicant" color="white" />}
            sx={{ pb: 0 }}
          />
          <CardContent
            className="d-flex justify-content-between"
            sx={{ pt: 1 }}
          >
            <Box className="w-100">
              <Typography variant="h6" color="primary">
                {applicant.entityName}
              </Typography>
              <Box sx={{ color: Color.lightGray }}>
                <Typography variant="body2">{applicant.entityType}</Typography>
                <Typography variant="body2">
                  {applicant.guarantors[0]}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={3}>
        <Card variant="outlined" className="header-box">
          <CardHeader
            action={<PaidIcon color="primary" />}
            subheader={<CardTitleHeader title="The Arrangement" />}
            sx={{ pb: 0 }}
          />
          <CardContent sx={{ pt: 1 }}>
            <Typography variant="h6">
              {formatCurrency(arrangement.financeAmount)}
            </Typography>
            <Box>
              <Typography variant="caption" component="p">
                {formatCurrency(arrangement.repaymentAmount)}{" "}
                {arrangement.repaymentFrequency}
              </Typography>
              <Typography variant="caption" component="p">
                {arrangement.interestRate}% Base interest rate
              </Typography>
              <Typography variant="caption" component="p">
                {arrangement.termInYears} Years Term,{" "}
                {arrangement.repaymentTiming}
              </Typography>
              <Typography variant="caption" component="p">
                {formatCurrency(arrangement.totalObligorExposure)} total obligor
                exposure
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
          <CardContent sx={{ pt: 1 }}>
            <div className="w-100">
              <Typography variant="h6" color="primary">
                {asset.type}
              </Typography>
              <Typography variant="body2">{asset.class}</Typography>
              <Typography variant="body2">
                {asset.make} {asset.model} {asset.year}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 size={3}>
        <Card variant="outlined" className="header-box">
          <CardHeader
            action={<RecommendIcon color="primary" />}
            subheader={<CardTitleHeader title="The Strategy" />}
            sx={{ pb: 0 }}
          />
          <CardContent
            className="d-flex justify-content-between"
            sx={{ pt: 1 }}
          >
            <div>
              <Typography
                variant="h6"
                sx={{
                  color: scoreColor,
                  fontSize:
                    recommendation === Recommendation.ConditionallyApprove
                      ? "0.75rem"
                      : "1.25rem",
                  mb: 1,
                }}
              >
                {recommendation}
              </Typography>
              <Stack>
                <Typography variant="body1" color="primary">
                  {strategy.riskLevel}
                </Typography>
                <Typography variant="caption">
                  {strategy.assessmentType}
                </Typography>
                <Typography variant="caption">
                  {strategy.customerStrategy} / {strategy.program}
                </Typography>
              </Stack>
            </div>
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
