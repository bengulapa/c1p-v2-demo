import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid2,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import PageHeader from "./PageHeader";

function createData(asset: string, description: string, value: number) {
  return { asset, description, value };
}

const assetsRows = [
  createData("Superannuation", "Lorem ipsum", 612.0),
  createData("Motor Vehicle", "Lorem ipsum", 2126.0),
];

const CustomerDetails = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <PageHeader title="Customer Details" />

      <TabContext value={value}>
        <TabList onChange={handleChange}>
          <Tab label="Customer" value="1" />
          <Tab label="Assets & Liabilities" value="2" />
        </TabList>
        <TabPanel value="1">
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <Card className="mb-3">
                <CardContent>
                  <Typography gutterBottom>Applicant</Typography>
                  <div>
                    <Typography variant="overline" className="list-label">
                      ABN:
                    </Typography>
                    <span className="list-value">22605215227</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Entity name:
                    </Typography>
                    <span className="list-value">GULA PATISSERIE</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Legal name
                    </Typography>
                    <span className="list-value">GULA PATISSERIE</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Incorporation date
                    </Typography>
                    <span className="list-value">05/06/2023</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Entity type:
                    </Typography>
                    <span className="list-value">Private Company</span>
                  </div>

                  <Divider className="my-2" />

                  <Typography gutterBottom>Previous ABN</Typography>

                  <div>
                    <Typography variant="overline" className="list-label">
                      ABN:
                    </Typography>
                    <span className="list-value">22605215227</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Entity name:
                    </Typography>
                    <span className="list-value">GULAPA, BEN</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Incorporation date
                    </Typography>
                    <span className="list-value">05/06/2024</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Entity type:
                    </Typography>
                    <span className="list-value">Individual</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography gutterBottom>Beneficial Owners</Typography>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Name:
                    </Typography>
                    <span className="list-value">Ben Gulapa</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Date of birth:
                    </Typography>
                    <span className="list-value">01/01/1991</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Nationality:
                    </Typography>
                    <span className="list-value">Philippines</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Email address:
                    </Typography>
                    <span className="list-value">
                      ben.gulapa@anglefinance.com.au
                    </span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Phone number:
                    </Typography>
                    <span className="list-value">041235647878</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Address:
                    </Typography>
                    <span className="list-value">
                      11 BAKER ST, MELBOURNE VIC 2074
                    </span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Home status:
                    </Typography>
                    <span className="list-value">Owning</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Properties:
                    </Typography>
                    <span className="list-value">5</span>
                  </div>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 size={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom>Guarantor Details</Typography>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Name:
                    </Typography>
                    <span className="list-value">Ben Gulapa</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Date of birth:
                    </Typography>
                    <span className="list-value">01/01/1991</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Nationality:
                    </Typography>
                    <span className="list-value">Philippines</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Email address:
                    </Typography>
                    <span className="list-value">
                      ben.gulapa@anglefinance.com.au
                    </span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Phone number:
                    </Typography>
                    <span className="list-value">041235647878</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Address:
                    </Typography>
                    <span className="list-value">
                      11 BAKER ST, MELBOURNE VIC 2074
                    </span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Home status:
                    </Typography>
                    <span className="list-value">Owning</span>
                  </div>
                  <div>
                    <Typography variant="overline" className="list-label">
                      Properties:
                    </Typography>
                    <span className="list-value">5</span>
                  </div>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </TabPanel>
        <TabPanel value="2">
          <Grid2 container spacing={2}>
            <Grid2 size={6}>
              <Card>
                <CardContent>
                  <Typography gutterBottom>Assets</Typography>

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

                  <Typography gutterBottom>Liabilities</Typography>

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
              <Card>
                <CardContent>
                  <Typography gutterBottom>Mortgage Statements</Typography>
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
                    variant="standard"
                  />

                  <Divider className="my-2" />

                  <Typography gutterBottom>
                    Asset Finance Credit Reference
                  </Typography>
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
                    variant="standard"
                  />
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </TabPanel>
      </TabContext>
    </>
  );
};

export default CustomerDetails;
