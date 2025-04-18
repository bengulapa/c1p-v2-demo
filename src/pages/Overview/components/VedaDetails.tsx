import FileOpenIcon from "@mui/icons-material/FileOpen";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useChecklist } from "../../../hooks/useChecklist";
import { Criteria } from "../../../models/interfaces";
import CriteriaRow from "./Criteria";

const VedaDetails = () => {
  const { checklist, updateCriteria } = useChecklist("Credit Score");

  const cwScoreCriteria = checklist.criteriaList.find(
    (cl) => cl.key === "cwScore"
  );
  const cwRatingCriteria = checklist.criteriaList.find(
    (cl) => cl.key === "cwRating"
  );

  const handleChange = (criteria: Criteria, value: string) => {
    updateCriteria({
      ...criteria,
      value,
    });
  };

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
            <TextField
              variant="outlined"
              size="small"
              value={cwScoreCriteria?.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(cwScoreCriteria!, e.target.value)
              }
            ></TextField>
          </CriteriaRow>

          <CriteriaRow criteria={cwRatingCriteria!}>
            <TextField
              variant="outlined"
              size="small"
              value={cwRatingCriteria?.value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(cwRatingCriteria!, e.target.value)
              }
            ></TextField>
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
