import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Button, Grid2, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LaunchIcon from "@mui/icons-material/Launch";
import { useState, useEffect } from "react";
import { Criteria } from "../../../models/interfaces";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";

const ABNRegistrationDetails = () => {
  const checkpoint = "ABN Registration";

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
      <Grid2 container spacing={1}>
        <Grid2 size={9}>
          <Typography gutterBottom>CURRENT</Typography>
          <div className="ml-3 mb-3">
            {checklist.criteriaList
              .filter((c) => c.section === "abn")
              .map((c) => (
                <CriteriaRow
                  key={c.key}
                  criteria={c}
                  updateCriteria={updateCriteria}
                />
              ))}
          </div>

          <Typography gutterBottom>PREVIOUS</Typography>
          <div className="ml-3">
            {checklist.criteriaList
              .filter((c) => c.section === "previous")
              .map((c) => (
                <CriteriaRow
                  key={c.key}
                  criteria={c}
                  updateCriteria={updateCriteria}
                />
              ))}
          </div>
        </Grid2>

        <Grid2 size={3}>
          <Button className="ml-5" endIcon={<LaunchIcon />}>
            <Link
              target="_blank"
              to={`https://abr.business.gov.au/ABN/View?id=${loan.abn}`}
            >
              VIEW ABN Lookup
            </Link>
          </Button>
        </Grid2>
      </Grid2>
    </>
  );
};

export default ABNRegistrationDetails;
