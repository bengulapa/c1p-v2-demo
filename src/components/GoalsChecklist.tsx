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
import AssetQualification from "./AssetQualification";
import CardTitleHeader from "./CardTitleHeader";

interface IProps {
  loan?: any;
}
const GoalsChecklist = ({ loan }: IProps) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [checkpoint, setCheckpoint] = React.useState("");

  const toggleDialog = (open: boolean, checkpoint?: string) => {
    setOpenDialog(open);
    checkpoint && setCheckpoint(checkpoint);
  };

  const checklist = [
    {
      checkpoint: "Asset Qualification",
      outcome: "PASS",
    },
    {
      checkpoint: "Arrangement Check",
      outcome: "FAIL",
    },
    {
      checkpoint: "Serviceability Evident",
      outcome: "PASS",
    },
    {
      checkpoint: "LVR",
      outcome: "FAIL",
    },
    {
      checkpoint: "DSC Ratio",
      outcome: "PASS",
    },
  ];

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
        <DialogTitle>OA Goals Checklist</DialogTitle>
        <DialogContent>
          <Typography gutterBottom>Checkpoint - {checkpoint}</Typography>
          {checkpoint === "Asset Qualification" && (
            <AssetQualification loan={loan} />
          )}
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

export default GoalsChecklist;
