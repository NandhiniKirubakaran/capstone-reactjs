import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useEffect, useState } from 'react';


export function StudentList() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/students")
      .then((data) => data.json())
      .then((stu) => setStudents(stu));
  }, []);
  
  return (
    <div>
      {students.map((st, index) => (
        <StudentDetails key={index} detail={st} />
      ))}
    </div>
  );
}


function StudentDetails({ detail }) {
  // const detail = {
  //   "name": "Nandhini Kirubakaran",
  //   "role-no": "001",
  //   "batch": "B40WD",
  //   "language": "Tamil",
  //   "passed-out": "2016",
  //   "contact-no": "8825445655",
  //   "mail-id": "knaphasri@gmail.com",
  //   "district": "Trichy"
  //   };
  return (
    <div>
      <table className='table'>
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell>Role-No</TableCell>
            <TableCell>Batch</TableCell>
            <TableCell>Language</TableCell>
            <TableCell>Passed-Out</TableCell>
            <TableCell>Contact-No</TableCell>
            <TableCell>Mail-Id</TableCell>
            <TableCell>District</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell>{detail.name}</TableCell>
          <TableCell>{detail['role-no']}</TableCell>
          <TableCell>{detail.batch}</TableCell>
          <TableCell>{detail.language}</TableCell>
          <TableCell>{detail['passed-out']}</TableCell>
          <TableCell>{detail['contact-no']}</TableCell>
          <TableCell>{detail['mail-id']}</TableCell>
          <TableCell>{detail.district}</TableCell>
        </TableBody>
      </table>
    </div>
  );
}
