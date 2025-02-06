import { Box } from "@mui/material";
import { Criteria } from "../../../models/interfaces";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";

const DSCRDetails = () => {
  const checkpoint = "DSCR";

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
    <Box>
      {checklist.criteriaList.map((ac) => (
        <CriteriaRow
          key={ac.key}
          criteria={ac}
          updateCriteria={updateCriteria}
        />
      ))}
    </Box>
  );
};

export default DSCRDetails;
