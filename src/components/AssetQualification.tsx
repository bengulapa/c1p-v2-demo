import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { formatCurrency } from "../helpers/formatters";
import CancelIcon from "@mui/icons-material/Cancel";

interface IProps {
  loan?: any;
}

const AssetQualification = ({ loan }: IProps) => {
  const acceptanceCriteria = [
    {
      key: "LVR",
      text: "Loan to Value Ratio",
      value: 73.67,
      result: "PASS",
      isOverridden: false,
    },
    {
      key: "AssetBacked",
      text: "Asset Backed",
      value: "No",
      result: "PASS",
      isOverridden: false,
    },
    {
      key: "AssetAligned",
      text: "Asset Aligned to Business Activity",
      value: "No",
      result: "FAIL",
      isOverridden: false,
    },
  ];

  return (
    <>
      <Typography gutterBottom>ASSET</Typography>
      <Grid2 container spacing={1} className="mb-3">
        <Grid2 size={6}>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Make:</Typography>
            <Typography variant="body2" color="secondary">
              {loan.assetDetails.make}
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Model:</Typography>
            <Typography variant="body2" color="secondary">
              {loan.assetDetails.model}
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Description:</Typography>
            <Typography variant="body2" color="secondary">
              {loan.assetDetails.description}
            </Typography>
          </div>
        </Grid2>
        <Grid2 size={6}></Grid2>
      </Grid2>
      <Grid2 container spacing={1} className="mb-3">
        <Grid2 size={6}>
          <Typography gutterBottom>VALUATION</Typography>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Valuator:</Typography>
            <Typography variant="body2" color="secondary">
              Redbook
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Valuation:</Typography>
            <Typography variant="body2" color="secondary">
              {formatCurrency(35000)}
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">VIN:</Typography>
            <Typography variant="body2" color="secondary">
              1HB234RGH12S0145R
            </Typography>
          </div>
          <div className="d-flex justify-content-between">
            <Typography variant="caption">Registration:</Typography>
            <Typography variant="body2" color="secondary">
              SWE 745
            </Typography>
          </div>
        </Grid2>
        <Grid2 size={6}>
          <Button className="ml-5">VIEW Valuation Report</Button>
        </Grid2>
      </Grid2>

      <Typography gutterBottom>ACCEPTANCE CRITERIA</Typography>
      <Box>
        {acceptanceCriteria.map((ac) => (
          <Stack direction="row" key={ac.key} spacing={3} alignItems="center">
            <Typography variant="caption" sx={{ width: 240 }}>
              {ac.text}:
            </Typography>
            <Typography variant="body2" color="secondary" sx={{ width: 40 }}>
              {ac.value}
            </Typography>
            {ac.result === "PASS" ? (
              <CheckCircleIcon color="success" fontSize="small" />
            ) : (
              <CancelIcon color="error" fontSize="small" />
            )}
            {ac.result === "FAIL" && (
              <FormControlLabel
                control={<Checkbox checked={ac.isOverridden} size="small" />}
                label="Override?"
              />
            )}
          </Stack>
        ))}
      </Box>
    </>
  );
};

export default AssetQualification;
