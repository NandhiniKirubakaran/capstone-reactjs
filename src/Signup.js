import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";



export function Signup() {

const navigate = useNavigate();

const {handleChange, handleSubmit} = useFormik({
      initialValues: {username: " ", password: " "},
      onSubmit: async (values) => {
        console.log(values);

      const data = await fetch("http://localhost:4000/students/signup",{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
})
      const result = await data.json();
      console.log("Successfully created",result);
      navigate("/");
}
});

  return (
    <div>
      <form onSubmit={handleSubmit} className="signup-form">
        <TextField 
          label="Email"
          variant="outlined"
          onChange={handleChange}
          name="Email"
        />
        <TextField 
          label=" Create username"
          variant="outlined"
          onChange={handleChange}
          name="username"
        />
        <TextField 
          label="Create password"
          variant="outlined"
          onChange={handleChange}
          name="password"
        />
        <Button type="submit" variant="contained">
        create account
        </Button>
      </form>
    </div>
  );
}
