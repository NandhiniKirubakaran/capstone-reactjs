import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';


export function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className='header-section'>
        <h1 className='heading-left'>Zen Student</h1>
        <div className='heading-right'>
          <h4>Arun Prakash</h4>
          <button className='logout-button'
          type="submit"
          onClick={() => navigate('/')}
        ><LogoutIcon/></button>
        </div>
      </nav>
    </div>
  );
}
