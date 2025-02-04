import { Box, Typography } from "@mui/material";
import { Criteria } from "../../models/interfaces";
import CriteriaRow from "./Criteria";

const FraudAssessmentDetails = () => {
  const fraudAssessments: Criteria[] = [
    {
      key: "FraudCheck",
      text: "Fraud Check",
      value: "Fail",
      result: "FAIL",
      isOverridden: false,
    },
    {
      key: "FraudCheck",
      text: "Politically Exposed Person",
      value: "Fail",
      result: "FAIL",
      isOverridden: false,
    },
    {
      key: "FraudCheck",
      text: "Sanctions",
      value: "Fail",
      result: "FAIL",
      isOverridden: false,
    },
    {
      key: "Velocity",
      text: "Fraud Check",
      value: "Fail",
      result: "FAIL",
      isOverridden: false,
    },
  ];

  return (
    <Box className="w-75">
      <div className="d-flex justify-content-between mb-2">
        <Typography variant="body2">Fraud Assessment:</Typography>
        <Typography variant="body2" color="success">
          Fail
        </Typography>
      </div>
      <div className="ml-3">
        {fraudAssessments.map((c) => (
          <CriteriaRow criteria={c} />
        ))}
      </div>
    </Box>
  );
};

export default FraudAssessmentDetails;
