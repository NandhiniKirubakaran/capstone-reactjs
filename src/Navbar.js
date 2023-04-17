import { Link,  } from "react-router-dom";
import { sidebardata } from './sidebardata';




export function Navbar() {
  
  return (
    <div>
      <div className='sidebar-data'>
        {sidebardata.map((item, index) => {
          return (
            <ul className='nav-menu-items'>
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            </ul>
          );
        })}
        {/*<Button className='logout-button'
          type="submit"
          onClick={() => navigate('/')}
        ><LogoutIcon/>Logout</Button> */}
      </div>
    </div>
  );
}
