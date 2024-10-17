import {
  Avatar,
  IconButton,
  styled,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountSettings from "../components/AccountSettings";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open: boolean;
  handleDrawerOpen?: () => void;
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

const Header = ({ open, handleDrawerOpen }: AppBarProps) => {
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
          <Typography variant="h6">CA0000000000 - Gula Patisserie</Typography>

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
