import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './Home';
import { StudentList } from './StudentList';
import { Signup } from './Signup';
import { ClassDetails } from './ClassDetails';
import { Profile } from './Profile';
import { Settings } from './Settings';
import { Tasks } from './Tasks';
import { OverallPerformance } from './OverallPerformance';
import { Syllabus } from './Syllabus';
import { Projects } from './Projects';
import { Attendance } from './Attendance';



function App() {

  return (
    <div className="App">
      
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class-details" element={<ClassDetails />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/signup-page" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/overall-performance" element={<OverallPerformance />} />
        <Route path="/settings" element={<Settings />} />
    
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
  
    </div>
  );
}


export default App;
