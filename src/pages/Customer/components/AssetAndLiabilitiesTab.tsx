import AddIcon from "@mui/icons-material/Add";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AssetLiability, AssetLiabilityType } from ".";
import { formatCurrency } from "../../../utils/formatters";
import FormDialog from "./FormDialog";

interface IProps {
  assets: AssetLiability[];
  liabilities: AssetLiability[];
}

const AssetAndLiabilitiesTab = ({ assets, liabilities }: IProps) => {
  const [open, setOpen] = useState(false);
  const [assetLiability, setAssetLiability] = useState<AssetLiability | null>(
    null
  );
  const [type, setType] = useState<AssetLiabilityType>();

  const handleClickOpen = (
    type: AssetLiabilityType,
    data: AssetLiability | null
  ) => {
    setAssetLiability(data);
    setType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAssetLiability(null);
  };

  return (
    <>
      <Typography variant="subtitle2" gutterBottom>
        Assets
      </Typography>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Asset</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Value</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell align="right">{formatCurrency(row.value)}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => handleClickOpen("Asset", row)}
                    sx={{ py: 0 }}
                  >
                    <ModeEditIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {assets.length === 0 && (
              <TableRow>
                <TableCell colSpan={4}>No asset found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="text-right my-3">
        <Button
          className="mx-auto"
          variant="outlined"
          size="small"
          onClick={() => handleClickOpen("Asset", null)}
        >
          <AddIcon /> Add an Asset
        </Button>
      </div>

      <Typography variant="subtitle2" gutterBottom>
        Liabilities
      </Typography>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Liability</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Amount Owed</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {liabilities.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell align="right">{formatCurrency(row.value)}</TableCell>
                <TableCell>
                  <IconButton
                    size="small"
                    color="secondary"
                    onClick={() => handleClickOpen("Liability", row)}
                    sx={{ py: 0 }}
                  >
                    <ModeEditIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {liabilities.length === 0 && (
              <TableRow>
                <TableCell colSpan={4}>No liability found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="text-right my-3">
        <Button
          className="mx-auto"
          variant="outlined"
          size="small"
          onClick={() => handleClickOpen("Liability", null)}
        >
          <AddIcon /> Add a Liability
        </Button>
      </div>

      <FormDialog
        open={open}
        handleClose={handleClose}
        assetLiability={assetLiability}
        type={type!}
      />
    </>
  );
};

export default AssetAndLiabilitiesTab;
