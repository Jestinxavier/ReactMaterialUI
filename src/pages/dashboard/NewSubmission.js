import { Card, Container, Typography,useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NewSubmissionForm from "../../components/newsubmission/NewSubmissionForm";
import Satlight from "../../asset/pages/newsubmission/satlight.svg"
import Teliscope from "../../asset/pages/newsubmission/Teliscope.svg"
// import { useTheme } from "styled-components";
function NewSubmssion() {
  const theme = useTheme()
  return (
    <div>
      <Card>
      <Box sx={{ display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    background: theme.palette.primary.pinlight,}}>
      <Box sx={{display:"flex"}}>
        <Typography variant="p" sx={{ fontSize: "25px", letterSpacing: "3px",    fontFamily: "system-ui" }}>
          Publish your research to the World
        </Typography>
        </Box>
        {/* <Typography component="img" sx={{width: "290px"}}  src={Teliscope}></Typography> */}
        <Typography component="img" sx={{width: "290px"}} src={Satlight}></Typography>
      </Box>
      </Card>
    <Container sx={{ mx: "auto",}}>
      <NewSubmissionForm />
      </Container>
    </div>
  );
}

export default NewSubmssion;
