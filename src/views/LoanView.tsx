import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChecklistIcon from "@mui/icons-material/Checklist";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";

const LoanView = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box className="d-flex justify-content-between">
        <TabList onChange={handleChange} orientation="vertical">
          <Tab
            icon={<CreditScoreIcon />}
            label="Application Details"
            value="1"
          />
          <Tab icon={<RememberMeIcon />} label="Customer Details" value="2" />
          <Tab icon={<ChecklistIcon />} label="Credit Decision" value="3" />
          <Tab icon={<SupportAgentIcon />} label="Broker Comms" value="4" />
          <Tab icon={<AttachFileIcon />} label="Attachments" value="5" />
        </TabList>

        <Tab icon={<ReceiptLongIcon />} label="Audit Logs" value="6" />
      </Box>
      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">Item Two</TabPanel>
      <TabPanel value="3">Item Three</TabPanel>
      <TabPanel value="4">Item 4</TabPanel>
      <TabPanel value="5">Item 5</TabPanel>
    </TabContext>
  );
};

export default LoanView;
