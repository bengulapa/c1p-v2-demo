import React, { useState } from "react";
import { useLoanStore } from "../../../state";
import { Box, Typography } from "@mui/material";
import CriteriaRow from "./Criteria";

const VedaDetails = () => {
  const checkpoint = "Veda";

  const loan = useLoanStore((state) => state.loan)!;
  const [checklist, setChecklist] = useState(
    loan.checklists.find((c) => c.checkpoint === checkpoint)!
  );

  return (
    <>
      <Box className="w-100">
        <div className="ml-3">
          {checklist.criteriaList.map((c) => (
            <CriteriaRow key={c.key} criteria={c} />
          ))}
        </div>
      </Box>
    </>
  );
};

export default VedaDetails;
