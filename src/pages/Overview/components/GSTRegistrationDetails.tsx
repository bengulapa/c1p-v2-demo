import { Box } from "@mui/material";
import { useChecklist } from "../../../hooks/useChecklist";
import CriteriaRow from "./Criteria";

const GSTRegistrationDetails = () => {
  const { checklist, updateCriteria } = useChecklist("Applicant");

  return (
    <Box className="w-75">
      <div className="ml-3">
        {checklist.criteriaList
          .filter((c) => c.section === "gst")
          .map((c) => (
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

export default GSTRegistrationDetails;
