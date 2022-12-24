import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Stack,
  styled,
  TextField,
  Typography,
  CardMedia,
  Card,
  CardActions,
} from "@mui/material";
import React, { useState } from "react";
import { appName } from "../../constant/defaultValues";
import * as Yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import { useSnackbar } from "notistack";
import { contry } from "../../constant/defaultValues";
import UserBackground from "../../asset/pages/user/ballbackground.jpg";
import { Box } from "@mui/system";

const RootStyle = styled(Stack)((theme) => ({
  minHeight: "100vh",
}));
const CheckBoxLabel = styled(FormControlLabel)((theme)=>({
  fontSize: "12px",
  letterSpacing: "2px",
  color: "#565656",
}));

function ProfileData() {
  const { register } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string(),
    email: Yup.string().email().required(),
    country: Yup.string().required(),
    phone: Yup.number().required(),
    agree: Yup.bool().required(),
    ProfilePic: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "Jestin ",
      lastName: "Xavier",
      email: "xavier@gmail.com",
      phone: "",
      country: null,
      agree: false,
      showPassword: false,
      ProfilePic: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      let res = register(values);
      enqueueSnackbar(res, { variant: "success" });
    },
  });

  const { getFieldProps, errors, touched, setFieldValue, values } = formik;
  const [file, setFile] = useState(null);
  return (
    <>
      <RootStyle mx="auto" justifyContent={"center"}>
        <Typography color="text.secondary" mb={3} variant="p">
          Enter your details below.
        </Typography>
        <FormikProvider value={formik}>
          <Form>
            <Stack spacing={3}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="First name"
                  {...getFieldProps("firstName")}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  fullWidth
                />
                <TextField
                  label="Last name"
                  {...getFieldProps("lastName")}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  fullWidth
                />
              </Stack>
              <Stack spacing={3}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    label="Email address"
                    {...getFieldProps("email")}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    fullWidth
                  />

                  <TextField
                    label="Phone Number"
                    {...getFieldProps("phone")}
                    error={Boolean(touched.phone && errors.phone)}
                    helperText={touched.phone && errors.phone}
                    fullWidth
                    type="number"
                  />
                </Stack>
              </Stack>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={}
                  label="Country"
                  {...getFieldProps("country")}
                  error={Boolean(touched.country && errors.country)}
                  helperText={touched.country && errors.country}
                >
                  {contry.map((data, index) => {
                    return (
                      <MenuItem key={index} value={data.name}>
                        {data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>

              {/* <TextField
                label="Upadte Your Profile Picture"
                {...getFieldProps("ProfilePic")}
                error={Boolean(touched.ProfilePic && errors.ProfilePic)}
                helperText={touched.ProfilePic && errors.ProfilePic}
                fullWidth
                type="file"
                InputLabelProps={{
                  shrink: true,
                }}
              /> */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems={"center"}
              >
                <Card>
                  <CardMedia
                    component="img"
                    height="240"
                    image={file ? URL.createObjectURL(file) : UserBackground}
                    alt="green iguana"
                  />
                  <CardActions>
                    <Button variant="contained" component="label">
                      Upload Profile Picture
                      <input
                        type="file"
                        hidden
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                          console.log(e.target.files[0], "e.target.files");
                        }}
                      />
                    </Button>
                  </CardActions>
                </Card>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <Typography variant="subtitle1">what is your Role</Typography>
                  <Stack
                    direction="row"
                    alignItems={"center"}
                    justifyContent="space-between"
                  >
                    <CheckBoxLabel
                      
                      control={<Checkbox {...getFieldProps("agree")} />}
                      label="Reader"
                      labelPlacement="bottom"
                    />
                    <CheckBoxLabel
                      
                      control={<Checkbox {...getFieldProps("agree")} />}
                      label="Author"
                      labelPlacement="bottom"
                    />
                    <CheckBoxLabel
                    
                      control={<Checkbox {...getFieldProps("agree")} />}
                      label="Reviewer"
                      labelPlacement="bottom"
                    />
                  </Stack>
                </Box>
              </Stack>

              <Button size="medium" type="submit" variant="outlined">
                Update
              </Button>
            </Stack>
          </Form>
        </FormikProvider>
      </RootStyle>
    </>
  );
}

export default ProfileData;
