import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useChecklist } from "../../../hooks/useChecklist";
import CriteriaRow from "./Criteria";

const options = [
  "No history",
  "< 6 months clear history",
  ">= 6 months clear history",
  "Previous or current arrears",
];

const ServiceabilityEvidentDetails = () => {
  const { checklist, updateCriteria } = useChecklist("Serviceability Evident");

  const [existingCustomerPerf, setExistingCustomerPerf] =
    useState("No history");

  return (
    <Box>
      {checklist.criteriaList.map((ac) => (
        <CriteriaRow key={ac.key} criteria={ac} updateCriteria={updateCriteria}>
          {ac.key === "existingCustomerPerf" && (
            <FormControl size="small" sx={{ minWidth: 200 }}>
              <Select
                value={existingCustomerPerf}
                onChange={(event: SelectChangeEvent) => {
                  const value = event.target.value;
                  setExistingCustomerPerf(value);
                  updateCriteria({
                    ...ac,
                    value,
                    result:
                      value === "Previous or current arrears" ? "FAIL" : "PASS",
                  });
                }}
                autoWidth
              >
                {options.map((o, i) => (
                  <MenuItem key={i} value={o}>
                    {o}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </CriteriaRow>
      ))}
    </Box>
  );
};

export default ServiceabilityEvidentDetails;
