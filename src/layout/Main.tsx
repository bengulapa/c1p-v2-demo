import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { Outlet, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import applications from "../data/applications.json";
import { DrawerHeader } from "./DrawerHeader";
import Header from "./Header";
import SideBar from "./SideBar";
import { Color } from "../styles/colors";

const Main = () => {
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

      <SideBar
        open={open}
        handleDrawerClose={handleDrawerClose}
        theme={theme}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        <DrawerHeader />

        <PageHeader loan={loan} />

        <Outlet context={{ loan: loan }} />
      </Box>
    </Box>
  );
};

export default Main;
