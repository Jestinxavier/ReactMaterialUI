import React, { useState } from "react";
import {
  Stack,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Drawer as MuiDrawer,
  styled,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  AddCircleOutline,
  ChevronRight,
  GroupsSharp,
  Home,
  LayersSharp,
  LocalOffer,
  ModeNight,
  PeopleAlt,
  Security,
  Settings,
  Store,
  Visibility,
  SmsOutlined,
  DoorbellOutlined, 
} from "@mui/icons-material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(20)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Sidebar({ open, setOpen }) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const [menudata, setMenudata] = useState([
    { name: "Home", icon: <Home />, link: "/dashboard/app" },
    {
      name: "Notification",
      icon: <SmsOutlined />,
      link: "/dashboard/new",
    },
    { name: "Chat", icon: <DoorbellOutlined />, link: "/dashboard/submission" },
  ]);
  // const [tabValue, setTabValue] = useState(1)
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={() => setOpen((ps) => !ps)}>
          {<ChevronRight />}
        </IconButton>
      </DrawerHeader>
      <List>
        {menudata?.map((x) => (
          <ListItem>
            <ListItemButton
              component={RouterLink}
              to={x.link}
              sx={{
                borderRadius: "30px",
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                backgroundColor:
                  pathname.includes(x.link) && theme.palette.primary.lighter,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {x.icon}
              </ListItemIcon>
              <ListItemText  sx={{ opacity: open ? 1 : 0 }} primary={x.name} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* <ListItem>
          <ListItemButton component="a" href="#" sx={{ borderRadius: "30px" }}>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem> */}
      </List>
    </Drawer>
  );
}

export default Sidebar;
