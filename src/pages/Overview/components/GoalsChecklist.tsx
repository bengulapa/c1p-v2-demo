import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GradingIcon from "@mui/icons-material/Grading";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import CardTitleHeader from "../../../components/CardTitleHeader";
import { Checklist } from "../../../models/loan.models";
import { useLoanStore } from "../../../state";
import ArrangementCheck from "./ArrangementCheck";
import AssetQualification from "./AssetQualification";
import DSCRDetails from "./DSCRDetails";
import LoanValuationReportDetails from "./LoanValuationReportDetails";
import ServiceabilityEvidentDetails from "./ServiceabilityEvidentDetails";

const GoalsChecklist = () => {
  const loan = useLoanStore((state) => state.loan);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [checklist, setChecklist] = React.useState<Checklist | null>(null);

  const toggleDialog = (open: boolean, checklist: Checklist | null = null) => {
    checklist && setChecklist(checklist);
    setOpenDialog(open);
  };

  return (
    <>
      <Card variant="outlined" className="mb-2">
        <CardContent sx={{ pt: 1 }}>
          <div className="d-flex justify-content-between mb-2">
            <CardTitleHeader title="OA Goals Checklist" />

            <GradingIcon />
          </div>

          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Checkpoint</TableCell>
                  <TableCell align="center">Outcome</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loan?.checklists
                  .filter((c) => c.section === "goals")
                  .map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.checkpoint}
                      </TableCell>
                      <TableCell align="center">
                        {row.outcome === "PASS" ? (
                          <CheckCircleIcon color="success" />
                        ) : (
                          <CancelIcon color="error" />
                        )}
                      </TableCell>
                      <TableCell>
                        <Button onClick={() => toggleDialog(true, row)}>
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <Dialog
        maxWidth="md"
        fullWidth={true}
        open={openDialog}
        onClose={() => toggleDialog(false)}
      >
        <DialogTitle>OA Goals Checklist</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Checkpoint - {checklist?.checkpoint}
          </Typography>
          {checklist?.checkpoint === "Asset Qualification" && (
            <AssetQualification />
          )}
          {checklist?.checkpoint === "Arrangement Check" && (
            <ArrangementCheck />
          )}
          {checklist?.checkpoint === "Serviceability Evident" && (
            <ServiceabilityEvidentDetails />
          )}
          {checklist?.checkpoint === "Loan to Value Ratio" && (
            <LoanValuationReportDetails />
          )}
          {checklist?.checkpoint === "Debt Service Coverage Ratio" && (
            <DSCRDetails />
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => toggleDialog(false)}
            variant="outlined"
            color="inherit"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default GoalsChecklist;
