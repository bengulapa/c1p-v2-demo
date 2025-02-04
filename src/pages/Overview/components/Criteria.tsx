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

  return (
    <Grid2 container key={criteria.key} alignItems="center">
      <Grid2 size={5}>
        <Typography variant="body2">{criteria.text}:</Typography>
      </Grid2>
      <Grid2 size={2}>
        <Typography variant="body2" color="secondary">
          {criteria.value}
        </Typography>
      </Grid2>
      <Grid2 size={1}>
        <Box className="pt-1 text-l">
          {criteria.result === "PASS" || criteria.isOverridden ? (
            <CheckCircleIcon color="success" fontSize="small" />
          ) : (
            <CancelIcon color="error" fontSize="small" />
          )}
        </Box>
      </Grid2>
      <Grid2 size={4}>
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
