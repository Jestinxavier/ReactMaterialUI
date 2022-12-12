import React, { useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { Box, Container } from "@mui/system";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography, Grid,
} from "@mui/material";
import { Button } from "../../theme/overrides/Button";
import UserBackground from "../../asset/pages/user/ballbackground.jpg";
import ProfileData from "../../components/profile/ProfileData";

function UserProfile() {
  const [userdata, setUserdata] = useState({
    firstname:"jestin",
    Lastname:"xavier",
    email:"xavi@gmail.com",
  })
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          height="240"
          image={UserBackground}
          alt="green iguana"
          
        />
        {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent> */}
      </Card>
      <Box sx={{ marginTop:-18, }}>
      <Avatar
        sx={{
          border: `1px solid #76B0F1`,
          height: { xs: 100, md: 150 },
          width: { xs: 100, md: 150 },
          mx: "auto",
         
        }}
        alt="Remy Sharp"
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
      />
      </Box>
      <Container>
     
        <Box sx={{display:'flex',     flexDirection: "column",
    alignItems: "center"}}>
      <Typography  variant="p" sx={{    fontSize: 24,
    fontFamily: "system-ui",
    letterSpacing: 3}}>
       Welcome 
      </Typography>
      <Typography sx={{color: 'primary.light', fontSize: 24,
    fontFamily: "monospace",
    letterSpacing: 5,
    fontWeight: 500,
}} variant="p">Jestin Xavier </Typography>  
      </Box>
    <ProfileData data={userdata} />
      </Container>
    </div>
  );
}

export default UserProfile;
