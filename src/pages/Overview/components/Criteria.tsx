import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid2,
  Typography,
} from "@mui/material";
import React from "react";
import { Criteria } from "../../../models/interfaces";
import { formatCurrency } from "../../../utils/formatters";

interface IProps {
  criteria: Criteria;
  updateCriteria?: (criteria: Criteria) => void;
}

const CriteriaRow = ({ criteria, updateCriteria }: IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateCriteria &&
      updateCriteria({
        ...criteria,
        isOverridden: event.target.checked,
      });
  };

  const formatValue = (valueType: string | undefined, value: any) => {
    switch (valueType) {
      case "currency":
        return formatCurrency(value);
      default:
        return value;
    }
  };

  return (
    <Grid2 container alignItems="center">
      <Grid2 size={4}>
        <Typography variant="body2">{criteria.text}:</Typography>
      </Grid2>
      <Grid2 size={4}>
        <Typography variant="body2" color="secondary">
          {formatValue(criteria.valueType, criteria.value)}
        </Typography>
      </Grid2>
      <Grid2 size={2}>
        <Box className="pt-1 text-l">
          {criteria.result === "PASS" || criteria.isOverridden ? (
            <CheckCircleIcon color="success" fontSize="small" />
          ) : criteria.result === "FAIL" ? (
            <CancelIcon color="error" fontSize="small" />
          ) : (
            ""
          )}
        </Box>
      </Grid2>
      <Grid2 size={2}>
        <Box className="text-right">
          {criteria.result === "FAIL" && (
            <FormControlLabel
              className="m-0 p-0"
              control={
                <Checkbox
                  checked={criteria.isOverridden}
                  onChange={handleChange}
                  size="small"
                />
              }
              label="Override?"
            />
          )}
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default CriteriaRow;
