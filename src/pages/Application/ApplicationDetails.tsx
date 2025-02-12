import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Paper, Tab } from "@mui/material";
import React from "react";
import PageTitle from "../../components/PageTitle";
import { useQuery } from "../../hooks/useQuery";
import ArrangementTab from "./components/ArrangementTab";
import AssetTab from "./components/AssetTab";

const ApplicationDetails = () => {
  let query = useQuery();
  const [tabValue, setTabValue] = React.useState(
    query.get("tab") || "arrangement"
  );

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };

  return (
    <Paper className="p-3">
      <PageTitle title="Application Details" />

      <TabContext value={tabValue}>
        <TabList
          onChange={handleChange}
          textColor="primary"
          indicatorColor="secondary"
        >
          <Tab label="Arrangement" value="arrangement" />
          <Tab label="Asset" value="asset" />
        </TabList>
        <TabPanel className="px-0" value="arrangement">
          <ArrangementTab />
        </TabPanel>
        <TabPanel className="px-0" value="asset">
          <AssetTab />
        </TabPanel>
      </TabContext>
    </Paper>
  );
};

export default ApplicationDetails;
