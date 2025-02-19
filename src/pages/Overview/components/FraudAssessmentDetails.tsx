import { Box } from "@mui/material";
import { useChecklist } from "../../../hooks/useChecklist";
import CriteriaRow from "./Criteria";

const FraudAssessmentDetails = () => {
  const { checklist, updateCriteria } = useChecklist("Fraud Assessment");

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
