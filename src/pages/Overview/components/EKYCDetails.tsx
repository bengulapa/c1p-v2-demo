import { Button, Grid2, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Criteria } from "../../../models/interfaces";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";

const EKYCDetails = () => {
  const checkpoint = "eKYC";

  const loan = useLoanStore((state) => state.loan)!;
  const setLoan = useLoanStore((state) => state.setLoan);
  const [checklist, setChecklist] = useState(
    loan.checklists.find((c) => c.checkpoint === checkpoint)!
  );

  const updateCriteria = (criteria: Criteria) => {
    setChecklist({
      ...checklist,
      criteriaList: checklist.criteriaList.map((c) =>
        c.key === criteria.key ? criteria : c
      ),
    });
  };

  useEffect(() => {
    setLoan({
      ...loan,
      checklists: loan.checklists.map((c) =>
        c.checkpoint === checkpoint ? checklist : c
      ),
    });
  }, [checklist]);

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
          </div>
        </Grid2>
        <Grid2 size={6}>
          <Stack alignItems="start" className="ml-5">
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

export default EKYCDetails;
