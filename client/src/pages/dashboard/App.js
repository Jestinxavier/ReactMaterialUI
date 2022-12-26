import {
  Box,
  Typography,
  Divider,
  TextField,
  Grid,
  styled,
  Card,
  useTheme,
  Button,
  Paper,
  Avatar,
  Stack,
} from "@mui/material";
import theme from "../../theme";
import React, { useEffect, useState } from "react";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { backgroundColor } from "../../theme/background";
import Viegraph from "../../layouts/dashboard/feed/Viegraph";
import DataTable from "../../components/Dashboard/DataTable";
import axios from '../../axios'
import { SettingsInputAntennaTwoTone } from "@mui/icons-material";
import { Form, FormikProvider, useFormik } from "formik";

const StyledToolbar = styled(TextField)({
  borderRadius: "30px",
});

function App() {
  const [email, setEmail] = useState()
  const handleTriggrer =()=>{
    axios.post('/users', {
      userMail: email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(() => {
   
  }, [])
  const [themeColor, setthemeColor] = useState(backgroundColor);
  const theme = useTheme();
  return (
    <Box bgcolor="#fdfdfd" flex={4} p={2}>
      <Grid spacing={3} container justifyContent="space-between" mt={10} mb={10}>
        <Grid display={{ md: "block" }} md={5} item>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              m: 2,
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextSnippetIcon
                sx={{ color: "red", minWidth: "52px", minHeight: "52px" }}
              />
              <Typography
              sx={{
                display: "flex",
                justifyContent: "start",
                fontWeight: "bold",
                fontSize: 21,
              }}
            >
               react-apexcharts pending
            </Typography>
               

              
            </Box>
          </Card>
          {/* <Viegraph /> */}
        </Grid>
        <Grid display={{ md: "block" }} md={7} item>
          <Paper
            elevation={12}
            sx={{
              padding: "20px",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                justifyContent: "start",
                fontWeight: "bold",
                fontSize: 21,
              }}
            >
              Add Collaborataors
            </Typography>
            {/* <Box  display="flex"  flexDirection='row' alignItems="center" justifyContent="space-between" > */}
            <Grid container spacing={3}>
              
              <Grid display={{ md: "block" }} md={10} item>
                <TextField
                  id="full-width-text-field"
                  label="Email"
                  placeholder="Enter email"
                  margin="normal"
                  fullWidth // this may override your custom width
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                />
              </Grid>
              <Grid
                display={{ md: "flex" }}
                flexDirection="column"
                alignItems="flex-end"
                justifyContent="center"
                md={2}
                item
              >
                <Button
                  style={{
                    borderRadius: 3,
                    backgroundColor: "#00bcd3",
                  }}
                  px={3}
                  variant="contained"
                  size="small"
                  onClick={()=>{handleTriggrer()}}
                >
                  Create
                </Button>
              </Grid>
            </Grid>
            {/* </Box> */}
          </Paper>
          {/* <Viegraph /> */}
        </Grid>
      </Grid>
      {/* <Grid spacing={3} container justifyContent="space-between" mt={30}> */}
      <Paper elevation={12}>
        <DataTable />
      </Paper>
      {/* </Grid> */}
    </Box>
  );
}

export default App;
