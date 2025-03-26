import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Paper, Tab } from "@mui/material";
import React from "react";
import PageTitle from "../../components/PageTitle";
import ApplicantTab from "./components/ApplicantTab";
import BeneficialOwnersTab from "./components/BeneficialOwnersTab";
import GuarantorsTab from "./components/GuarantorsTab";

const CustomerDetails = () => {
  const [value, setValue] = React.useState("applicant");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper className="p-3">
      <PageTitle title="Customer Details" />

      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          textColor="primary"
          indicatorColor="secondary"
        >
          <Tab label="Applicant" value="applicant" />
          <Tab label="Guarantors" value="guarantors" />
          <Tab label="Beneficial Owners" value="owners" />
        </TabList>
        <TabPanel className="px-0" value="applicant">
          <ApplicantTab />
        </TabPanel>
        <TabPanel className="px-0" value="guarantors">
          <GuarantorsTab />
        </TabPanel>
        <TabPanel className="px-0" value="owners">
          <BeneficialOwnersTab />
        </TabPanel>
      </TabContext>
    </Paper>
  );
};

export default CustomerDetails;
