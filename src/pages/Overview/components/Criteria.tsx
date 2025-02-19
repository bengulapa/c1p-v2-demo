import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid2,
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
      <Grid2 size={4}>
        <Typography variant="body2">{criteria.text}:</Typography>
      </Grid2>
      <Grid2 size={4}>
        {children ? (
          children
        ) : (
          <Typography variant="body2" color="secondary">
            {formatValue(criteria.valueType, criteria.value)}
          </Typography>
        )}
      </Grid2>
      <Grid2 size={1}>
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
      <Grid2 size={3}>
        <Box className="text-left">
          {criteria.result === "FAIL" && (
            <>
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
                <>
                  <TextField
                    size="small"
                    value={reason}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setReason(e.target.value)
                    }
                    multiline
                    rows={2}
                  />
                  <div className="text-right my-2">
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleOverrideReason}
                    >
                      Save
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </Box>
      </Grid2>
    </Grid2>
  );
};

export default CriteriaRow;
