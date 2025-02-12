import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useState } from "react";
import DetailCardHeader from "../../../components/DetailCardHeader";

const ArrangementTab = () => {
  const [formData, setFormData] = useState({
    repaymentAmount: 377.26,
    term: "5 Years",
    frequency: "Monthly",
    timing: "In Advance",
    establishmentFee: 540.0,
    accountKeepingFee: 4.95,
    yearOfManufacture: 2023,
    assetAgeAtEndOfTerm: 5,
    totalAssetValue: 12000,
    depositAmount: 2000,
    docFee: 900,
    totalFinancedAmount: 14900,
    currentObligorExposure: 5000,
    totalObligorExposure: 19900,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Grid2 container spacing={1}>
        <Grid2 size={6}>
          <Card variant="outlined">
            <CardContent>
              <DetailCardHeader title="Arrangement Details"></DetailCardHeader>

              <TextField
                select
                label="Assessment type"
                fullWidth
                defaultValue="Full Doc - Bank Statement"
                disabled={false}
                margin="normal"
              >
                <MenuItem value="Full Doc - Bank Statement">
                  Full Doc - Bank Statement
                </MenuItem>
              </TextField>
              <TextField
                label="Customer strategy"
                fullWidth
                defaultValue="Standard Customer"
                disabled
                margin="normal"
              />
              <TextField
                label="Introducer program"
                fullWidth
                defaultValue="Standard"
                disabled
                margin="normal"
              />
              <TextField
                label="Product"
                fullWidth
                defaultValue="Chattel Mortgage"
                disabled
                margin="normal"
              />

              <TextField
                select
                label="Asset class"
                fullWidth
                defaultValue="Primary"
                disabled
                margin="normal"
              >
                <MenuItem value="Primary">Primary</MenuItem>
              </TextField>
              <TextField
                select
                label="Loan purpose"
                fullWidth
                defaultValue="New Lend"
                disabled={false}
                margin="normal"
              >
                <MenuItem value="New Lend">New Lend</MenuItem>
              </TextField>
              <FormControl component="fieldset" margin="normal" fullWidth>
                <FormLabel component="legend">Is Private Sale?</FormLabel>
                <RadioGroup row defaultValue="No">
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>

              <TextField
                label="Date submitted"
                fullWidth
                defaultValue="Friday, December 15 2023, 9:46 AM"
                disabled
                margin="normal"
              />

              <div className="text-center mt-4">
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                  Save
                </Button>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <Card variant="outlined">
            <CardContent>
              <DetailCardHeader title="Repayments & Exposure" />

              <TextField
                label="Repayment Amount"
                name="repaymentAmount"
                value={formData.repaymentAmount}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                disabled
                fullWidth
                margin="normal"
              />
              <TextField
                select
                label="Term"
                name="term"
                value={formData.term}
                onChange={handleChange}
                fullWidth
                margin="normal"
              >
                <MenuItem value="5 Years">5 Years</MenuItem>
                {/* Add more options as needed */}
              </TextField>
              <TextField
                select
                label="Frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleChange}
                fullWidth
                margin="normal"
              >
                <MenuItem value="Monthly">Monthly</MenuItem>
                {/* Add more options as needed */}
              </TextField>
              <FormControl component="fieldset" margin="normal" fullWidth>
                <FormLabel component="legend">Timing</FormLabel>
                <RadioGroup
                  row
                  name="timing"
                  value={formData.timing}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="In Advance"
                    control={<Radio />}
                    label="In Advance"
                  />
                  <FormControlLabel
                    value="In Arrears"
                    control={<Radio />}
                    label="In Arrears"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                label="Establishment Fee per Draw-Down"
                name="establishmentFee"
                value={formData.establishmentFee}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Account Keeping Fee per Repayment"
                name="accountKeepingFee"
                value={formData.accountKeepingFee}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Year of Manufacture"
                name="yearOfManufacture"
                value={formData.yearOfManufacture}
                onChange={handleChange}
                type="number"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Asset Age at End of Term"
                name="assetAgeAtEndOfTerm"
                value={formData.assetAgeAtEndOfTerm}
                disabled
                fullWidth
                margin="normal"
              />
              <TextField
                label="Total Asset Value"
                name="totalAssetValue"
                value={formData.totalAssetValue}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Deposit Amount"
                name="depositAmount"
                value={formData.depositAmount}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Doc Fee"
                name="docFee"
                value={formData.docFee}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Total Financed Amount"
                name="totalFinancedAmount"
                value={formData.totalFinancedAmount}
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Current Obligor Exposure"
                name="currentObligorExposure"
                value={formData.currentObligorExposure}
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Total Obligor Exposure"
                name="totalObligorExposure"
                value={formData.totalObligorExposure}
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                fullWidth
                margin="normal"
              />

              <div className="text-center mt-4">
                <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                  Save
                </Button>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ArrangementTab;
