import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { Outlet, useParams } from "react-router-dom";
import applications from "../data/applications.json";
import { DrawerHeader } from "../layout/DrawerHeader";
import Header from "../layout/Header";
import SideMenu from "../layout/SideMenu";
import { Color } from "../styles/colors";

const Dashboard = () => {
  const { loanId } = useParams();
  const loan = applications.find((a) => a.creditArrangementId === loanId);
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: Color.lightPrimary }}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} loan={loan} />

      <SideMenu
        open={open}
        handleDrawerClose={handleDrawerClose}
        theme={theme}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <DrawerHeader />

        <Outlet context={{ loan: loan }} />
      </Box>
    </Box>
  );
};

export default Dashboard;
