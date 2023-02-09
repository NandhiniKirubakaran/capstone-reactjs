import { Link, useNavigate } from "react-router-dom";
import { sidebardata } from './sidebardata';
import LogoutIcon from '@mui/icons-material/Logout';



export function Navbar() {
  const navigate = useNavigate();
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
        <button className='logout-button'
          type="submit"
          onClick={() => navigate('/')}
        ><LogoutIcon />Logout</button>
      </div>
    </div>
  );
}
