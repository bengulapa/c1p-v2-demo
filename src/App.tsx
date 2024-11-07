import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import "./styles/styles.css";
import "./styles/utility.css";
import Dashboard from "./views/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import ApplicationDetails from "./components/ApplicationDetails";
import Attachments from "./components/Attachments";
import BrokerComms from "./components/BrokerComms";
import CreditDecision from "./components/CreditDecision";
import CustomerDetails from "./components/CustomerDetails";
import Overview from "./components/Overview";
import SearchLoan from "./views/SearchLoan";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5e2d90",
    },
    secondary: {
      main: "#a3298f",
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "medium",
      },
    },
    MuiFilledInput: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiFormControl: {
      defaultProps: {
        size: "small",
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: "dense",
        size: "small",
      },
    },
    MuiListItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: "small",
      },
    },
    MuiFab: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTable: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: "dense",
      },
    },
    MuiToolbar: {
      defaultProps: {
        variant: "dense",
      },
    },
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigate to="/search" />} />
          <Route path="/search" element={<SearchLoan />} />
          <Route path="/:loanId" element={<Dashboard />}>
            <Route path="overview" element={<Overview />} />
            <Route path="application" element={<ApplicationDetails />} />
            <Route path="customer" element={<CustomerDetails />} />
            <Route path="decision" element={<CreditDecision />} />
            <Route path="broker-comms" element={<BrokerComms />} />
            <Route path="attachments" element={<Attachments />} />
          </Route>
          <Route path="*" element={<SearchLoan />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
