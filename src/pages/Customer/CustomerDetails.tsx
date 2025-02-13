import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Paper, Tab } from "@mui/material";
import React from "react";
import PageTitle from "../../components/PageTitle";
import AssetAndLiabilitiesTab from "./components/AssetAndLiabilitiesTab";
import CustomerTab from "./components/CustomerTab";

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
          <Tab label="Customer" value="1" />
          <Tab label="Assets & Liabilities" value="2" />
        </TabList>
        <TabPanel className="px-0" value="1">
          <CustomerTab />
        </TabPanel>
        <TabPanel className="px-0" value="2">
          <AssetAndLiabilitiesTab />
        </TabPanel>
      </TabContext>
    </Paper>
  );
};

export default CustomerDetails;
