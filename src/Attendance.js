import { Header } from './Header';
import { Navbar } from './Navbar';
import { PieChart } from './PieChart';

export function Attendance() {
  return (
    <div>
       <Navbar />
      <Header />
      <div className='attendance-page'>
        <PieChart />
      </div>
    </div>
  );
}
