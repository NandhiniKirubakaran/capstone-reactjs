import { Header } from "./Header";
import { Navbar } from "./Navbar";


export function Projects() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='projects-page'>
      <div className="card ">
        <img src="./img/travel app.jpeg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Project title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
      </div>
      <br></br>
      <div className="card ">
        <img src="./img/tracker app.jpeg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Project title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
      </div>
      </div>
    </div>
  );
}
