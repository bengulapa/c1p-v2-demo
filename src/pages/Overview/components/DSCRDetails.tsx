import { Box, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Criteria } from "../../../models/interfaces";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";

const DSCRDetails = () => {
  const checkpoint = "DSCR";

  const loan = useLoanStore((state) => state.loan)!;
  const updateChecklist = useLoanStore((state) => state.updateChecklist);
  const checklist = loan.checklists.find((c) => c.checkpoint === checkpoint)!;

  const updateCriteria = (criteria: Criteria) => {
    const updatedCriteriaList = checklist.criteriaList.map((c) =>
      c.key === criteria.key ? criteria : c
    );

    updateChecklist(checkpoint, updatedCriteriaList);
  };

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
      {checklist.criteriaList.map((ac) => (
        <CriteriaRow key={ac.key} criteria={ac} updateCriteria={updateCriteria}>
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
function useEffect(arg0: () => void, arg1: number[]) {
  throw new Error("Function not implemented.");
}
