import {
  Box,
  Typography,
  Divider,
  TextField,
  Grid,
  styled,
  Card,
  useTheme,
} from "@mui/material";
import theme from "../../theme";
import React, { useState } from "react";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { backgroundColor } from "../../theme/background";
import Viegraph from "../../layouts/dashboard/feed/Viegraph";
const StyledToolbar = styled(TextField)({
  borderRadius: "30px",
});
function App() {
  const [themeColor, setthemeColor] = useState(backgroundColor);
  const  theme  = useTheme();
  console.log(theme,'theme');
  const [first, setfirst] = useState([
    {
      name: "Listed Documents",
      icon: (
        <TextSnippetIcon
          sx={{ color: 'primary.light', minWidth: "52px", minHeight: "52px" }}
        />
      ),
      value: 3,
    },
    {
      name: "Status Of Document",
      icon: (
        <PendingActionsIcon
          sx={{ color: themeColor, minWidth: "52px", minHeight: "52px" }}
        />
      ),
      value: 30,
    },
    {
      name: "Most Viewed",
      icon: (
        <RemoveRedEyeIcon
          sx={{ color: themeColor, minWidth: "52px", minHeight: "52px" }}
        />
      ),
      value: 30,
    },
    {
      name: "Rejected Document",
      icon: (
        <CancelPresentationIcon
          sx={{ color: themeColor, minWidth: "52px", minHeight: "52px" }}
        />
      ),
      value: 30,
    },
  ]);
  return (
    <Box bgcolor="#fdfdfd" flex={4} p={2}>
      <Typography variant="h5" color="initial">
        Dashboard
      </Typography>
      <Divider sx={{ m: 0.5 }} orientation="horizontal" />
      <Grid container>
        {first.map((item, i) => {
          return (
            <Grid display={{ md: "block" }} md={3} item>
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
                  {/* <TextSnippetIcon sx={{color :"red",    minWidth: "52px",minHeight: "52px"}} /> */}
                  {item.icon}
                  <Box sx={{ mt: 3 }}>
                    <Typography
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        fontFamily: "inherit",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
              </Card>
              {/* <Viegraph /> */}
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default App;
