import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Paper, Tab } from "@mui/material";
import React from "react";
import PageTitle from "../../components/PageTitle";
import AssetAndLiabilitiesTab from "./components/AssetAndLiabilitiesTab";
import ApplicantTab from "./components/ApplicantTab";
import GuarantorsTab from "./components/GuarantorsTab";
import BeneficialOwnersTab from "./components/BeneficialOwnersTab";

const CustomerDetails = () => {
  const [value, setValue] = React.useState("1");

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
          <Tab label="Applicant" value="1" />
          <Tab label="Assets & Liabilities" value="2" />
          <Tab label="Guarantors" value="3" />
          <Tab label="Beneficial Owners" value="4" />
        </TabList>
        <TabPanel className="px-0" value="1">
          <ApplicantTab />
        </TabPanel>
        <TabPanel className="px-0" value="2">
          <AssetAndLiabilitiesTab />
        </TabPanel>
        <TabPanel className="px-0" value="3">
          <GuarantorsTab />
        </TabPanel>
        <TabPanel className="px-0" value="4">
          <BeneficialOwnersTab />
        </TabPanel>
      </TabContext>
    </Paper>
  );
};

export default CustomerDetails;
