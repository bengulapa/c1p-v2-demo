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
import CardTitleHeader from "./CardTitleHeader";
import EKYCDetails from "./EKYCDetails";

interface IProps {
  loan?: any;
}

const MandatoryChecklist = ({ loan }: IProps) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [checkpoint, setCheckpoint] = React.useState("");

  const toggleDialog = (open: boolean, checkpoint?: string) => {
    setOpenDialog(open);
    checkpoint && setCheckpoint(checkpoint);
  };

  const checklist = [
    {
      checkpoint: "eKYC",
      outcome: "FAIL",
    },
    {
      checkpoint: "Fraud Assessment",
      outcome: "FAIL",
    },
    {
      checkpoint: "Veda",
      outcome: "PASS",
    },
    {
      checkpoint: "ABN Registration",
      outcome: "PASS",
    },
    {
      checkpoint: "GST Registration",
      outcome: "PASS",
    },
  ];

  return (
    <>
      <Card variant="outlined" className="mb-2">
        <CardContent sx={{ pt: 1 }}>
          <div className="d-flex justify-content-between mb-2">
            <CardTitleHeader title="Mandatory Compliance Checklist" />

            <AccountBalanceIcon />
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
                {checklist.map((row, index) => (
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
                      <Button
                        onClick={() => toggleDialog(true, row.checkpoint)}
                      >
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
        maxWidth="sm"
        fullWidth={true}
        open={openDialog}
        onClose={() => toggleDialog(false)}
      >
        <DialogTitle>Mandatory Compliance</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>Checkpoint - {checkpoint}</Typography>
          {checkpoint === "eKYC" && <EKYCDetails loan={loan} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => toggleDialog(false)} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MandatoryChecklist;
