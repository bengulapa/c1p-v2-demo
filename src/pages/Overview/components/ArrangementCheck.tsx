import { Box, Typography } from "@mui/material";
import { Criteria } from "../../../models/interfaces";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";

const ArrangementCheck = () => {
  const checkpoint = "Arrangement Check";

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
    <>
      <Typography gutterBottom>LOAN DETAILS</Typography>
      <Box>
        {checklist.criteriaList
          .filter((c) => c.section === "loan")
          .map((ac) => (
            <CriteriaRow
              key={ac.key}
              criteria={ac}
              updateCriteria={updateCriteria}
            />
          ))}
      </Box>

      <Typography gutterBottom>EXPOSURE</Typography>
      <Box>
        {checklist.criteriaList
          .filter((c) => c.section === "exposure")
          .map((ac) => (
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

export default ArrangementCheck;
