import { Box, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useChecklist } from "../../../hooks/useChecklist";
import { Criteria } from "../../../models/interfaces";
import CriteriaRow from "./Criteria";

const DSCRDetails = () => {
  const { checklist, updateCriteria } = useChecklist("Arrangement Check");

  const [dscr, setDSCR] = useState(1.1);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    criteria: Criteria
  ) => {
    const dscr = +e.target.value;
    setDSCR(dscr);

    updateCriteria({
      ...criteria,
      value: e.target.value,
      result: dscr < 1.2 ? "FAIL" : "PASS",
    });
  };

  return (
    <Box>
      {checklist.criteriaList
        .filter((c) => c.section === "dscr")
        .map((ac) => (
          <CriteriaRow
            key={ac.key}
            criteria={ac}
            updateCriteria={updateCriteria}
          >
            <TextField
              variant="outlined"
              size="small"
              value={dscr}
              onChange={(e) =>
                handleChange(e as ChangeEvent<HTMLInputElement>, ac)
              }
            ></TextField>
          </CriteriaRow>
        ))}
    </Box>
  );
};

export default DSCRDetails;
