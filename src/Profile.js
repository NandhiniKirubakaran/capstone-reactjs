import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from './Navbar';
import { Header } from './Header';



export function Profile() {

  const [name, setName ] = useState("");
  const [phone, setPhone ] = useState("");
  const [email, setEmail ] = useState("");
  const [batch, setBatch ] = useState("");
  const [qualification, setQualification ] = useState("");
  const [year, setYear ] = useState("");


  const navigate = useNavigate();

  const addProfile = () => {
    const newUser = [{
      name: name,
      phone: phone,
      email: email,
      batch: batch,
      qualification: qualification,
      year: year,
    }];
  // console.log(newUser);
    fetch("http://localhost:4000/students",{ 
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json"
      },
    }).then(() => navigate("/student-list"));
  };


  return (
    <div>
      <Navbar />
      <Header />
      <div className='profile-page'>
      <div className='personal'>
        <div className='personal-details'>
          <label for="name">Name</label>
          <label for="phone">Phone</label>
          <label for="email">Email</label>
          <label for="batch">Batch</label>
          <label for="qualification">Qualification</label>
          <label for="year">Year of passing</label>
          
        </div>
        <div className='personal-details-1'>
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} 
          type="text" 
          name="name" 
          onChange={(event) => setName(event.target.value)}
          />
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} 
          type="number" 
          name="phone"
          onChange={(event) => setPhone(event.target.value)}
          />
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} 
          type="text" 
          name="email" 
          onChange={(event) => setEmail(event.target.value)}
          />
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} 
          type="text" 
          name="batch" 
          onChange={(event) => setBatch(event.target.value)}
          />
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} 
          type="text" 
          name="qualification" 
          onChange={(event) => setQualification(event.target.value)}
          />
          <input style={{borderRadius:'10px', height:'50px', width:'350px', border:'1px solid rgb(233, 222, 222)', paddingLeft:'15px'}} 
          type="number" 
          name="year" 
          onChange={(event) => setYear(event.target.value)}
          />

          <button className="add-profile-button"
          onClick={addProfile}>Add Profile</button>
        </div>
      </div>
      </div>
    </div>
  );
};
