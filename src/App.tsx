import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import ApplicationDetails from "./components/ApplicationDetails";
import CreditDecision from "./components/CreditDecision";
import CustomerDetails from "./components/CustomerDetails";
import Overview from "./components/Overview";
import Tasks from "./components/Tasks";
import "./styles/styles.css";
import "./styles/utility.css";
import Dashboard from "./views/Dashboard";
import Search from "./views/Search";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5e2d90",
    },
    secondary: {
      main: "#a3298f",
    },
    error: {
      main: "#e3454d",
    },
    success: {
      main: "#78ba03",
    },
    warning: {
      main: "#f4ce5c",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
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
