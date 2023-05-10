
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { App } from "./performanceChart";



export function OverallPerformance() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='overall-page'>
      <App />
    </div>
    </div>
  );
}
