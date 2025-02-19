import { Box } from "@mui/material";
import { useChecklist } from "../../../hooks/useChecklist";
import CriteriaRow from "./Criteria";

const AssetQualification = () => {
  const { checklist, updateCriteria } = useChecklist("Asset Qualification");

  return (
    <>
      <Box>
        {checklist.criteriaList.map((ac) => (
          <CriteriaRow
            key={ac.key}
            criteria={ac}
            updateCriteria={updateCriteria}
          />
        ))}
      </Box>
    </>
  );
};

export default AssetQualification;
