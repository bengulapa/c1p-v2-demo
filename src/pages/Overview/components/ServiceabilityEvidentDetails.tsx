import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Criteria } from "../../../models/interfaces";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";
import { useState } from "react";

const options = [
  "No history",
  "< 6 months clear history",
  ">= 6 months clear history",
  "Previous or current arrears",
];

const ServiceabilityEvidentDetails = () => {
  const checkpoint = "Serviceability Evident";

  const loan = useLoanStore((state) => state.loan)!;
  const updateChecklist = useLoanStore((state) => state.updateChecklist);
  const checklist = loan.checklists.find((c) => c.checkpoint === checkpoint)!;

  const updateCriteria = (criteria: Criteria) => {
    const updatedCriteriaList = checklist.criteriaList.map((c) =>
      c.key === criteria.key ? criteria : c
    );

    updateChecklist(checkpoint, updatedCriteriaList);
  };

  const [existingCustomerPerf, setExistingCustomerPerf] =
    useState("No history");

  return (
    <Box>
      {checklist.criteriaList.map((ac) => (
        <CriteriaRow key={ac.key} criteria={ac} updateCriteria={updateCriteria}>
          {ac.key === "existingCustomerPerf" && (
            <FormControl sx={{ width: 120 }} size="small">
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
              >
                {options.map((o) => (
                  <MenuItem value={o}>{o}</MenuItem>
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
