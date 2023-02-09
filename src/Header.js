import Avatar from '@mui/material/Avatar';



export function Header() {

  return (
    <div>
      <nav className='header-section'>
        <h1 className='heading-left'>Zen Student</h1>
        <div className='heading-right'>
          <h4>Nandhini Kirubakaran</h4>
          <Avatar>NK</Avatar>
        </div>
      </nav>
    </div>
  );
}
