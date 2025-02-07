import LaunchIcon from "@mui/icons-material/Launch";
import {
  Button,
  FormControl,
  Grid2,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Criteria } from "../../../models/interfaces";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";
import { useState, useEffect } from "react";

const ABNRegistrationDetails = () => {
  const checkpoint = "ABN Registration";

  const loan = useLoanStore((state) => state.loan)!;
  const updateChecklist = useLoanStore((state) => state.updateChecklist);
  const checklist = loan.checklists.find((c) => c.checkpoint === checkpoint)!;

  const updateCriteria = (criteria: Criteria) => {
    const updatedCriteriaList = checklist.criteriaList.map((c) =>
      c.key === criteria.key ? criteria : c
    );

    updateChecklist(checkpoint, updatedCriteriaList);
  };

  const skilledTradeCriteria = checklist.criteriaList.find(
    (cl) => cl.key === "SkilledTrade"
  );
  const [skilledTrade, setSkilledTrade] = useState("No");

  const handleChange = (event: SelectChangeEvent) => {
    setSkilledTrade(event.target.value);
  };

  useEffect(() => {
    updateCriteria({
      ...skilledTradeCriteria,
      value: skilledTrade,
      result: skilledTrade === "Yes" ? "PASS" : "FAIL",
    } as Criteria);
  }, [skilledTrade]);

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

            <CriteriaRow
              key="SkilledTrade"
              criteria={skilledTradeCriteria!}
              updateCriteria={updateCriteria}
            >
              <FormControl sx={{ width: 120 }} size="small">
                <Select value={skilledTrade} onChange={handleChange}>
                  <MenuItem value="">
                    <em>Unknown</em>
                  </MenuItem>
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </CriteriaRow>
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
