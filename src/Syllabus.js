import { Button } from "antd";
import { Header } from "./Header";
import { Navbar } from "./Navbar";


export function Syllabus() {


  return (
    <div>
      <Navbar />
      <Header />
      <div className='syllabus-page'>
        FSD-MERN SYLLABUS

        <div className="download-button">
          <Button
          href="src/assets/files/mern-syllabus.pdf"
          color="success"
          target="_blank"
          >
          Download File
          </Button>
        </div>
      </div>
    </div>
  );
}
