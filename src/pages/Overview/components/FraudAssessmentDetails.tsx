import { Box } from "@mui/material";
import { Criteria } from "../../../models/interfaces";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";

const FraudAssessmentDetails = () => {
  const checkpoint = "Fraud Assessment";

  const loan = useLoanStore((state) => state.loan)!;
  const updateChecklist = useLoanStore((state) => state.updateChecklist);
  const checklist = loan.checklists.find((c) => c.checkpoint === checkpoint)!;

  const updateCriteria = (criteria: Criteria) => {
    const updatedCriteriaList = checklist.criteriaList.map((c) =>
      c.key === criteria.key ? criteria : c
    );

    updateChecklist(checkpoint, updatedCriteriaList);
  };

  return (
    <Box className="w-75">
      <div className="ml-3">
        {checklist.criteriaList.map((c) => (
          <CriteriaRow
            key={c.key}
            criteria={c}
            updateCriteria={updateCriteria}
          />
        ))}
      </div>
    </Box>
  );
};

export default FraudAssessmentDetails;
