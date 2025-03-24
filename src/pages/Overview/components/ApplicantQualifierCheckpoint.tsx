import { Grid2, Typography } from "@mui/material";
import { useChecklist } from "../../../hooks/useChecklist";
import ABNRegistrationDetails from "./ABNRegistrationDetails";
import CriteriaRow from "./Criteria";

const ApplicantQualifierCheckpoint = () => {
  const { checklist, updateCriteria } = useChecklist("Applicant");

  return (
    <>
      <Grid2 container spacing={1} className="mb-3">
        <Grid2 size={10}>
          <Typography>PROPERTY</Typography>
          <div className="ml-3 mb-2">
            {checklist.criteriaList
              .filter((c) => c.section === "property")
              .map((c) => (
                <CriteriaRow
                  key={c.key}
                  criteria={c}
                  updateCriteria={updateCriteria}
                />
              ))}
          </div>

          <Typography>GST REGISTRATION</Typography>
          <div className="ml-3">
            {checklist.criteriaList
              .filter((c) => c.section === "gst")
              .map((c) => (
                <CriteriaRow
                  key={c.key}
                  criteria={c}
                  updateCriteria={updateCriteria}
                />
              ))}
          </div>
        </Grid2>
        <Grid2 size={2}></Grid2>
      </Grid2>

      <ABNRegistrationDetails />
    </>
  );
};

export default ApplicantQualifierCheckpoint;
