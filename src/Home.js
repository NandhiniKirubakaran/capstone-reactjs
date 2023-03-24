import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useState } from 'react';
import { API } from './global';


export function Home() {
  return (
    <div className='heading'>
      <h1>ADMIN DASHBOARD</h1>
      <LoginForm />
    </div>
  );
}


function LoginForm() {

  const [formState, setFormState] = useState("success");
  const navigate = useNavigate();

  const {handleChange, values, handleSubmit } = useFormik({
    initialValues: {username: "student", password: "Zenstudent@123"},
    onSubmit: async (values) => {
      console.log(values);

    const data = await fetch (`${API}`,{
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(values),
        })
      // .then((data) => data.json())
      // .then((result) => console.log(result));
        if(data.status === 401){
          console.log("❌ Error");
          setFormState("error");
        } else {
          const result = await data.json();
          console.log("✅ Success", result);
          navigate("/class-details");
        }
        // const result = await data.json();
        // console.log(result);
    }
  });

  return (
    <div>
      <form onSubmit={ handleSubmit } className='login-form'>
        <h2>Login</h2>
        <TextField 
          label="Username"
          variant="outlined"
          onChange={handleChange}
          value={values.username}
          name="username" 
        />
        <TextField 
          label="Password"
          variant="outlined"
          onChange={handleChange}
          value={values.password}
          name="password" 
        />
        <Button color={formState} type="submit" variant="contained">
        { formState === "error" ? "Retry" : "Submit" }
        </Button>
      </form>
      <div className='signup-link'>
        <p>Need an account?</p>
        <Button type="submit" 
        colour="primary"
        onClick={() => navigate("/signup-page")}>SIGN UP</Button>
      </div>
    </div>
  );
}
