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
import { useState } from "react";
import { Link } from "react-router-dom";
import { useChecklist } from "../../../hooks/useChecklist";
import { Criteria } from "../../../models/interfaces";
import { useLoanStore } from "../../../state";
import CriteriaRow from "./Criteria";

const ABNRegistrationDetails = () => {
  const loan = useLoanStore((state) => state.loan)!;
  const { checklist, updateCriteria } = useChecklist("ABN Registration");

  const skilledTradeCriteria = checklist.criteriaList.find(
    (cl) => cl.key === "SkilledTrade"
  );
  const [skilledTrade, setSkilledTrade] = useState("No");

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
                <Select
                  value={skilledTrade}
                  onChange={(event: SelectChangeEvent) => {
                    const value = event.target.value;
                    setSkilledTrade(value);
                    updateCriteria({
                      ...skilledTradeCriteria,
                      value: value,
                      result: value === "Yes" ? "PASS" : "FAIL",
                    } as Criteria);
                  }}
                >
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
