import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid2,
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

function createData(asset: string, description: string, value: number) {
  return { asset, description, value };
}

const assetsRows = [
  createData("Superannuation", "Lorem ipsum", 612.0),
  createData("Motor Vehicle", "Lorem ipsum", 2126.0),
];

const AssetAndLiabilitiesTab = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={6}>
        <Card variant="outlined">
          <CardContent>
            <DetailCardHeader title="Assets"></DetailCardHeader>

            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Asset</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {assetsRows.map((row) => (
                    <TableRow
                      key={row.asset}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.asset}
                      </TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Divider className="mt-3 my-2" />

            <DetailCardHeader title="Liabilities"></DetailCardHeader>

            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Liability</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">Amount Owed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {assetsRows.map((row) => (
                    <TableRow
                      key={row.asset}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.asset}
                      </TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
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
              variant="filled"
            />

            <Divider className="my-2" />

            <DetailCardHeader title="Asset Finance Credit Reference"></DetailCardHeader>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Loan running 6 months+"
              />
              <FormControlLabel
                disabled
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
              className="w-100"
              label="Details"
              multiline
              rows={4}
              variant="filled"
            />
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default AssetAndLiabilitiesTab;
