import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useChecklist } from "../../../hooks/useChecklist";
import CriteriaRow from "./Criteria";

const ArrangementCheck = () => {
  const { checklist, updateCriteria } = useChecklist("Arrangement Check");

  const [depositRequired, setDepositRequired] = useState("Yes");

  return (
    <>
      <Typography gutterBottom>LOAN DETAILS</Typography>
      <Box className="mb-2">
        {checklist.criteriaList
          .filter((c) => c.section === "loan")
          .map((ac) => (
            <CriteriaRow
              key={ac.key}
              criteria={ac}
              updateCriteria={updateCriteria}
            />
          ))}
      </Box>

      <Typography gutterBottom>EXPOSURE</Typography>
      <Box>
        {checklist.criteriaList
          .filter((c) => c.section === "exposure")
          .map((ac) => (
            <CriteriaRow
              key={ac.key}
              criteria={ac}
              updateCriteria={updateCriteria}
            >
              {ac.key === "depositRequired" && (
                <FormControl sx={{ width: 120 }} size="small">
                  <Select
                    value={depositRequired}
                    onChange={(event: SelectChangeEvent) => {
                      const value = event.target.value;
                      setDepositRequired(value);
                      updateCriteria({
                        ...ac,
                        value,

                        result: value === "Yes" ? "PASS" : "FAIL",
                      });
                    }}
                  >
                    <MenuItem value="Yes">Yes</MenuItem>
                    <MenuItem value="No">No</MenuItem>
                  </Select>
                </FormControl>
              )}
            </CriteriaRow>
          ))}
      </Box>
    </>
  );
};

export default ArrangementCheck;
