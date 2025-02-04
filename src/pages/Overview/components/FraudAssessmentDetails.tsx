import { Box, Typography } from "@mui/material";
import { Criteria } from "../../../models/interfaces";
import CriteriaRow from "./Criteria";
import { useState, useEffect } from "react";
import { useLoanStore } from "../../../state";

const FraudAssessmentDetails = () => {
  const checkpoint = "Fraud Assessment";

  const loan = useLoanStore((state) => state.loan)!;
  const setLoan = useLoanStore((state) => state.setLoan);
  const [checklist, setChecklist] = useState(
    loan.checklists.find((c) => c.checkpoint === checkpoint)!
  );

  const updateCriteria = (criteria: Criteria) => {
    setChecklist({
      ...checklist,
      criteriaList: checklist.criteriaList.map((c) =>
        c.key === criteria.key ? criteria : c
      ),
    });
  };

  useEffect(() => {
    setLoan({
      ...loan,
      checklists: loan.checklists.map((c) =>
        c.checkpoint === checkpoint ? checklist : c
      ),
    });
  }, [checklist]);

  return (
    <Box className="w-75">
      <div className="d-flex justify-content-between mb-2">
        <Typography variant="body2">Fraud Assessment:</Typography>
        <Typography variant="body2" color="success">
          Fail
        </Typography>
      </div>
      <div className="ml-3">
        {checklist.criteriaList.map((c) => (
          <CriteriaRow criteria={c} updateCriteria={updateCriteria} />
        ))}
      </div>
    </Box>
  );
};

export default FraudAssessmentDetails;
