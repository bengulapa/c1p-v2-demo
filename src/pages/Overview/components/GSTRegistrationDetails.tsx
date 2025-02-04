import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Criteria } from "../../../models/interfaces";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";

const GSTRegistrationDetails = () => {
  const checkpoint = "GST Registration";

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

export default GSTRegistrationDetails;
