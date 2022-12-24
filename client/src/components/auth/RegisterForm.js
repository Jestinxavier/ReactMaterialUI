import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Link,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import { appName } from "../../constant/defaultValues";
import * as Yup from "yup";
import { Form, FormikProvider, useFormik } from "formik";
import useAuth from "../../hooks/useAuth";
import { useSnackbar } from "notistack";
import {useNavigate} from 'react-router-dom';
import axios from '../../axios';
import {example} from '../../constant/Urls'


const RootStyle = styled(Stack)((theme) => ({
  minHeight: "100vh",
}));


function RegisterForm() {
  const navigate = useNavigate();

 
  const { register } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    agree: Yup.bool().required(),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agree: false,
      showPassword: false,
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      console.log(values,"values*****");

      axios.post(example,values).then(res=>{
        console.log('ss',res.data);
        
    }).catch(err=>{
        // alert("netork erre");
    })

      let res = register(values);
      
      enqueueSnackbar(res, { variant: "success" });
      // navigate.push("/auth/login",{ replace: true })
    },
  });
  
  const handleClick = ()=> {
    console.log('sdddssds');
   ;
  }
  const sendSubmit = () => {
    navigate("/auth/login");
    };
  const { getFieldProps, errors, touched, setFieldValue, values } = formik;
  return (
    <>
      <RootStyle mx="auto" justifyContent={"center"} maxWidth={480}>
        <Typography variant="h4" mb={2}>
          Register to {appName}
        </Typography>
        <Typography color="text.secondary" mb={3} variant="p">
          Enter your details below.
        </Typography>
        <FormikProvider   value={formik}>
          <Form onSubmit={formik.handleSubmit}>
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
              <TextField
                label="Email address"
                {...getFieldProps("email")}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                label="Password"
                type={values.showPassword ? "text" : "password"}
                {...getFieldProps("password")}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={() =>
                        setFieldValue("showPassword", !values.showPassword)
                      }
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
              />
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
              >
                <FormControlLabel
                  control={<Checkbox {...getFieldProps("agree")} />}
                  label="I agree to the Terms Of Use and Privacy Policy"
                />
              </Stack>
              <Button size="large" type="submit" variant="contained"  >
                Register
              </Button>
            </Stack>
          </Form>
        </FormikProvider>
        <Typography mt={3} textAlign={"center"}>
          Already have an account? <Link underline="hover">Login Now</Link>
        </Typography>
      </RootStyle>
    </>
  );
}

export default RegisterForm;
