import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { Outlet, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import applications from "../data/applications.json";
import { midReportData } from "../data/report-data";
import { mockTasks } from "../data/tasks";
import { useLoanStore } from "../state";
import { Color } from "../styles/colors";
import { DrawerHeader } from "./DrawerHeader";
import Header from "./Header";
import SideBar from "./SideBar";

const Main = () => {
  const { loanId } = useParams();
  const theme = useTheme();
  const {
    loan,
    setLoan,
    tasks,
    setTasks,
    setReport: setReportData,
  } = useLoanStore();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const loan = applications.find((a) => a.creditArrangementId === loanId);

    if (loan) {
      setReportData(midReportData);
      setTasks(mockTasks);
      setLoan(loan);
    }
  }, [loanId]);

  return (
    <Box sx={{ display: "flex", backgroundColor: Color.lightPrimary }}>
      {loan && (
        <>
          <Header open={open} handleDrawerOpen={handleDrawerOpen} loan={loan} />

          <SideBar
            open={open}
            handleDrawerClose={handleDrawerClose}
            theme={theme}
          />

          <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
            <DrawerHeader />

            <PageHeader loan={loan} tasks={tasks} />

            <Outlet />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Main;
