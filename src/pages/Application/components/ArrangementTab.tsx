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
  Typography,
} from "@mui/material";
import { useState } from "react";
import DetailCardHeader from "../../../components/DetailCardHeader";
import { formatCurrency } from "../../../utils/formatters";

const ArrangementTab = () => {
  const [isEditMode, setIsEditMode] = useState<{
    key?: string;
    edit: boolean;
  }>();

  const [formData, setFormData] = useState({
    assessmentType: "Low Doc",
    loanPurpose: "New Lend",
    isPrivateSale: "No",
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
              <DetailCardHeader
                title="Arrangement Details"
                showEdit={true}
                onEdit={() => setIsEditMode({ key: "loanDetails", edit: true })}
              ></DetailCardHeader>

              {isEditMode?.key === "loanDetails" && isEditMode.edit ? (
                <>
                  <TextField
                    select
                    label="Assessment type"
                    name="assessmentType"
                    value={formData.assessmentType}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="Low Doc">Low Doc</MenuItem>
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
                    name="loanPurpose"
                    value={formData.loanPurpose}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                  >
                    <MenuItem value="New Lend">New Lend</MenuItem>
                    <MenuItem value="Refinance">Refinance</MenuItem>
                  </TextField>
                  <FormControl component="fieldset" margin="normal" fullWidth>
                    <FormLabel component="legend">Is Private Sale?</FormLabel>
                    <RadioGroup
                      row
                      name="isPrivateSale"
                      value={formData.isPrivateSale}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
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
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mr: 2 }}
                      onClick={() => setIsEditMode({ edit: false })}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => setIsEditMode({ edit: false })}
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Assessment type:
                    </Typography>
                    <span className="list-value">
                      {formData.assessmentType}
                    </span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Customer strategy:
                    </Typography>
                    <span className="list-value">Standard Customer</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Introducer program:
                    </Typography>
                    <span className="list-value">Standard</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Product:
                    </Typography>
                    <span className="list-value">Chattel Mortgage</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Asset class:
                    </Typography>
                    <span className="list-value">Primary</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Loan purpose:
                    </Typography>
                    <span className="list-value">{formData.loanPurpose}</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Is private sale:
                    </Typography>
                    <span className="list-value">{formData.isPrivateSale}</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Sale type:
                    </Typography>
                    <span className="list-value">Dealer Sale</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Date submitted:
                    </Typography>
                    <span className="list-value">
                      Friday, December 15 2023, 9:46 AM
                    </span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </Grid2>
        <Grid2 size={6}>
          <Card variant="outlined">
            <CardContent>
              <DetailCardHeader
                title="Repayments & Exposure"
                showEdit={true}
                onEdit={() => setIsEditMode({ key: "repayment", edit: true })}
              />
              {isEditMode?.key === "repayment" && isEditMode.edit ? (
                <>
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
                    <MenuItem value="3 Years">3 Years</MenuItem>
                    <MenuItem value="4 Years">4 Years</MenuItem>
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
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mr: 2 }}
                      onClick={() => setIsEditMode({ edit: false })}
                    >
                      Save
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => setIsEditMode({ edit: false })}
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Repayment amount:
                    </Typography>
                    <span className="list-value">$377.26</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Term:
                    </Typography>
                    <span className="list-value">{formData.term}</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Frequency:
                    </Typography>
                    <span className="list-value">{formData.frequency}</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Timing:
                    </Typography>
                    <span className="list-value">{formData.timing}</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Establishment fee per draw-down:
                    </Typography>
                    <span className="list-value">
                      {formatCurrency(formData.establishmentFee)}
                    </span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Account keeping fee per repayment:
                    </Typography>
                    <span className="list-value">
                      {formatCurrency(formData.accountKeepingFee)}
                    </span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Year of manufacture:
                    </Typography>
                    <span className="list-value">
                      {formData.yearOfManufacture}
                    </span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Asset age at end of term:
                    </Typography>
                    <span className="list-value">5</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Total asset value:
                    </Typography>
                    <span className="list-value">
                      {formatCurrency(formData.totalAssetValue)}
                    </span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Deposit amount:
                    </Typography>
                    <span className="list-value">
                      {formatCurrency(formData.depositAmount)}
                    </span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Doc fee:
                    </Typography>
                    <span className="list-value">
                      {formatCurrency(formData.docFee)}
                    </span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Total financed amount:
                    </Typography>
                    <span className="list-value">$15,411.00</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Current obligor exposure:
                    </Typography>
                    <span className="list-value">$10,000.00</span>
                  </div>
                  <div>
                    <Typography variant="caption" className="list-label">
                      Total obligor exposure:
                    </Typography>
                    <span className="list-value">$25,411.00</span>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ArrangementTab;
