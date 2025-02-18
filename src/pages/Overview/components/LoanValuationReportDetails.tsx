import FileOpenIcon from "@mui/icons-material/FileOpen";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { Criteria } from "../../../models/interfaces";
import { useLoanStore } from "../../../state";
import { formatCurrency } from "../../../utils/formatters";
import CriteriaRow from "./Criteria";

const LoanValuationReportDetails = () => {
  const checkpoint = "Loan to Value Ratio";

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
      <Typography>ACCEPTANCE CRITERIA</Typography>
      <Box className="mb-3">
        {checklist.criteriaList.map((ac) => (
          <CriteriaRow
            key={ac.key}
            criteria={ac}
            updateCriteria={updateCriteria}
          />
        ))}
      </Box>

      <Typography>ASSET</Typography>
      <Grid2 container spacing={1} className="mb-3">
        <Grid2 size={5}>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Make:</Typography>
            <Typography variant="body2" color="secondary">
              {loan.assetDetails.make}
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Model:</Typography>
            <Typography variant="body2" color="secondary">
              {loan.assetDetails.model}
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Description:</Typography>
            <Typography variant="body2" color="secondary">
              {loan.assetDetails.description}
            </Typography>
          </div>
        </Grid2>
        <Grid2 size={7}></Grid2>
      </Grid2>

      <Typography>VALUATION</Typography>
      <Grid2 container spacing={1}>
        <Grid2 size={5}>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Valuator:</Typography>
            <Typography variant="body2" color="secondary">
              Redbook
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Valuation:</Typography>
            <Typography variant="body2" color="secondary">
              {formatCurrency(35000)}
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">VIN:</Typography>
            <Typography variant="body2" color="secondary">
              1HB234RGH12S0145R
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Registration:</Typography>
            <Typography variant="body2" color="secondary">
              SWE 745
            </Typography>
          </div>
        </Grid2>
        <Grid2 size={7}>
          <Button
            className="ml-5"
            href={`${process.env.PUBLIC_URL}/assets/images/redbook-valuation-cert-sample.png`}
            target="_blank"
          >
            VIEW Valuation Report{" "}
            <FileOpenIcon fontSize="small" className="ml-2" />
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default LoanValuationReportDetails;
