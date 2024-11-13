import MenuIcon from "@mui/icons-material/Menu";
import {
  Badge,
  Box,
  Drawer,
  IconButton,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import AccountSettings from "../components/AccountSettings";
import React from "react";
import PendingIcon from "@mui/icons-material/Pending";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ProcessList from "../components/ProcessList";
import AuditLogs from "../components/AuditLogs";

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
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openAuditLogs, setOpenAuditLogs] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  const toggleAuditLogs = (newOpen: boolean) => () => {
    setOpenAuditLogs(newOpen);
  };

  return (
    <AppBar position="fixed" open={open} color="primary">
      <Toolbar>
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

          <div className="d-flex">
            <Typography variant="caption" className="mr-3">
              Broker: Klein Moretti <a href="tel:0400000000">+0400000000</a>{" "}
              &lt;
              <a href="email:mr.fool@lotm.com">mr.fool@lotm.com</a>&gt;
              <br />
              BDM: Ben Gulapa
              <br /> Status: Credit Status / Settlement Status
            </Typography>

            <Tooltip title="Automation">
              <IconButton
                color="secondary"
                className="d-flex flex-column"
                onClick={toggleDrawer(!openDrawer)}
              >
                <Badge badgeContent={2} color="error">
                  <PendingIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Audit Logs">
              <IconButton
                color="secondary"
                className="d-flex flex-column"
                onClick={toggleAuditLogs(!openAuditLogs)}
              >
                <ReceiptLongIcon />
              </IconButton>
            </Tooltip>

            <AccountSettings />
          </div>
        </div>
      </Toolbar>
      <Drawer open={openDrawer} onClose={toggleDrawer(false)} anchor="right">
        <Box
          sx={{ width: 320, mt: 5, pt: 5, px: 1, height: "100%" }}
          role="presentation"
        >
          <ProcessList />
        </Box>
      </Drawer>
      <Drawer open={openAuditLogs} onClose={toggleDrawer(false)} anchor="right">
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
