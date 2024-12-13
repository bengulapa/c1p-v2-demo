import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import ApplicationDetails from "./components/ApplicationDetails";
import CreditDecision from "./components/CreditDecision";
import CustomerDetails from "./components/CustomerDetails";
import Overview from "./components/Overview";
import Tasks from "./components/Tasks";
import "./styles/styles.css";
import { createOaTheme } from "./styles/theme";
import "./styles/utility.css";
import Dashboard from "./views/Dashboard";
import Search from "./views/Search";

const theme = createOaTheme();

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:loanId" element={<Dashboard />}>
            <Route path="overview" element={<Overview />} />
            <Route path="application" element={<ApplicationDetails />} />
            <Route path="customer" element={<CustomerDetails />} />
            <Route path="decision" element={<CreditDecision />} />
            <Route path="tasks" element={<Tasks />} />
          </Route>
          <Route path="*" element={<Search />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
