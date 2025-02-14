import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid2,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import DetailCardHeader from "../../../components/DetailCardHeader";
import { formatCurrency } from "../../../utils/formatters";
import AddIcon from "@mui/icons-material/Add";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useState } from "react";
import FormDialog from "./FormDialog";
import { AssetLiability, AssetLiabilityType } from ".";

function createData(name: string, description: string, value: number) {
  return { name, description, value };
}

const assetsRows = [
  createData("Cash at Bank", "Lorem ipsum", 120612.0),
  createData("Property-Occupied", "House and lot", 222126.0),
];

const liabilityRows = [createData("Mortgage", "Lorem ipsum", 61212.0)];

const AssetAndLiabilitiesTab = () => {
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
    <Grid2 container spacing={2}>
      <Grid2 size={6}>
        <Card variant="outlined">
          <CardContent>
            <DetailCardHeader title="Assets"></DetailCardHeader>

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
                  {assetsRows.map((row) => (
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
                      <TableCell align="right">
                        {formatCurrency(row.value)}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          color="secondary"
                          onClick={() => handleClickOpen("Asset", row)}
                        >
                          <ModeEditIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div className="text-right mt-3">
              <Button
                className="mx-auto"
                variant="outlined"
                size="small"
                onClick={() => handleClickOpen("Asset", null)}
              >
                <AddIcon /> Add an Asset
              </Button>
            </div>

            <Divider className="mt-3 my-2" />

            <DetailCardHeader title="Liabilities"></DetailCardHeader>

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
                  {liabilityRows.map((row) => (
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
                      <TableCell align="right">
                        {formatCurrency(row.value)}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          size="small"
                          color="secondary"
                          onClick={() => handleClickOpen("Liability", row)}
                        >
                          <ModeEditIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <div className="text-right mt-3">
              <Button
                className="mx-auto"
                variant="outlined"
                size="small"
                onClick={() => handleClickOpen("Liability", null)}
              >
                <AddIcon /> Add a Liability
              </Button>
            </div>
          </CardContent>

          <FormDialog
            open={open}
            handleClose={handleClose}
            assetLiability={assetLiability}
            type={type!}
          />
        </Card>
      </Grid2>
      <Grid2 size={6}>
        <Card variant="outlined">
          <CardContent>
            <DetailCardHeader title="Mortgage Statements"></DetailCardHeader>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Loan running 6 months+"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Good payment history"
              />
            </FormGroup>

            <TextField
              className="w-100"
              label="Details"
              multiline
              rows={4}
              variant="outlined"
            />

            <Divider className="my-2" />

            <DetailCardHeader title="Asset Finance Credit Reference"></DetailCardHeader>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Loan running 6 months+"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Comparable in loan size"
              />
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Good payment history"
              />
            </FormGroup>

            <TextField
              className="w-100 mb-4"
              label="Details"
              multiline
              rows={4}
              variant="outlined"
            />

            <div className="text-center">
              <Button className="mx-auto" variant="contained">
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default AssetAndLiabilitiesTab;
