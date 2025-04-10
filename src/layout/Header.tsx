import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import MenuIcon from "@mui/icons-material/Menu";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SummarizeIcon from "@mui/icons-material/Summarize";
import {
  Box,
  Drawer,
  IconButton,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import React from "react";
import AccountSettings from "../components/AccountSettings";
import AuditLogs from "../components/AuditLogs";
import ReportCardDialog from "../components/ReportCardDialog";

const drawerWidth = 220;

interface AppBarProps extends MuiAppBarProps {
  open: boolean;
  handleDrawerOpen?: () => void;
  loan?: any;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Header = ({ open, handleDrawerOpen, loan }: AppBarProps) => {
  const [openAuditLogs, setOpenAuditLogs] = React.useState(false);
  const [openReportCard, setOpenCard] = React.useState(false);

  const toggleAuditLogs = (newOpen: boolean) => () => {
    setOpenAuditLogs(newOpen);
  };

  return (
    <AppBar position="fixed" open={open} color="primary">
      <Toolbar className="px-3">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Typography variant="h6">
            {loan.creditArrangementId} - {loan.entityName}
          </Typography>

          <div className="d-flex align-items-center">
            <Tooltip title="View Report Card">
              <IconButton color="secondary" onClick={() => setOpenCard(true)}>
                <SummarizeIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Audit Logs">
              <IconButton
                color="secondary"
                className="mr-3"
                onClick={toggleAuditLogs(!openAuditLogs)}
              >
                <ReceiptLongIcon />
              </IconButton>
            </Tooltip>
            <Typography variant="caption" className="mr-3">
              Broker: Ben Gulapa{" "}
              <Tooltip title="Email">
                <a href="tel:0400000000">
                  <CallSharpIcon sx={{ fontSize: 12 }} />
                </a>
              </Tooltip>{" "}
              <Tooltip title="Call">
                <a href="email:mr.fool@lotm.com">
                  <AlternateEmailSharpIcon sx={{ fontSize: 12 }} />
                </a>
              </Tooltip>
              <br />
              BDM: Klein Moretti
            </Typography>

            <AccountSettings />
          </div>
        </div>
      </Toolbar>
      <ReportCardDialog
        open={openReportCard}
        handleClose={() => setOpenCard(false)}
      />
      <Drawer
        open={openAuditLogs}
        onClose={toggleAuditLogs(false)}
        anchor="right"
      >
        <Box
          sx={{ width: 320, mt: 5, pt: 5, px: 1, height: "100%" }}
          role="presentation"
        >
          <AuditLogs />
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
