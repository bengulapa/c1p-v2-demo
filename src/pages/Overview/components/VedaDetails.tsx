import { Box, Typography } from "@mui/material";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";

const VedaDetails = () => {
  const checkpoint = "Veda";

  const loan = useLoanStore((state) => state.loan)!;
  const checklist = loan.checklists.find((c) => c.checkpoint === checkpoint)!;

  return (
    <>
      <Box className="w-100">
        <Typography>APPLICANT</Typography>
        <div className="ml-3 mb-3">
          {checklist.criteriaList
            .filter((c) => c.section === "applicant")
            .map((c) => (
              <CriteriaRow key={c.key} criteria={c} />
            ))}
        </div>

        <Typography>GUARANTOR - BEN GULA</Typography>
        <div className="ml-3">
          {checklist.criteriaList
            .filter((c) => c.section === "guarantor-1")
            .map((c) => (
              <CriteriaRow key={c.key} criteria={c} />
            ))}
        </div>
      </Box>
    </>
  );
};

export default VedaDetails;
