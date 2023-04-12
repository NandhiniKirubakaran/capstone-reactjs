import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { API } from "./global";



export function Signup() {

const navigate = useNavigate();

const {handleChange, handleSubmit} = useFormik({
      initialValues: {username: "Admin", password: "admin@12345"},
      onSubmit: async (values) => {
        console.log(values);

      const data = await fetch(`${API}/students/signup`,{
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
