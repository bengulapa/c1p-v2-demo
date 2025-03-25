import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
import ApplicantCheckpoint from "./ApplicantCheckpoint";
import FraudAssessmentDetails from "./FraudAssessmentDetails";
import VedaDetails from "./VedaDetails";

const MandatoryChecklist = () => {
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
            <CardTitleHeader title="Mandatory Compliance Checklist" />

            <AccountBalanceIcon />
          </div>

          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Checkpoint</TableCell>
                  <TableCell align="center">Outcome</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loan?.checklists
                  .filter((c) => c.section === "mandatory")
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
        maxWidth="lg"
        fullWidth={true}
        open={openDialog}
        onClose={() => toggleDialog(false)}
      >
        <DialogTitle>Mandatory Compliance</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Checkpoint - {checklist?.checkpoint}
          </Typography>
          {checklist?.checkpoint === "Applicant - AML/KYC" && (
            <ApplicantCheckpoint />
          )}
          {checklist?.checkpoint === "Fraud Assessment" && (
            <FraudAssessmentDetails />
          )}
          {checklist?.checkpoint === "Credit Score" && <VedaDetails />}
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

export default MandatoryChecklist;
