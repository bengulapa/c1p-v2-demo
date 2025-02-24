import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ReactNode, useState } from "react";
import { Criteria } from "../../../models/interfaces";
import { formatCurrency } from "../../../utils/formatters";

interface IProps {
  criteria: Criteria;
  updateCriteria?: (criteria: Criteria) => void;
  children?: ReactNode;
}

const CriteriaRow = ({ criteria, updateCriteria, children }: IProps) => {
  const [reason, setReason] = useState(criteria.overrideReason || "");
  const handleOverride = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateCriteria &&
      updateCriteria({
        ...criteria,
        isOverridden: event.target.checked,
      });
  };

  const handleOverrideReason = () => {
    updateCriteria &&
      updateCriteria({
        ...criteria,
        isOverridden: true,
        overrideReason: reason,
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
      <Grid2 size={3}>
        <Typography variant="body2">{criteria.text}:</Typography>
      </Grid2>
      <Grid2 size={3.5}>
        {children ? (
          children
        ) : (
          <Typography variant="body2" color="secondary">
            {formatValue(criteria.valueType, criteria.value)}
          </Typography>
        )}
      </Grid2>
      <Grid2 size={0.5}>
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
      <Grid2 size={5}>
        <Box className="text-left">
          {criteria.result === "FAIL" && (
            <Stack direction={"row"}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={criteria.isOverridden}
                    onChange={handleOverride}
                    size="small"
                  />
                }
                label="Override?"
              />
              {criteria.isOverridden && (
                <div className="d-flex">
                  <TextField
                    size="small"
                    value={reason}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setReason(e.target.value)
                    }
                    multiline
                    className="mr-1 mb-1"
                    placeholder="Reason"
                  />
                  <Button
                    variant="outlined"
                    size="small"
                    className="mb-1"
                    onClick={handleOverrideReason}
                  >
                    Save
                  </Button>
                </div>
              )}
            </Stack>
          )}
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default CriteriaRow;
