import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import { Outlet, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import ApplicationService from "../data/api/ApplicationService";
import { useLoanStore } from "../state";
import { Color } from "../styles/colors";
import { DrawerHeader } from "./DrawerHeader";
import Header from "./Header";
import SideBar from "./SideBar";

const Main = () => {
  const { loanId } = useParams();
  const theme = useTheme();
  const { loan, setLoan, tasks, setTasks, setReport, setChecklists } =
    useLoanStore();
  const [open, setOpen] = React.useState(true);
  const service = new ApplicationService();

  React.useEffect(() => {
    const fetchLoanData = async () => {
      const checklists = await service.getChecklists(loanId!);
      if (checklists) {
        setChecklists(checklists);
      }

      const report = await service.getReport(loanId!);
      if (report) {
        setReport(report!);
      }

      const tasks = await service.getTasks(loanId!);
      if (tasks) {
        setTasks(tasks);
      }

      const loan = await service.getApplication(loanId!);
      if (loan) {
        setLoan(loan);
      }
    };

    fetchLoanData();
  }, [loanId]);

  return (
    <Box sx={{ display: "flex", backgroundColor: Color.lightPrimary }}>
      {loan && (
        <>
          <Header
            open={open}
            handleDrawerOpen={() => setOpen(true)}
            loan={loan}
          />

          <SideBar
            open={open}
            handleDrawerClose={() => setOpen(false)}
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
