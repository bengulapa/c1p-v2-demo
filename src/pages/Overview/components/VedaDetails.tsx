import FileOpenIcon from "@mui/icons-material/FileOpen";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";

const VedaDetails = () => {
  const checkpoint = "Veda";

  const loan = useLoanStore((state) => state.loan)!;
  const checklist = loan.checklists.find((c) => c.checkpoint === checkpoint)!;

  const cwScoreCriteria = checklist.criteriaList.find(
    (cl) => cl.key === "cwScore"
  );
  const cwRatingCriteria = checklist.criteriaList.find(
    (cl) => cl.key === "cwRating"
  );

  return (
    <>
      <Box className="w-100">
        <div className="d-flex justify-content-between">
          <Typography>APPLICANT</Typography>

          <Button
            href={`${process.env.PUBLIC_URL}/assets/docs/EquifaxReport.pdf`}
            target="_blank"
          >
            VIEW VEDA Report
            <FileOpenIcon fontSize="small" className="ml-2" />
          </Button>
        </div>
        <div className="ml-3 mb-3">
          {checklist.criteriaList
            .filter((c) => c.section === "applicant")
            .map((c) => (
              <CriteriaRow key={c.key} criteria={c} />
            ))}

          <CriteriaRow criteria={cwScoreCriteria!}>
            <TextField variant="outlined" size="small"></TextField>
          </CriteriaRow>

          <CriteriaRow criteria={cwRatingCriteria!}>
            <TextField variant="outlined" size="small"></TextField>
          </CriteriaRow>
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
