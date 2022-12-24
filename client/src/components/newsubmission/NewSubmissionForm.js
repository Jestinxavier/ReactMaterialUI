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
  TextareaAutosize,
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
const CheckBoxLabel = styled(FormControlLabel)((theme) => ({
  fontSize: "12px",
  letterSpacing: "2px",
  color: "#565656",
}));

function NewSubmissionForm() {
  const { register } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const RegisterSchema = Yup.object().shape({
    papertitle: Yup.string().required(),
    author: Yup.string(),
    abstract: Yup.string().required(),
    references: Yup.string().required(),
    email: Yup.string().email().required(),
    country: Yup.string().required(),
    phone: Yup.number().required(),
    agree: Yup.bool().required(),
    ProfilePic: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      papertitle: "",
      author: "",
      abstract: "",
      references:"",
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
          Enter your jornal details below.
        </Typography>
        <FormikProvider value={formik}>
          <Form>
            <Stack spacing={3}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  label="Paper Title"
                  {...getFieldProps("papertitle")}
                  error={Boolean(touched.papertitle && errors.papertitle)}
                  helperText={touched.papertitle && errors.papertitle}
                  fullWidth
                />

                <TextField
                  label="Author"
                  {...getFieldProps("author")}
                  error={Boolean(touched.author && errors.author)}
                  helperText={touched.author && errors.author}
                  fullWidth
                />
              </Stack>
              <Typography>Abstract</Typography>
              <TextareaAutosize
                label="Last name"
                aria-label="empty textarea"
                placeholder="enter your abstract here..."
                {...getFieldProps("abstract")}
                error={Boolean(touched.abstract && errors.abstract)}
                helperText={touched.abstract && errors.abstract}
                fullWidth
                minRows={10}
              />
              <Typography>References</Typography>
              <TextareaAutosize
                label="Last name"
                aria-label="empty textarea"
                placeholder="enter your references here..."
                {...getFieldProps("abstract")}
                error={Boolean(touched.references && errors.references)}
                helperText={touched.references && errors.references}
                fullWidth
                minRows={10}
              />
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
              <Card>
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
                      Upload File
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
                  <Typography variant="subtitle1">This paper is based on which stream?</Typography>
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
              </Card>
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

export default NewSubmissionForm;
