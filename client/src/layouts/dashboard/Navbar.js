import {
  AppBar as MuiAppBar,
  styled,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Icon,
  MenuItem, 
  Menu,
} from "@mui/material";
import Collapse from '@mui/material/Collapse';
import React, { useState } from "react";
import {
  Search,
  MailIcon,
  MenuIcon,
  Notifications,
  Pets,
  MenuOpen,
 
} from "@mui/icons-material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Searchbar from "../../components/navbar/Searchbar"
import ImageAvathar from "../../components/navbar/ImageAvathar"

const drawerWidth = 240;

const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between",
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(100% - ${theme.spacing(20)} + 1px)`,
  marginLeft:theme.spacing(20),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledBox = styled(Box)({
    border: "#b9bfc1 solid 1px",
    background: "azure",
    display: "flex",
    alignItems: "center",
    borderRadius: 30,
    padding: 1,
})
function Navbar({open, setOpen}) {
    // const [OpenMenu, setOpen] = useState(false)
  return (
    <AppBar open={open} position="sticky" bgcolor="#eb6709">
       
      <StyledToolbar>
        <Typography>IJ-SPER</Typography>
        {/* <Searchbar /> */}
        <StyledBox onClick={()=>{setOpen(ps=>!ps)}}>
        <ImageAvathar />
        {/* <Collapse orientation="horizontal"  > */}
        <Typography variant="caption"   color="initial">Jestin Xavier</Typography>
        {/* <ArrowDropDownIcon sx={{color:"black"}}/> */}
            {/* </Collapse> */}
        </StyledBox>
      </StyledToolbar>
      {/* <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        sx={{marginTop:10}}
        open={OpenMenu}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu> */}
    </AppBar>
  );
}

export default Navbar;
