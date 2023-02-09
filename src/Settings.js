import { Header } from './Header';
import { Navbar } from './Navbar';

export function Settings() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='profile-page'>
        <div className='personal'>
          <div className='personal-details'>
            <label for="name">Github URL</label>
            <label for="phone">Portfolio URL</label>
            <label for="email">Resume URL</label>
          </div>
          <div className='personal-details-1'>
            <input style={{ borderRadius: '10px', height: '50px', width: '350px', border: '1px solid rgb(233, 222, 222)', paddingLeft: '15px' }} type="text" placeholder='Example: github.com/<Your-Username>' value="" />
            <input style={{ borderRadius: '10px', height: '50px', width: '350px', border: '1px solid rgb(233, 222, 222)', paddingLeft: '15px' }} type="text" placeholder='Example: YourSite.com' value="" />
            <input style={{ borderRadius: '10px', height: '50px', width: '350px', border: '1px solid rgb(233, 222, 222)', paddingLeft: '15px' }} type="text" placeholder='Example: docs.google.com/YourresumeParams' value="" />
          </div>
        </div>
      </div>
    </div>
  );
}
