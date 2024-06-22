import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import TextField  from '@mui/material/TextField'
import { Button } from '@mui/material';
export default function Login() {

    const mynavigation = useNavigate();
    const validationSchema = yup.object({
        username: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        password: yup
          .string('Enter your password')
          .min(8, 'Password should be of minimum 8 characters length')
          .required('Password is required'),
      });

    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
          },
          validationSchema: validationSchema,
          onSubmit:  (values) => {

            fetch("http://127.0.0.1:5001/api/user/login",{
                body: JSON.stringify(values),
                method: "POST",
                headers : {
                    'Content-Type': "application/json"
                }
            }).then(y=>y.json())
            .then(y=>{

                console.log("token",JSON.stringify(y));
                mynavigation("/lead");

            })
          }

    })

  return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="username"
        label="Email"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </form>
  </div>
  )
}
