import { Box, Stack, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  return (
    <>
      {/* <Navbar open={open} setOpen={setOpen} /> */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${theme.spacing(20)} + 1px)`,
          marginLeft: theme.spacing(20),
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          ...(open && {
            marginLeft: "240px",
            width: `calc(100% - ${240}px)`,
          }),
        }}
      >
        <Outlet />
      </Box>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
}

export default Dashboard;
