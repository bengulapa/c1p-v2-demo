import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Main from "./layout/Main";
import ApplicationDetails from "./pages/Application/ApplicationDetails";
import CreditDecision from "./pages/CreditDecision/CreditDecision";
import CustomerDetails from "./pages/Customer/CustomerDetails";
import Overview from "./pages/Overview/Overview";
import Search from "./pages/Search";
import Tasks from "./pages/Tasks/Tasks";
import "./styles/styles.css";
import { createOaTheme } from "./styles/theme";
import "./styles/utility.css";
import Login from "./pages/Login";

const theme = createOaTheme();

const PrivateRoutes = () => {
  const auth = localStorage.getItem("oa.c1pv2.auth");
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Navigate to="/search" />} />
            <Route path="/search" element={<Search />} />
            <Route path="/:loanId" element={<Main />}>
              <Route path="overview" element={<Overview />} />
              <Route path="application" element={<ApplicationDetails />} />
              <Route path="customer" element={<CustomerDetails />} />
              <Route path="decision" element={<CreditDecision />} />
              <Route path="tasks" element={<Tasks />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
