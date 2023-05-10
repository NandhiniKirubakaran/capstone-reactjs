import { useEffect, useState } from 'react';
// import { API } from './global';
import { IconButton } from '@mui/material';
import { Card } from 'antd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Navbar } from './Navbar';
import { Header } from './Header';


export function StudentList() {

// const students = [
//   {
//         name: "Harsitha A",
//         id: "BW2022",
//         batch: "B40WD",
//         phone: 8754695488,
//         mail: "njfewnkf@gmail.com",
//         qualification: "BE-cse",
//         year: 2016,
//   },
//   {
//     name: "Harsitha A",
//     id: "BW2022",
//     batch: "B40WD",
//     phone: 8754695488,
//     mail: "njfewnkf@gmail.com",
//     qualification: "BE-cse",
//     year: 2016,
// }
// ];

  const [students, setStudents] = useState([]);

  const getUsers = () => {
    fetch("http://localhost:4000/students", {
      method: "GET",
    })
    .then((data) => data.json())
    .then((users) => setStudents(users));
  };

  useEffect(() => getUsers(), []);
  
  return (
    <div>
        <Navbar />
        <Header /> 
      <div className='stu-list-displays'>
        {
        students.map((st, index) => (
          <StudentDetails key={index} detail={st} />
        ))}
      </div>
     </div>
  );
}


function StudentDetails( {detail} ) {
//  const detail = {
//     name: "Harsitha A",
//     id: "BW2022",
//     batch: "B40WD",
//     phone: 8754695488,
//     mail: "njfewnkf@gmail.com",
//     qualification: "BE-cse",
//     year: 2016,
//   };
  return (
      
        <div className='student-list'>
          <Card className='card-student-list'>
            <p className='para'><b>Student Name: </b>{detail.name}</p>
            <p className='para'><b>Batch: </b>{detail.batch}</p>
            <p className='para'><b>Phone No: </b>{detail.phone}</p>
            <p className='para'><b>Email-id: </b>{detail.mail}</p>
            <p className='para'><b>Qualification: </b>{detail.qualification}</p>
            <p className='para'><b>Year of passing: </b>{detail.year}</p>
          
          </Card>
        </div>
     
  
  );
}
