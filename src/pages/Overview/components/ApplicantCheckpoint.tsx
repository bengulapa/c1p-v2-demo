import {
  Button,
  FormControl,
  Grid2,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Criteria } from "../../../models/interfaces";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";

const ApplicantCheckpoint = () => {
  const checkpoint = "Applicant";

  const loan = useLoanStore((state) => state.loan)!;
  const updateChecklist = useLoanStore((state) => state.updateChecklist);
  const checklist = loan.checklists.find((c) => c.checkpoint === checkpoint)!;

  const updateCriteria = (criteria: Criteria) => {
    const updatedCriteriaList = checklist.criteriaList.map((c) =>
      c.key === criteria.key ? criteria : c
    );

    updateChecklist(checkpoint, updatedCriteriaList);
  };

  const creditShoppedCriteria = checklist.criteriaList.find(
    (cl) => cl.key === "CreditShopped"
  );
  const [creditShopped, setCreditShopped] = useState("2+");

  const handleChange = (event: SelectChangeEvent) => {
    setCreditShopped(event.target.value);
  };

  useEffect(() => {
    updateCriteria({
      ...creditShoppedCriteria,
      value: creditShopped,
      result: creditShopped !== "2+" ? "PASS" : "FAIL",
    } as Criteria);
  }, [creditShopped]);

  return (
    <>
      <Typography gutterBottom>EQUIFAX</Typography>
      <Grid2 container spacing={1} className="mb-3">
        <Grid2 size={6}>
          <div className="ml-3">
            {checklist.criteriaList
              .filter((c) => c.section === "equifax")
              .map((c) => (
                <CriteriaRow
                  key={c.key}
                  criteria={c}
                  updateCriteria={updateCriteria}
                />
              ))}

            <CriteriaRow
              key="CreditShopped"
              criteria={creditShoppedCriteria!}
              updateCriteria={updateCriteria}
            >
              <FormControl sx={{ width: 120 }} size="small">
                <Select value={creditShopped} onChange={handleChange}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="0">0 in 4 weeks</MenuItem>
                  <MenuItem value="1">1 in 4 weeks</MenuItem>
                  <MenuItem value="2+">2 or more in 4 weeks</MenuItem>
                </Select>
              </FormControl>
            </CriteriaRow>
          </div>
        </Grid2>
        <Grid2 size={6}>
          <Stack alignItems="start" className="pl-5">
            <Button>VIEW Equifax Report</Button>
            <Button>VIEW Driver's License</Button>
            <Button>VIEW Australian Passport</Button>
            <Button>VIEW Medicare Card</Button>
          </Stack>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={1}>
        <Grid2 size={6}>
          <Typography gutterBottom>BIOMETRICS</Typography>
          <div className="ml-3">
            {checklist.criteriaList
              .filter((c) => c.section === "biometrics")
              .map((c) => (
                <CriteriaRow
                  key={c.key}
                  criteria={c}
                  updateCriteria={updateCriteria}
                />
              ))}
          </div>
        </Grid2>
        <Grid2 size={6}>
          <Button className="ml-5">VIEW BioID Report</Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ApplicantCheckpoint;
