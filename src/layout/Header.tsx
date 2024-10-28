import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, styled, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import AccountSettings from "../components/AccountSettings";

const drawerWidth = 240;

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

            <AccountSettings />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
