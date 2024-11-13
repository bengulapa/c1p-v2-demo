import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import {
  CSSObject,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Theme,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { Link, useLocation } from "react-router-dom";
import { DrawerHeader } from "./DrawerHeader";
import { Color } from "../styles/colors";

interface IProps {
  open: boolean;
  handleDrawerClose?: () => void;
  theme: Theme;
}

const drawerWidth = 220;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  background: Color.lightGray,
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const menuItems = [
  {
    text: "Overview",
    icon: <SummarizeIcon />,
    path: `overview`,
  },
  {
    text: "Application Details",
    icon: <CreditScoreIcon />,
    path: `application`,
  },
  { text: "Customer Details", icon: <RememberMeIcon />, path: "customer" },
  { text: "Credit Decision", icon: <ChecklistIcon />, path: "decision" },
  { text: "Broker Comms", icon: <SupportAgentIcon />, path: "broker-comms" },
  { text: "Attachments", icon: <AttachFileIcon />, path: "attachments" },
];

const SideMenu = ({ open, handleDrawerClose, theme }: IProps) => {
  const { pathname } = useLocation();

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List dense disablePadding>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                selected={pathname.includes(item.path)}
                component={Link}
                to={item.path}
                sx={[
                  {
                    minHeight: 36,
                    px: 2,
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    open
                      ? {
                          mr: 2,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    {
                      textTransform: "uppercase",
                    },
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SideMenu;
